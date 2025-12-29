import React, { use } from "react";
import { notFound } from "next/navigation";
import PaymentPage from "../../components/PaymentPage";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { connect } from "mongoose";

const Username = async ({ params }) => {
  const { username } = await params;
  //If user not found, show 404 page
  const checkUser = async () => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) {
      notFound();
    }
  };
  await checkUser();

  return <PaymentPage username={username} />;
};

export default Username;

// export async function generateMetadata({ params }) {
//   return {
//     title: `Support ${params.username} - Get Me A Chai`,
//   };
// }
