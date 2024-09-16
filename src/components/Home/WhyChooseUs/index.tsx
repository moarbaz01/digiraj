"use client";
import { khand, hind } from "@/app/fonts/font";
import {
  FaClock,
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaDesktop,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Features Data
const featuresData = [
  {
    icon: <FaClock className="text-white text-2xl" />,
    title: "Fast Processing",
    desc: "Timely project delivery without compromising quality.",
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: "Full-Stack Expertise",
    desc: "Expertise in frontend and backend technologies for complete solutions.",
  },
  {
    icon: <FaPaintBrush className="text-white text-2xl" />,
    title: "Creative Design",
    desc: "Innovative, user-friendly designs that enhance user experience.",
  },
  {
    icon: <FaBullhorn className="text-white text-2xl" />,
    title: "Digital Marketing",
    desc: "Boost your online presence with expert digital marketing strategies.",
  },
  {
    icon: <FaSearch className="text-white text-2xl" />,
    title: "SEO Optimization",
    desc: "Improve search engine ranking with our comprehensive SEO services.",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Performance Analytics",
    desc: "Track and optimize website performance with advanced analytics.",
  },
  {
    icon: <FaDesktop className="text-white text-2xl" />,
    title: "Website Maintenance",
    desc: "Ensure smooth operation with ongoing maintenance services.",
  },
];

export default function WhyChooseUs() {
  return (
    <div
      id="whyChooseUs"
      className="lg:min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="flex flex-col items-center max-w-screen-xl mx-auto justify-center">
        {/* Heading */}
        <motion.h1
          className={`text-primary-dark font-bold ${khand.className} flex items-center gap-1 text-2xl md:text-4xl`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Reason for choosing us?
        </motion.h1>
        <p className="md:w-3/4 text-lg mt-4 text-center">
          At{" "}
          <span className="font-bold">
            DIGI<span className="text-xs">R</span>
          </span>
          , we deliver custom web and mobile solutions that drive your business
          forward.
        </p>
        <div className="md:pt-12 pt-6 grid lg:grid-cols-3 sm:grid-cols-2 md:gap-y-10 gap-y-5 gap-x-5">
          {featuresData.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col bg-white p-4 w-full min-h-[200px] justify-center relative backdrop-blur-3xl rounded-md border items-center gap-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`h-24 w-24 rounded-full bg-purple-400 blur-3xl absolute even:block hidden top-0`}
              ></div>
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full text-white text-sm bg-primary-dark`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h1
                  className={`${hind.className} font-bold whitespace-nowrap text-lg md:text-2xl`}
                >
                  {item.title}
                </h1>
                <p className="md:text-sm text-center md:w-3/4 w-2/3 text-xs">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
