"use client";
import { khand } from "@/app/fonts/font";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites designed to meet your business needs with a focus on user experience and performance.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance mobile apps for both iOS and Android platforms, tailored to your business goals.",
    icon: <FaMobileAlt />,
  },
  {
    title: "SEO Services",
    description:
      "Boost your online visibility with our expert SEO services, driving more traffic and increasing conversions.",
    icon: <FaSearch />,
  },
  {
    title: "Graphic Design",
    description:
      "Creative designs for your brand, including logos, banners, and promotional materials that resonate with your audience.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to help grow your business and reach your target audience effectively.",
    icon: <FaBullhorn />,
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="lg:min-h-screen py-12 bg-primary-bg px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start from below with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto flex items-center justify-center flex-col gap-4"
      >
        <h2 className={`text-4xl font-bold ${khand.className}`}>
          Our Services
        </h2>
        <p className="md:w-1/2 text-lg text-gray-500 w-full text-center">
          Explore our range of expert web development, mobile app creation, and
          digital marketing services, designed to elevate your brand and drive
          growth.
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-8 md:gap-y-10 gap-y-5 gap-x-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{
                boxShadow: "2px 2px 5px #FFC0CB",
              }}
              className="flex items-center py-6 relative px-4 aspect-video bg-white border rounded-md justify-center flex-col gap-2"
              initial={{ opacity: 0, y: 20 }} // Start from below with opacity 0
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 0.5, type: "tween" }}
              viewport={{ once: true }}
            >
              <div className="bg-black text-white flex items-center justify-center rounded-full p-2 h-12 w-12">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="text-sm px-8 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
