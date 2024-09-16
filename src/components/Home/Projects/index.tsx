"use client";
import { khand } from "@/app/fonts/font";
import Image, { StaticImageData } from "next/image";
import stylevowSearch from "../../../public/stylevow_search.png";
import likeflames from "../../../public/likeflames.png";
import portfolioGsap from "../../../public/portfolioGsap.png";
import wazirX from "../../../public/wazirX.png";
import { BiLink } from "react-icons/bi";
import {
  FaFacebook,
  FaGoogle,
  FaMailBulk,
  FaInstagram,
  FaChartLine,
} from "react-icons/fa";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { div } from "framer-motion/client";

interface ProjectsInterface {
  title: string;
  tags: string[];
  image?: StaticImageData;
  description?: string;
  icon?: ReactElement;
}

// Data for Web Design Projects
const webDesignProjects: ProjectsInterface[] = [
  {
    title: "StyleVow Ecommerce Platform",
    tags: ["UI/UX", "React"],
    image: stylevowSearch,
  },
  {
    title: "LikeFlames : Social Media Platform",
    tags: ["UI/UX", "Frontend", "Backend", "Video Call"],
    image: likeflames,
  },
  {
    title: "Animated Portfolio",
    tags: ["UI/UX", "Frontend", "Animation"],
    image: portfolioGsap,
  },
  {
    title: "WazirX Clone",
    tags: ["UI/UX", "Clone"],
    image: wazirX,
  },
];

// Data for Digital Marketing Projects
const digitalMarketingProjects: ProjectsInterface[] = [
  {
    title: "Google Ads Campaign for E-commerce",
    tags: ["PPC", "Google Ads", "E-commerce"],
    description:
      "Ran a successful Google Ads campaign for an e-commerce platform, achieving a 30% increase in ROI within 3 months.",
    icon: <FaGoogle />,
  },
  {
    title: "Facebook Ads for Fashion Brand",
    tags: ["Facebook Ads", "Social Media", "Fashion"],
    description:
      "Managed Facebook Ads for a fashion brand, resulting in a 20% increase in website traffic and a 15% boost in sales.",
    icon: <FaFacebook />,
  },
  {
    title: "Email Marketing for SaaS Product",
    tags: ["Email Campaign", "Lead Generation", "SaaS"],
    description:
      "Designed and executed an email marketing campaign for a SaaS product, leading to a 25% conversion rate increase.",
    icon: <FaMailBulk />,
  },
  {
    title: "Instagram Growth Strategy for Fitness Influencer",
    tags: ["Social Media", "Instagram", "Influencer Marketing"],
    description:
      "Developed an Instagram growth strategy for a fitness influencer, increasing their followers by 50% in 6 months.",
    icon: <FaInstagram />,
  },
  {
    title: "SEO Optimization for Local Business",
    tags: ["SEO", "Local Business", "Optimization"],
    description:
      "Improved SEO for a local business, driving a 40% increase in organic traffic and higher search engine rankings.",
    icon: <FaChartLine />,
  },
];

const tabsData = ["Web Design", "Digital Marketing"];

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(0);

  const getData = () => {
    return selectedTab === 0 ? webDesignProjects : digitalMarketingProjects;
  };

  return (
    <div
      id="projects"
      className={`lg:min-h-screen md:px-6 px-4 md:my-12 my-6 `}
    >
      <div className="flex items-center max-w-screen-xl mx-auto flex-col justify-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-primary-dark font-bold ${khand.className} flex items-center gap-1 text-2xl md:text-4xl`}
        >
          Explore Our Work
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-500 text-center md:w-2/4 mt-4"
        >
          At <b>DigiR</b>, we specialize in providing cutting-edge website
          design, development, and digital marketing services to businesses of
          all sizes. Here’s a glimpse of some of the projects we’ve proudly
          worked on:
        </motion.p>

        {/* Tabs */}
        <div className="flex w-full items-center pt-12 flex-wrap justify-center gap-1 ">
          {tabsData.map((tab, index) => (
            <div
              onClick={() => setSelectedTab(index)}
              key={index}
              className={`py-2 px-4 cursor-pointer h-10 border rounded-md ${
                index === selectedTab
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-4 py-6 md:grid-cols-2">
          {getData().map((item, index) => (
            <div
              key={index}
              className="flex group flex-col cursor-pointer shadow-md shadow-primary md:hover:scale-105 transition border border-gray-100 p-6 rounded-md"
            >
              <div className="flex-[1] w-full flex items-center aspect-video justify-center border border-gray-500 p-4">
                {item.image ? (
                  <Image
                    alt={item.title}
                    height={300}
                    width={300}
                    src={item.image}
                    className="object-cover h-full aspect-video w-full"
                  />
                ) : (
                  <div className="text-7xl text-primary-dark">{item.icon}</div>
                )}
              </div>
              <div className="flex items-center flex-wrap gap-2 my-4">
                {item.tags.map((t, index) => (
                  <div
                    key={index}
                    className=" bg-primary-dark transition text-xs text-white px-4 py-1 shadow-sm rounded-full"
                  >
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2">
                <h1 className="text-xl font-bold">{item.title}</h1>
                {selectedTab === 0 && (
                  <div className="relative group/link cursor-pointer">
                    <BiLink className="bg-black group-hover:md:block group-hover:scale-110 transition md:hidden text-white h-6 text-sm rounded-full w-6 p-1" />
                    <div className=" text-xs bg-gray-300 p-1 md:group-hover/link:block hidden rounded-full absolute -top-2 -right-5">
                      Link
                    </div>
                  </div>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
