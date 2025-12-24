import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "../../../../db/connectDB";
import User from "../../../../models/User";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider !== "github") return true;

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
});

export { handler as GET, handler as POST };
