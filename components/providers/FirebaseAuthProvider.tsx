'use client'
import { auth } from "@/lib/firebase/config";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useEffect, ReactNode } from "react";
import { useSession } from 'next-auth/react'

async function syncFirebaseAuth(session: Session){
    if(session && session.firebaseToken){
        try{
            await signInWithCustomToken(auth, session.firebaseToken)
        }catch(error){
            console.error("Error signing in with custom token: ", error)
        }
    }else{
        auth.signOut()
    }
}

export default function FirebaseAuthProvider({ 
    children 
} : { 
    children: ReactNode
}){
    const {data: session} = useSession()

    useEffect(() => {
        if(!session) return

        syncFirebaseAuth(session)
    }, [session])

    return(<>{children}</>)
}