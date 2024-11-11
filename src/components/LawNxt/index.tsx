"use client";

import Image from "next/image";
import { FaRegCalendarAlt, FaUsers, FaFileAlt, FaBell } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { khand } from "@/app/fonts/font";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonAnimation = {
  hover: { scale: 1.05 },
};

const benefits = [
  {
    title: "All-in-One Solution",
    description:
      "Manage cases, documents, and team collaboration from a single platform.",
  },
  {
    title: "Secure & Confidential",
    description:
      "Built with robust security features to ensure client information remains confidential.",
  },
  {
    title: "Customizable for Your Needs",
    description:
      "Adaptable to your firm's size, workflow, and unique case requirements.",
  },
  {
    title: "Seamless Integration",
    description:
      "Compatible with other tools you already use, making it easier to transition.",
  },
];

const keyFeatures = [
  {
    icon: FaRegCalendarAlt,
    title: "Calendar & Scheduling",
    description:
      "Easily manage court dates, deadlines, and appointments. Stay on top of your schedule with reminders and notifications.",
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description:
      "Share case files, notes, and updates with your team in real time. LawNXt fosters collaborative case management for improved efficiency.",
  },
  {
    icon: FaFileAlt,
    title: "Document Management",
    description:
      "Organize, store, and retrieve case documents quickly and securely. Never lose track of important files again.",
  },
  {
    icon: FaBell,
    title: "Reminders & Alerts",
    description:
      "Receive automatic alerts for upcoming court dates, deadlines, and other important events to keep your cases moving forward.",
  },
];

export default function LawNXT() {
  const router = useRouter();

  return (
    <div className="px-6 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:items-center gap-2">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={textAnimation}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`text-4xl ${khand.className} font-extrabold text-primary-dark`}
          >
            LawNXt - Streamline Your Legal Practice
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 text-lg leading-6 text-gray-500 md:w-3/4 md:text-center"
          >
            Designed by <strong>DigiR</strong>, LawNXt provides lawyers and law
            firms with a centralized, intuitive platform to organize cases,
            manage documents, and collaborate seamlessly with team members.
          </motion.p>
        </div>

        {/* Image with Reduced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <Image
            src="/hammer.jpg"
            alt="Case Management"
            height={400}
            width={400}
            layout="responsive"
            priority
            className="w-full h-auto"
          />
        </motion.div>

        {/* Benefits Section */}
        <section className="mt-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.4 }}
            className={`text-3xl font-bold text-gray-800 ${khand.className}`}
          >
            Benefits
          </motion.h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={textAnimation}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mt-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.4 }}
            className={`text-3xl font-bold text-gray-800 ${khand.className}`}
          >
            Key Features
          </motion.h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={textAnimation}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  key={index}
                  className="flex gap-4"
                >
                  <Icon className="text-primary-dark text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Second Image with Reduced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <Image
            src="/teamCollaboration.jpg"
            alt="Team Collaboration"
            height={400}
            width={400}
            layout="responsive"
            priority
            className="w-full h-auto"
          />
        </motion.div>

        {/* CTA Section */}
        <section className="text-center flex-col flex bg-primary-bg p-6 rounded-md items-center mt-16">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.4 }}
            className={`text-3xl ${khand.className} font-bold text-gray-800`}
          >
            Ready to Organize Your Legal Practice?
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-gray-600 mt-2 md:w-1/2"
          >
            Sign up for LawNXt today, and experience the difference in
            streamlined case management.
          </motion.p>
          <motion.button
            onClick={() => router.push("/lawnxt/download")}
            whileHover={buttonAnimation.hover}
            className="flex items-center gap-2 group font-[500] mt-4 bg-primary-dark text-white py-2 px-6 rounded-full"
          >
            <span>Get Started</span>
            <MdOutlineArrowOutward className="group-hover:rotate-45 transition" />
          </motion.button>
        </section>
      </div>
    </div>
  );
}
