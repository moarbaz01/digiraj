import Footer from "@/components/Home/Footer";
import Pricing from "@/components/Pricing/Main";
import { Metadata } from "next";

const BaseUrl = process.env.CLIENT_BASE_URL;

export const metadata: Metadata = {
  title: "Pricing | digiR",
  description:
    "Explore our competitive pricing for digital marketing services, including web design, app development, and social media management.",
  keywords:
    "pricing, digital marketing, web design, app development, social media management",
  robots: "index, follow",
  openGraph: {
    title: "digiR Pricing: Quality Digital Services at Great Rates",
    description:
      "Explore our competitive pricing for digital marketing services, including web design, app development, and social media management.",
    url: `${BaseUrl}/pricing`, // Replace with your actual URL
    siteName: "digir",
    images: [
      {
        url: `${BaseUrl}/pricingSeo.png`, // Replace with your actual image URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <Pricing />
      <Footer />
    </div>
  );
}
