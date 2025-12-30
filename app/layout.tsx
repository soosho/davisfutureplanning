import React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
});

export const metadata: Metadata = {
  title: "Davis Future Planning LLC – \"Everyone In Your Household Should Have Excellent Credit \"",
  description: "Credit repair and financial planning services to help you achieve financial freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${workSans.variable} font-work antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
