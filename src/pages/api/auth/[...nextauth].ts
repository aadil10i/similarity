import { authOptions } from "@/lib/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth(authOptions);
