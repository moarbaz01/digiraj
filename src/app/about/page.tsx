import AboutUs from "@/components/About/Main";
import Footer from "@/components/Home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | digir",
  description:
    "Learn more about digir, your trusted partner in digital marketing services.",
  keywords: "about, digir, digital marketing, web design, app development",
  robots: "index, follow",
  openGraph: {
    title: "About Us | digir",
    description: "Learn more about digir and our digital marketing expertise.",
    url: "https://digirinnovations.com/about",
    siteName: "digir",
    images: [
      {
        url: "../../public/choice.jpg", // Replace with your actual about image URL
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
    title: "About Us | digir",
    description: "Learn more about digir and our services.",
    images: "../../public/choice.jpg", // Replace with your actual about image URL
  },
};
export default function Page() {
  return (
    <div>
      <AboutUs />
      <Footer />
    </div>
  );
}
