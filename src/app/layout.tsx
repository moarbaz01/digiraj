import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import { hind } from "./fonts/font";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "DigiR - Build your business with us",
  description: "Your success our mission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.className} antialiased`}>
        <main className="md:mt-40 mt-28">
          {" "}
          {/* Adjust values based on navbar height */}
          <NextTopLoader color="#FF92A5" />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
