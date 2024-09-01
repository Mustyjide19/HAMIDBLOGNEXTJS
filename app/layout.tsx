import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Container from "@/components/container";
//import Header from "@/components/header";
//import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   return (
       <html lang="en">
        <body className={inter.className}>
        <div className="mx-auto max-w-screen-lg">
          <div className="flex min-h-screen flex-col items-center p-24">
            {children}
            </div>
        </div>
        </body>
     

       </html>
   )
}