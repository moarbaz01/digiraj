"use client";
import {
  MdOutlineArrowOutward,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../../public/logo.png";
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
  { label: "About us", path: "/about" },
  { label: "Our Work", path: "/our-work" },
  { label: "LawNXT", path: "/lawnxt" },
];

const lawnxtDropdownItems = [
  { label: "Features", path: "/lawnxt" },
  { label: "Terms And Conditions", path: "/lawnxt/termsandconditions" },
  { label: "Download App", path: "/lawnxt/download" },
];

export default function Navbar() {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClickOnDrawerLink = (path: string) => {
    setOpenSidebar(false); // Close the sidebar after selecting a link
    router.push(path); // Navigate to the selected path
  };

  const handleDropdownClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    setOpenSidebar(false); // Close the sidebar after selecting a dropdown item
    router.push(path); // Navigate to the selected path
  };

  const handleMenuItemClick = (item: { label: string; path: string }) => {
    if (item.label !== "LawNXT") {
      setOpenSidebar(false); // Close the sidebar when clicking on any item except "LawNXT"
      router.push(item.path);
    } else {
      setIsDropdownOpen((prev) => !prev); // Toggle dropdown menu for "LawNXT"
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full md:py-8 py-4 md:px-6 px-4 backdrop-blur-md md:backdrop-blur-none md:bg-white z-[999] border-b-[1px]">
      <div className="flex items-center max-w-screen-xl mx-auto justify-between">
        <div onClick={() => router.push("/")} className="h-10 cursor-pointer">
          <Image
            src={logo}
            alt="DigiR"
            height={300}
            width={200}
            className="h-full w-full"
          />
        </div>
        <ul className="md:flex items-center gap-6 hidden">
          {data.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer group/link text-black flex items-center gap-1 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                onMouseEnter={() =>
                  item.label === "LawNXT" && setIsDropdownOpen(true)
                }
                onMouseLeave={() =>
                  item.label === "LawNXT" && setIsDropdownOpen(false)
                }
                className="relative"
              >
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent click event from triggering
                    handleMenuItemClick(item);
                  }}
                  className="group-hover/link:text-primary-dark flex items-center gap-1"
                >
                  {item.label}
                  {item.label === "LawNXT" &&
                    (isDropdownOpen ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    ))}
                </span>

                {/* Dropdown Menu */}
                {item.label === "LawNXT" && isDropdownOpen && (
                  <motion.ul
                    className="absolute top-full left-0 w-fit bg-white border rounded-md p-2 space-y-1 z-50 shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {lawnxtDropdownItems.map((dropdownItem, dropdownIndex) => (
                      <motion.li
                        key={dropdownIndex}
                        onClick={(e) =>
                          handleDropdownClick(e, dropdownItem.path)
                        } // Prevent parent click when clicking on dropdown
                        className="cursor-pointer text-sm hover:text-primary-dark text-nowrap border-b border-b-gray-50 px-2 py-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {dropdownItem.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
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

      {/* Sidebar Drawer */}
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
                  className="py-4 px-2 border-b gap-2 cursor-pointer"
                  initial={{ opacity: 0, x: "50%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-xl">{item.label}</p>
                  {item.label === "LawNXT" && (
                    <ul className="list-disc pl-4">
                      {lawnxtDropdownItems.map(
                        (dropdownItem, dropdownIndex) => (
                          <li
                            key={dropdownIndex}
                            onClick={(e) =>
                              handleDropdownClick(e, dropdownItem.path)
                            }
                            className="cursor-pointer text-lg hover:text-primary-dark text-nowrap px-2 py-2"
                          >
                            {dropdownItem.label}
                          </li>
                        )
                      )}
                    </ul>
                  )}
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
