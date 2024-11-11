import AboutUs from "@/components/About/Main";
import { Metadata } from "next";

const BaseUrl = process.env.CLIENT_BASE_URL;
export const metadata: Metadata = {
  title: "About Us | digir",
  description:
    "Learn more about digir, your trusted partner in digital marketing services.",
  keywords: "about, digir, digital marketing, web design, app development",
  robots: "index, follow",
  openGraph: {
    title: "About : Elevating Your Digital Marketing Game",
    description: "Learn more about digir and our digital marketing expertise.",
    url: `${BaseUrl}/about`,
    siteName: "digir",
    images: [
      {
        url: `${BaseUrl}/aboutSeo.png`, // Replace with your actual about image URL
        width: 800,
        height: 600,
        alt: "About digir",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DigiR_Raj", // Replace with your Twitter handle
    title: "About digir: Elevating Your Digital Marketing Game",
    description: "Learn more about digir and our services.",
    images: `${BaseUrl}/aboutSeo.png`, // Replace with your actual about image URL
  },
};
export default function Page() {
  return (
      <AboutUs />
  );
}
