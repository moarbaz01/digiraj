"use client";
import { khand } from "@/app/fonts/font";
import {
  MdOutlineArrowOutward,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { FaTwitter } from "react-icons/fa6";
import { BsArrowRightShort } from "react-icons/bs";

const data = [
  { label: "Pricing", path: "/pricing" },
  { label: "Why Us", path: "/#whyChooseUs" },
  { label: "About us", path: "/about" },
  { label: "Testimonials", path: "/#testimonials" },
  { label: "Our Work", path: "/projects" },
];

export default function Navbar() {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClickOnDrawerLink = (path: string) => {
    setOpenSidebar(false);
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full md:py-8 py-4 md:px-6 px-4 backdrop-blur-md md:backdrop-blur-none md:bg-white z-[999] border-b-[1px]">
      <div className="flex items-center max-w-screen-xl mx-auto justify-between">
        <div
          onClick={() => router.push("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image src={logo} alt="DigiR" height={40} width={40} />
          <h1
            className={`text-2xl ${khand.className} md:hidden lg:block group/logo font-[600] text-black tracking-wide`}
          >
            DIGI<span className="rotate-180 text-sm">R</span>
          </h1>
        </div>
        <ul className="md:flex items-center gap-6 hidden">
          {data.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => router.push(item.path)}
              className="cursor-pointer group/link text-black flex items-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="group-hover/link:text-primary-dark">
                {item.label}
              </span>
              <MdOutlineKeyboardArrowUp className="group-hover/link:rotate-180 group-hover/link:text-primary-dark transition" />
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <FaTwitter
            onClick={() => router.push("https://x.com/DigiR_Raj")}
            fontSize={20}
            className="cursor-pointer hidden md:block"
          />
          <FaInstagram
            onClick={() =>
              router.push("https://instagram.com/digir_innovations")
            }
            fontSize={20}
            className="cursor-pointer hidden md:block"
          />
          <motion.button
            onClick={() => router.push("/#contact")}
            className="lg:flex items-center gap-2 hidden group/talk font-[500] bg-primary-dark text-white py-2 px-4 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>Let&apos;s Talk</span>
            <MdOutlineArrowOutward className="group-hover/talk:rotate-45 transition" />
          </motion.button>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpenSidebar(true)}
          >
            <IoMenuOutline size={32} />
          </div>
        </div>
      </div>
      <Drawer
        open={openSidebar}
        anchor="right"
        onClose={() => setOpenSidebar(false)}
        PaperProps={{
          sx: {
            width: 300,
            backgroundColor: "#fff",
            borderRadius: "0 0 0 16px",
            transition: "transform 0.3s ease",
          },
        }}
      >
        <div className="w-full p-4 flex flex-col h-full justify-between">
          <motion.div
            className="w-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            // exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div
              onClick={() => setOpenSidebar(false)}
              className="w-full flex items-center justify-end pb-4 cursor-pointer"
            >
              <RxCross1 size={28} />
            </div>
            <ul className="flex flex-col">
              {data.map((item, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleClickOnDrawerLink(item.path)}
                  className="flex py-4 px-2 border-b items-center gap-2 cursor-pointer"
                  initial={{ opacity: 0, x: "50%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-xl">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="flex items-center gap-2">
            <BsArrowRightShort size={32} className="text-gray-500" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0 * 0.3 }}
              className="hover:opacity-50"
              onClick={() => router.push("https://x.com/DigiR_Raj")}
            >
              <SocialIcon
                network="twitter"
                style={{
                  height: "32px",
                  width: "32px",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 * 0.3 }}
              className="hover:opacity-50"
              onClick={() =>
                router.push("https://instagram.com/digir_innovations")
              }
            >
              <SocialIcon
                network="instagram"
                style={{
                  height: "32px",
                  width: "32px",
                }}
              />
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2 * 0.3 }}
              className="hover:opacity-50"
              onClick={() =>
                router.push(
                  "https://linkedin.com/company/digir-innovations-and-technologies"
                )
              }
            >
              <SocialIcon
                network="linkedin"
                style={{
                  height: "32px",
                  width: "32px",
                }}
              />
            </motion.div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
}
