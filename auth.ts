import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { adminAuth, adminDb } from '@/lib/firebase/admin';

export const nextAuthOptions : NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
        user && (token.sub = user.id)
        return token
    },
    session: async ({ session, token }) => {
        if(session.user){
          if(token.sub){
            session.user.id = token.sub

            const firebaseToken = await adminAuth.createCustomToken(token.sub)
            session.firebaseToken = firebaseToken
          }
        }
        return session
    }
  },
  pages:{
    signIn: "/login",
    error: "/login"
  },
  adapter: FirestoreAdapter(adminDb) as Adapter
} satisfies NextAuthOptions