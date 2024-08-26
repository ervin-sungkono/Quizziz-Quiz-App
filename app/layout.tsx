import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import FirebaseAuthProvider from "@/components/providers/FirebaseAuthProvider";
import ClientProviders from "@/components/providers/ClientProviders";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizziz",
  description: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className={inter.className}>
          <FirebaseAuthProvider>
            <ThemeProvider 
              attribute="class" 
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>  
  );
}
