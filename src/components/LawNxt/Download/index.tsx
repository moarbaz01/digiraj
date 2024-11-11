"use client";

import { MdOutlineArrowOutward } from "react-icons/md";
import { khand } from "@/app/fonts/font";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Download() {
  return (
    <div className="px-6 md:py-12 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <section className="text-center mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold text-gray-800 ${khand.className}`}
          >
            Available for Android Devices
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg text-gray-600 md:w-3/4 mx-auto"
          >
            Download LawNXt for Android to manage all your cases on the go!
          </motion.p>
        </section>

        {/* Download Table */}
        <div className="overflow-x-auto mt-8">
          <motion.table
            className="min-w-full table-auto bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <thead className="bg-primary-dark text-white">
              <tr>
                <th className="px-6 py-4 text-lg font-medium">Platform</th>
                <th className="px-6 py-4 text-lg font-medium">Version</th>
                <th className="px-6 py-4 text-lg font-medium">Description</th>
                <th className="px-6 py-4 text-lg font-medium">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 text-gray-700">Android (APK)</td>
                <td className="px-6 py-4 text-gray-600">
                  {process.env.LAWNXT_APP_VERSION ?? "v1.0.0"}
                </td>{" "}
                {/* Update with actual version */}
                <td className="px-6 py-4 text-gray-600">
                  Download the APK file for LawNXt to install on Android for
                  seamless case management.
                </td>
                <td className="px-6 py-4">
                  <motion.a
                    download="lawnxt"
                    href={process.env.LAWNXT_APP_DOWNLOAD_URL} // Update path for APK file
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 bg-primary-dark text-white py-2 px-6 rounded-full hover:bg-primary-dark/80"
                  >
                    <span>Download APK</span>
                    <MdOutlineArrowOutward />
                  </motion.a>
                </td>
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </div>
  );
}
