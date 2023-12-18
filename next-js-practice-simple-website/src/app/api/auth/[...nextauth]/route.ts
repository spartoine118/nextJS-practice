import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnection from "../../../database/connection";
import { UserType } from "@/app/database/types/user-types";

const authOptions: AuthOptions = {
  pages: { signIn: "/login" },
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
    async jwt({ token }) {
      token.userRole = "user";
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "password",
          type: "text",
          placeholder: "Enter a password",
        },
      },
      async authorize(credentials, req) {
        const query: Partial<UserType> = {
          email: credentials?.username,
          password: credentials?.password,
        };
        const data = await dbConnection.collection("users").findOne(query);

        if (data) {
          // Any object returned will be saved in `user` property of the JWT
          const user = {
            id: data._id,
            username: ,
            email: credentials?.username,
          };
          console.log(user);
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
