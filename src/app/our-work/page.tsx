import Footer from "@/components/Home/Footer";
import Projects from "@/components/Home/Projects";
import { Metadata } from "next";

const BaseUrl = process.env.CLIENT_BASE_URL;
export const metadata: Metadata = {
  title: "Our Work | digir",
  description:
    "Explore our portfolio of successful digital marketing projects, including web design and app development.",
  keywords:
    "portfolio, our work, digir, digital marketing, web design, app development",
  robots: "index, follow",
  openGraph: {
    title: "Our Work : explore our previous client works",
    description:
      "Explore our successful projects and digital marketing solutions.",
    url: `${BaseUrl}/our-work`,
    siteName: "digir",
    images: [
      {
        url: `${BaseUrl}/workSeo.png`, // Replace with your actual our work image URL
        width: 800,
        height: 600,
        alt: "Our Work at digir",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DigiR_Raj", // Replace with your Twitter handle
    title: "Our Work | digir",
    description: "Explore our successful projects and solutions.",
    images: `${BaseUrl}/workSeo.png`, // Replace with your actual our work image URL
  },
};

export default function Page() {
  return (
    <div>
      <Projects />
      <Footer />
    </div>
  );
}
