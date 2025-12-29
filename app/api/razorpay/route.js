import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import { NextResponse } from "next/server";
import User from "@/models/User";

export const POST = async (request) => {
  await connectDB();
  let body = await request.formData();
  // console.log(body);
  body = Object.fromEntries(body);

  //Check if RazorpayOrderId present on server
  let p = await Payment.findOne({ oid: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json({
      success: false,
      message: "Razorpay Order Id not found on server",
    });
  }
  //Fetch Key Secret from Database
  let user = await User.findOne({ username: p.to_user });
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "User not found",
    });
  }
  const secret = user.razorpaysecret;
  console.log("Secret:", secret);
  console.log(user);

  //Verify Payment Signature
  let xx = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    secret
  );

  if (xx) {
    const updatedPayment = await Payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: true },
      { new: true }
    );
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
    );
  } else {
    return NextResponse.error("Payment verification failed");
  }
};
