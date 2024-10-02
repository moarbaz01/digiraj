import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/Faqs";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Home | digir",
  description:
    "Welcome to digir, your partner in digital marketing. We offer web design, app development, social media management, and more.",
  keywords:
    "digital marketing, web design, app development, social media management",
  robots: "index, follow",
  openGraph: {
    title: "Home | digir",
    description:
      "Welcome to digir, your partner in digital marketing. We offer web design, app development, social media management, and more.",
    url: "https://digirinnovations.com/", // Your base URL
    siteName: "digir",
    images: [
      {
        url: "../public/HomePageSeo.png", // Replace with your actual home image URL
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
    title: "Home | digir",
    description: "Welcome to digir, your partner in digital marketing.",
    images: "../public/HomePageSeo.png", // Replace with your actual home image URL
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
      <Footer />
    </div>
  );
}
