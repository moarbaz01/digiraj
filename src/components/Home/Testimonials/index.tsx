"use client";

import { hind, khand } from "@/app/fonts/font";
import { FaStar } from "react-icons/fa6";
import { BsQuote } from "react-icons/bs";
import { motion } from "framer-motion";

const data = [
  {
    desc: `Collaborating with digiR was an incredible experience! They created a high-quality website that exceeded my expectations. Their attention to detail and timely delivery made the whole process seamless and stress-free. Highly recommended for any web development or digital marketing project!`,
    name: "— Rohan S., Small Business Owner",
    projectType: "E-commerce Website",
  },
  {
    desc: `I was amazed by how digiR understood my vision and turned it into a reality with a stunning website. Their communication was smooth, and the results were outstanding. I'm glad to have chosen them for my website and marketing needs.`,
    name: "— Priya M., Freelancer",
    projectType: "Personal Portfolio",
  },
  {
    desc: `As a first-time entrepreneur, I needed a website that was professional and user-friendly. digiR guided me through every step, offering valuable suggestions and delivering beyond my expectations. I highly recommend them for business solutions.`,
    name: "— Ankit T., Entrepreneur",
    projectType: "Business Website",
  },
  {
    desc: `I'm extremely satisfied with the website digiR developed for my online store. The design is clean, the performance is excellent, and the project was completed ahead of schedule. I would definitely collaborate with them again for future projects.`,
    name: "— Kavita R., Online Store Owner",
    projectType: "E-commerce Website",
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="lg:min-h-screen flex items-center justify-center px-6 py-12 bg-primary-dark"
    >
      <div className="flex items-center flex-col max-w-screen-xl mx-auto">
        <h1
          className={`text-black font-bold ${khand.className} flex items-center gap-1 text-2xl md:text-5xl`}
        >
          Testimonials
        </h1>
        <hr className="h-[2px] bg-yellow-400 w-1/3" />
        <div className="flex flex-col items-center justify-center md:mt-6 mt-6">
          <h1
            className={`text-white font-bold ${hind.className} flex items-center gap-1 text-2xl md:text-4xl`}
          >
            See What They <i>Are Saying!</i>
          </h1>
          <div className="grid md:gap-x-10 gap-x-20 gap-y-8 md:gap-y-10 md:grid-cols-2 px-2 md:px-0 mt-6 md:mt-16">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className={`flex-[1] relative px-6 py-4 md:even:rotate-2 md:odd:-rotate-2 border max-w-[500px] backdrop-blur-3xl flex-col ${
                  index % 2 == 0 ? "items-start" : "items-end"
                } flex gap-2 rounded-md bg-white`}
                initial={{ opacity: 0, y: 20, rotate: 0 }} // Start from below with opacity 0
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 == 0 ? 5 : -5,
                }} // Fade in and move to original position
                transition={{ duration: 0.5, type: "tween" }}
                viewport={{ once: true }} // Trigger animation once
              >
                <p className="text-sm">
                  <b>Project : {item.projectType}</b>
                </p>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 shadow-sm" />
                  <FaStar className="text-yellow-500 shadow-sm" />
                  <FaStar className="text-yellow-500 shadow-sm" />
                  <FaStar className="text-yellow-500 shadow-sm" />
                  <FaStar className="text-yellow-500 shadow-sm" />
                </div>
                <BsQuote
                  fontSize={42}
                  className={`absolute opacity-20 top-0 ${
                    index % 2 == 0 ? "right-0" : "left-0"
                  }`}
                />
                <p className={`text-sm`}>{item.desc}</p>
                <p>
                  <b>{item.name}</b>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
