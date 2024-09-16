import Contact from "@/components/Home/Contact";
import Faqs from "@/components/Home/Faqs";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
// import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Hero />
      <WhyChooseUs />
      <Services />
      {/* <Projects /> */}
      <Testimonials />
      <Contact />
      <Faqs />
      <Footer />
    </div>
  );
}
