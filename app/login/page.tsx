"use client"
import { signIn, signOut } from "next-auth/react";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function LoginPage(){
    return(
        <DefaultLayout>
            <button onClick={() => signIn("google")}>Sign In Google</button>
            <button onClick={() => signOut()}>Sign Out</button>
        </DefaultLayout>
    )
}