
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {email, password} = credentials;
        try{
            await connectMongoDB();
            const user = await User.findOne({email});

            if(!user){
                return null;
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if(!passwordMatch){
                return null;
            }
            return user;
        }catch(error){
            console.log(error)
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
        return { ...token };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;
        return session;
    },
},
  session: {
    strategy: "jwt",
    maxAge: 1 * 30 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };