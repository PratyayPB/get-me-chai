"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentForm) => {
  await connectDB();
  //Fetch Key Secret from Database
  let user = await User.findOne({ username: to_username });

  var instance = new Razorpay({
    key_id: user.razorpayid,
    key_secret: user.razorpaysecret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  //create a payment object showing a pending payment in database
  await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentForm.name,
    message: paymentForm.message,
  });
  return x;
};

export const fetchUser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });

  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const fetchPayments = async (username) => {
  await connectDB();
  //sort by decreasing order of amount and flatten objectIds
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean({ flattenObjectIds: true });
  console.log(p);
  return p;
};

export const updateProfile = async (data, oldUsername) => {
  await connectDB();

  let ndata = Object.fromEntries(data);
  //Check if new username is taken
  if (oldUsername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username cannot be changed" };
    }
  }
  await User.updateOne({ email: ndata.email }, ndata);
  //Update all payments to new username
  if (oldUsername !== ndata.username) {
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: ndata.username },
    );
  }
};
