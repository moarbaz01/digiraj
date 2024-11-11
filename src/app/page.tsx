import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/Faqs";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const BASE_URL = process.env.CLIENT_BASE_URL;
export const metadata: Metadata = {
  title: "digir | Elevating Your Digital Presence",
  description:
    "Welcome to digir, your partner in digital marketing. We offer web design, app development, social media management, and more.",
  keywords:
    "digital marketing, web design, app development, social media management",
  robots: "index, follow",
  openGraph: {
    title: "digir: Elevating Your Digital Presence",
    description:
      "Welcome to digir, your partner in digital marketing. We offer web design, app development, social media management, and more.",
    url: `${BASE_URL}/`, // Your base URL
    siteName: "digir",
    images: [
      {
        url: `${BASE_URL}/HomePageSeo.png`, // Full URL to your image
        width: 800,
        height: 600,
        alt: "Welcome to digir",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DigiR_Raj", // Replace with your Twitter handle
    title: "digir: Elevating Your Digital Presence",
    description: "Welcome to digir, your partner in digital marketing.",
    images: `${BASE_URL}/HomePageSeo.png`, // Full URL to your image
  },
};

export default function Home() {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
      <Faqs />
    </div>
  );
}
