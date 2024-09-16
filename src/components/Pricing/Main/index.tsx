"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaChartLine, FaCheck, FaTimes, FaPaintBrush } from "react-icons/fa";
import { khand } from "@/app/fonts/font";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const plans = [
  {
    title: "Digital Marketing",
    icon: FaChartLine,
    features: [
      { text: "SEO Optimization", available: true },
      { text: "Social Media Marketing", available: true },
      { text: "Content Creation", available: true },
      { text: "Email Campaigns", available: true },
      { text: "Performance Analytics", available: true },
    ],
  },
  {
    title: "Basic Web Design",
    icon: FaPaintBrush,
    features: [
      { text: "5 Pages Website", available: true },
      { text: "Basic UI Design", available: true },
      { text: "Responsive Layout", available: true },
      { text: "Contact Form", available: true },
      { text: "SEO Ready", available: true },
      { text: "Free Hosting", available: false }, // Feature not provided
    ],
  },
  {
    title: "Standard Web Design",
    icon: FaPaintBrush,
    features: [
      { text: "10 Pages Website", available: true },
      { text: "Custom UI/UX Design", available: true },
      { text: "Blog Integration", available: true },
      { text: "E-commerce Ready", available: true },
      { text: "Basic SEO", available: true },
      { text: "Free Hosting", available: true }, // Feature provided
    ],
  },
  {
    title: "Premium Web Design",
    icon: FaPaintBrush,
    features: [
      { text: "Unlimited Pages", available: true },
      { text: "Advanced UI/UX Design", available: true },
      { text: "Custom E-commerce Solution", available: true },
      { text: "Advanced SEO & Analytics", available: true },
      { text: "Priority Support", available: true },
      { text: "Free Hosting", available: true }, // Feature provided
    ],
  },
];

export default function Pricing() {
  const router = useRouter();
  return (
    <div className="px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:items-center gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4 }}
            className={`text-4xl ${khand.className} font-extrabold text-primary-dark`}
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-lg leading-6 text-gray-500 md:w-3/4 md:text-center"
          >
            Explore our competitive plans for digital marketing and web
            development/design.
          </motion.p>
        </div>

        {/* Pricing Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white border p-6 shadow-primary shadow-md rounded-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <plan.icon className="text-4xl text-primary-dark" />
                <h2
                  className={`text-2xl ${khand.className} font-bold text-gray-800`}
                >
                  {plan.title}
                </h2>
              </div>
              <ul className="space-y-4 text-lg text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    {feature.available ? (
                      <FaCheck className="inline text-green-500" />
                    ) : (
                      <FaTimes className="inline text-red-500" />
                    )}
                    {` ${feature.text}`}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  onClick={() =>
                    router.push("https://wa.me/917014834063?text=Hello+👋")
                  }
                  className="flex items-center gap-2 group/talk font-[500] mt-4 bg-primary-dark text-white py-2 px-6 rounded-full"
                >
                  <span>Get a Quote</span>
                  <MdOutlineArrowOutward className="group-hover/talk:rotate-45 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
