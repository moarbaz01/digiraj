import type { Metadata } from "next";
import "./globals.css";
import { hind } from "./fonts/font";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "DigiR",
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
        <NextTopLoader color="#FF92A5" />
        <main className="md:mt-40 mt-24">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
