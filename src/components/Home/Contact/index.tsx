"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { khand } from "@/app/fonts/font";
import { CircularProgress, MenuItem, Select } from "@mui/material";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { BiSend } from "react-icons/bi";
import { CiMail, CiPhone, CiUser } from "react-icons/ci";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const projectTypes = [
  "Custom Website Development",
  "E-commerce Platform",
  "Mobile App Development (iOS & Android)",
  "Web App Development",
  "Landing Page Design",
  "UI/UX Design",
  "Website Redesign",
  "Single Page Application (SPA)",
  "Progressive Web App (PWA)",
  "Content Management System (CMS)",
  "Blog or Portfolio Website",
  "Custom Dashboard Development",
  "SaaS Application Development",
  "API Integration & Development",
  "Booking or Scheduling System",
  "Social Media Integration",
  "Online Marketplace",
  "Payment Gateway Integration",
  "SEO Optimization",
  "Maintenance & Support Services",
];

interface EmailDataType {
  name: string;
  phone?: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const router = useRouter();
  const [emailData, setEmailData] = useState<EmailDataType>({
    name: "",
    phone: "",
    projectType: projectTypes[0],
    message: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const { name, email, phone, projectType, message } = emailData;
    if (!name || !email || !projectType || !message) {
      return toast("All fields are required");
    }
    setLoading(true);
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        projectType,
        message,
      }),
    });
    if (response.ok) {
      setEmailData({
        name: "",
        phone: "",
        projectType: projectTypes[0],
        message: "",
        email: "",
      });
      setLoading(false);
      toast("Email Successfully Sent");
    } else {
      setLoading(false);
      toast("Error sending email");
    }
  };

  return (
    <div
      id="contact"
      className="lg:min-h-screen bg-primary-bg flex items-center justify-center px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex w-full max-w-screen-xl justify-between mx-auto md:flex-row flex-col"
      >
        <div className="flex-[1] flex flex-col gap-2">
          <h1
            className={` text-white font-bold text-stroke ${khand.className} flex items-center gap-1 text-6xl`}
          >
            Contact Us
          </h1>
          <h1
            className={`font-bold md:flex items-center gap-1 text-2xl md:text-4xl`}
          >
            Tell us about your project
          </h1>
          <p className="text-lg">
            Briefly explain your project or idea, so that we can process
          </p>
        </div>

        <div className="flex-[1]">
          <form
            onSubmit={handleSubmit}
            className="flex-[1] mt-6 flex flex-col gap-4 w-full"
          >
            <label
              htmlFor="name"
              className="border border-gray-400 p-4 w-full flex items-center gap-2 rounded-md"
            >
              <CiUser />
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={emailData.name}
                className="outline-none bg-transparent w-full"
                placeholder="Full Name"
              />
            </label>
            <label
              htmlFor="email"
              className="border border-gray-400 p-4 w-full flex items-center gap-2 rounded-md"
            >
              <CiMail />
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={emailData.email}
                className="outline-none bg-transparent w-full"
                placeholder="Business Email"
              />
            </label>
            <label
              htmlFor="phone"
              className="border border-gray-400 p-4 w-full flex items-center gap-2 rounded-md"
            >
              <CiPhone />
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={emailData.phone}
                className="outline-none bg-transparent w-full"
                placeholder="Phone (Optional)"
              />
            </label>
            <Select
              className="w-full rounded-md"
              MenuProps={MenuProps}
              value={emailData.projectType}
              name="projectType"
              onChange={(e) =>
                setEmailData((prev) => ({
                  ...prev,
                  projectType: e.target.value,
                }))
              }
            >
              {projectTypes.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            <label
              htmlFor="message"
              className="border border-gray-400 p-4 w-full flex items-center gap-2 rounded-md"
            >
              <textarea
                cols={10}
                id="message"
                name="message"
                value={emailData.message}
                onChange={handleChange}
                className="outline-none bg-transparent w-full resize-none min-h-32"
                placeholder="Explain project briefly"
              />
            </label>
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="flex items-center gap-2 group/talk bg-black py-2 px-4 w-fit text-white rounded-full"
              >
                <span>{loading ? "Sending" : "Send Email"}</span>{" "}
                {loading ? (
                  <CircularProgress
                    size={20}
                    sx={{
                      color: "white",
                    }}
                  />
                ) : (
                  <BiSend />
                )}
              </button>
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0 * 0.3 }}
                  className="hover:opacity-50 cursor-pointer transition"
                  onClick={() =>
                    router.push("https://wa.me/+917014834063?text=Hello+👋")
                  }
                >
                  <SocialIcon
                    network="whatsapp"
                    style={{
                      height: "32px",
                      width: "32px",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
