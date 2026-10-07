import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

const UserPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    redirect("/login");
  }

  await connectDB();
  const dbUser = await User.findOne({ email: session.user.email });

  // Authorization check: OAuth email must match user email in database
  if (!dbUser || dbUser.email !== session.user.email) {
    redirect("/login");
  }

  // Redirect authorized user to their dashboard
  redirect("/dashboard");
};

export default UserPage;
