import React from "react";
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import PaymentPage from "../../components/PaymentPage";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

const Username = async ({ params }) => {
  // Check if user is authenticated
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    redirect("/login");
  }

  await connectDB();

  // Authorization check: OAuth email must match user email in database
  const dbUser = await User.findOne({ email: session.user.email });
  if (!dbUser || dbUser.email !== session.user.email) {
    redirect("/login");
  }

  const { username } = await params;

  // If creator not found, show 404 page
  let creator = await User.findOne({ username: username });
  if (!creator) {
    notFound();
  }

  return <PaymentPage username={username} />;
};

export default Username;
