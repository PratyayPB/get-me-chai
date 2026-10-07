"use server";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export const initiate = async (amount, to_username, paymentForm) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return {
      error: "Authentication required: Please log in to make a payment.",
    };
  }

  await connectDB();

  // Authorization check: OAuth email must match user email in database
  const payer = await User.findOne({ email: session.user.email });
  if (!payer || payer.email !== session.user.email) {
    return {
      error: "Authorization failed: OAuth email does not match user email.",
    };
  }

  // Fetch Razorpay credentials from database for recipient
  let user = await User.findOne({ username: to_username }).lean();

  if (!user) {
    return { error: `User not found: ${to_username}` };
  }

  // Restrict user from paying to themselves
  if (payer.email === user.email || payer.username === to_username) {
    return {
      error: "You cannot make a payment to yourself.",
    };
  }

  if (!user.razorpayid || !user.razorpaysecret) {
    return {
      error: `Razorpay credentials are missing for user ${to_username}. Please add key_id and key_secret to the user's profile.`,
    };
  }

  var instance = new Razorpay({
    key_id: user.razorpayid.trim(),
    key_secret: user.razorpaysecret.trim(),
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  try {
    let x = await instance.orders.create(options);

    // Create a payment object showing a pending payment in database
    await Payment.create({
      oid: x.id,
      amount: amount,
      to_user: to_username,
      name: paymentForm.name || session.user.name,
      message: paymentForm.message,
    });

    // Ensure the returned object is a plain JSON object to avoid Next.js serialization errors
    return JSON.parse(JSON.stringify(x));
  } catch (error) {
    console.error("Razorpay Error:", error);
    let errorMessage = "Failed to initiate payment with Razorpay";
    if (error.error && error.error.description) {
      errorMessage = error.error.description;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { error: errorMessage };
  }
};

export const fetchUser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username });
  if (!u) return null;
  let user = u.toObject({ flattenObjectIds: true });
  return user;
};

export const fetchPayments = async (username) => {
  await connectDB();
  // Sort by decreasing order of amount and flatten objectIds
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean({ flattenObjectIds: true });
  return p;
};

export const updateProfile = async (data, oldUsername) => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return { error: "Authentication required: Please log in." };
  }

  await connectDB();

  // Authorization check: OAuth email must match user email in database
  const currentUser = await User.findOne({ email: session.user.email });
  if (
    !currentUser ||
    currentUser.email !== session.user.email ||
    currentUser.username !== oldUsername
  ) {
    return {
      error: "Authorization failed: OAuth email does not match user email.",
    };
  }

  let ndata = Object.fromEntries(data);
  // Ensure email matches session email
  ndata.email = session.user.email;

  // Check if new username is taken
  if (oldUsername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username cannot be changed to an existing username" };
    }
  }

  await User.updateOne({ email: session.user.email }, ndata);

  // Update all payments to new username
  if (oldUsername !== ndata.username) {
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: ndata.username },
    );
  }

  return { success: true };
};
