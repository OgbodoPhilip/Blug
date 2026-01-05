import type { Metadata } from "next";
import { Suspense } from 'react'
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Clapperboard } from "lucide-react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Blug",
  description: "Ablog website for recent tech news",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.className} `}
      >
        <Header/>
        {children}
      <Suspense fallback={<footer className="h-20" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
    </ClerkProvider>
  );
}
