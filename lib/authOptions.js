import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/db/connectDB";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider !== "google") return true;

      await connectDB();

      let dbUser = await User.findOne({ email: user.email });

      if (!dbUser) {
        dbUser = await User.create({
          email: user.email,
          username: user.email.split("@")[0],
          name: user.name || user.email.split("@")[0],
          profilepic: user.image,
        });
      }

      user.name = dbUser.username;
      return true;
    },

    async session({ session }) {
      await connectDB();

      const dbUser = await User.findOne({
        email: session.user.email,
      });

      if (dbUser) {
        session.user.name = dbUser.username;
        session.user.id = dbUser._id.toString();
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || process.env.GOOGLE_SECRET,
};
