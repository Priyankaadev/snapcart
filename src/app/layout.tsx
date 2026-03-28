import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Provider from "@/Provider";

export const metadata: Metadata = {
  title: "SNAPCART | 10 Minutes Grocery Delivery App",
  description: "SNAPCART is a cutting-edge grocery delivery app that promises to deliver your groceries in just 10 minutes. With a user-friendly interface and a wide selection of products, SNAPCART is revolutionizing the way you shop for groceries. Whether you're in a rush or simply want the convenience of having your groceries delivered to your doorstep, SNAPCART has got you covered. Experience the future of grocery shopping with SNAPCART today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html
      lang="en"
    >
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white"
        suppressHydrationWarning>
       <Provider>
        {children}
        </Provider>
        </body>
    </html>
  );
}
