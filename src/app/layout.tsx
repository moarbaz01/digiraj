import type { Metadata } from "next";
import "./globals.css";
import { hind } from "./fonts/font";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Home/Navbar";

export const metadata: Metadata = {
  title: "digir",
  description:
    "Welcome to digir, your partner in digital marketing. We offer web design, app development, social media management, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hind.className} antialiased`}>
        <Navbar />
        <NextTopLoader color="#FF92A5" />
        <main className="md:mt-40 mt-28">{children}</main>
      </body>
    </html>
  );
}
