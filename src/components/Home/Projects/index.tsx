"use client";
import { khand } from "@/app/fonts/font";
import Image from "next/image";
import stylevowSearch from "../../../public/stylevow_search.png";
import likeflames from "../../../public/likeflames.png";
import portfolioGsap from "../../../public/portfolioGsap.png";
import wazirX from "../../../public/wazirX.png";
import { BiLink } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

const data = [
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

const tabsData = ["Web Design", "Social Media Management"];
export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(0);
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
          className={`text-primary-dark font-bold ${khand.className} flex items-center gap-1  text-2xl md:text-4xl`}
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
        <div className="flex w-full items-center pt-12 flex-wrap md:justify-center gap-1 ">
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
          {data.map((item, index) => (
            <div
              key={index}
              className="flex group flex-col cursor-pointer shadow-md shadow-primary md:hover:scale-105 transition border border-gray-100 p-4 rounded-md"
            >
              <div className="flex-[1] w-full border border-purple-400">
                <Image
                  alt="StyleVow"
                  height={300}
                  width={300}
                  src={item.image}
                  className="object-cover h-full aspect-video w-full"
                />
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
                <div className="relative group/link cursor-pointer">
                  <BiLink className="bg-black group-hover:md:block group-hover:scale-110 transition md:hidden text-white h-6 text-sm rounded-full w-6 p-1" />
                  <div className=" text-xs bg-gray-300 p-1 md:group-hover/link:block hidden rounded-full absolute -top-2 -right-5">
                    Link
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
