"use client";
import { khand } from "@/app/fonts/font";
import Image from "next/image";
import { BiPhone } from "react-icons/bi";
import man1 from "../../../public/man/1.jpg";
import man2 from "../../../public/man/2.jpg";
import man3 from "../../../public/man/3.jpg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import heroImage from "../../../public/hero.svg";
import { BsArrowUp } from "react-icons/bs";
import { motion } from "framer-motion";

const manData = [man1, man2, man3];

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);
  const router = useRouter();

  const handleForwardTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:min-h-screen relative h-auto my-6 md:my-16 md:px-6 px-4">
      {showArrow && (
        <motion.div
          onClick={handleForwardTop}
          className="flex items-center cursor-pointer bg-black text-white p-2 h-10 w-10 fixed bottom-10 right-5 z-30 rounded-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BsArrowUp fontSize={36} className="font-extrabold" />
        </motion.div>
      )}
      <div
        className={`lg:h-52 h-32 lg:w-52 w-32 rounded-full bg-primary blur-3xl absolute left-0 top-10 -z-0`}
      ></div>

      <div className="flex max-w-screen-xl mx-auto flex-col items-center md:justify-between">
        <div className="flex flex-col items-center justify-center flex-[1] w-full md:pb-12 pb-10 relative">
          <motion.h1
            className={`${khand.className} md:text-7xl selection:bg-black selection:text-primary-dark text-center text-4xl font-extrabold`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Digital Growth{" "}
            <span className="text-primary-dark">Partner</span>
          </motion.h1>

          <motion.p
            className="md:w-2/4 text-lg mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Expert <b>Digital Marketing</b> and <b>Web Design</b> Services to
            Amplify Your Brand, Boost Engagement, and Drive Results
          </motion.p>

          <motion.div
            className="flex items-center md:flex-row flex-col gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => router.push("#contact")}
              className="gap-2 w-full group flex items-center justify-center hover:opacity-80 transition bg-black py-4 px-4 text-white rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span>Contact Us</span>{" "}
              <BiPhone className="group-hover:animate-bounce" />
            </motion.button>
            <div className="flex items-center -space-x-4 pl-6">
              {manData.map((url, index) => (
                <div
                  key={index}
                  className="h-12 w-12 aspect-square rounded-full -translate-x-6 ring-primary-dark ring-2"
                >
                  <Image
                    src={url}
                    alt={index + "Hello"}
                    height={40}
                    width={40}
                    className="rounded-full h-full w-full object-cover "
                  />
                </div>
              ))}
              <p className="flex items-center text-lg whitespace-nowrap font-semibold text-black flex-col">
                50+ Clients
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-md py-4 md:px-6 px-4 flex-[1] w-full"
        >
          <div className="w-full h-3/4 bg-gradient-to-t from-white to-transparent absolute -bottom-2 left-0 z-10"></div>
          <Image
            src={heroImage}
            alt="Stylevow Website"
            height={720}
            width={1080}
            className="object-cover aspect-video w-full rounded-md mt-4"
          />
        </motion.div>
      </div>
    </div>
  );
}
