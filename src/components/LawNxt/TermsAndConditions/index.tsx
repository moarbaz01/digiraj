"use client";

import { khand } from "@/app/fonts/font";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsAndConditions() {
  return (
    <div className="px-6 py-6 max-w-screen-lg mx-auto">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        transition={{ duration: 0.3 }}
        className={`text-4xl font-extrabold text-primary-dark ${khand.className} mb-6`}
      >
        Terms and Conditions
      </motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        transition={{ duration: 0.3 }}
        className="text-gray-600 leading-relaxed mb-8"
      >
        Welcome to LawNXT! By accessing our application, you agree to comply
        with and be bound by these terms and conditions. Please read them
        carefully as they govern your use of LawNXT.
      </motion.p>

      <section className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing or using LawNXT, you acknowledge that you have read,
            understood, and agree to be bound by these terms and all applicable
            laws and regulations. If you disagree with any part of these terms,
            please refrain from using the application.
          </p>
          <p className="text-gray-600 mt-4">
            These terms may be updated periodically, and we encourage you to
            review them regularly. Continued use of the app following any such
            modifications signifies your acceptance of the updated terms.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Use of the Application
          </h2>
          <p className="text-gray-600">
            LawNXT provides a case management system designed to assist legal
            professionals in managing client information, case details, and
            related tasks. Your access is limited to personal and professional
            use only, and you agree not to misuse or attempt to gain
            unauthorized access to any part of the application.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>
              <strong>No Unlawful Use:</strong> You may not use LawNXT for any
              illegal or unauthorized purpose, including but not limited to
              activities that infringe on intellectual property rights, violate
              privacy rights, or are fraudulent or deceptive in nature.
            </li>
            <li>
              <strong>No Data Mining or Extraction:</strong> Automated
              collection, scraping, or data mining within LawNXT is strictly
              prohibited.
            </li>
            <li>
              <strong>Compliance with Laws:</strong> You are responsible for
              complying with all applicable local, national, and international
              laws in your use of LawNXT.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Account Security and Responsibility
          </h2>
          <p className="text-gray-600">
            To access certain features, you must create an account with LawNXT.
            You are responsible for maintaining the security of your login
            credentials and for all activities conducted under your account.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>
              <strong>Unauthorized Access:</strong> You agree to notify us
              immediately of any unauthorized use of your account or any other
              breach of security.
            </li>
            <li>
              <strong>Account Termination:</strong> We reserve the right to
              terminate or suspend accounts that engage in activities that
              violate these terms, at our discretion.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Privacy and Data Protection
          </h2>
          <p className="text-gray-600">
            LawNXT is committed to protecting your privacy. Our Privacy Policy,
            available on our website, outlines how we collect, store, and use
            your information. By using our services, you consent to our data
            practices as described in the Privacy Policy.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            5. Intellectual Property Rights
          </h2>
          <p className="text-gray-600">
            All content on LawNXT, including but not limited to software, text,
            images, graphics, and other material, is protected by intellectual
            property rights and owned or licensed by LawNXT. Unauthorized
            copying, distribution, or modification of this content is strictly
            prohibited.
          </p>
          <p className="text-gray-600 mt-4">
            Any feedback or suggestions you provide may be used by LawNXT
            without any obligation to you, and you grant us a perpetual,
            royalty-free, and unrestricted license to use such feedback.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            6. Third-Party Services
          </h2>
          <p className="text-gray-600">
            LawNXT may include links or integrations with third-party websites
            and services. We are not responsible for the availability, accuracy,
            or reliability of these external sites or services. You use such
            third-party services at your own risk, and their terms and policies
            will apply.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            LawNXT is provided “as is” without any warranties. To the maximum
            extent permitted by law, LawNXT and its affiliates disclaim all
            warranties, express or implied, and will not be liable for any
            damages, including but not limited to lost data, revenue, or other
            intangible losses arising from your use of the application.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            8. Termination of Service
          </h2>
          <p className="text-gray-600">
            LawNXT reserves the right to suspend or terminate your access to the
            application at any time, with or without cause, and without prior
            notice. Upon termination, your right to use the application will
            cease, and you must discontinue any further use of LawNXT.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            9. Governing Law and Jurisdiction
          </h2>
          <p className="text-gray-600">
            These terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which LawNXT operates. You agree to
            submit to the exclusive jurisdiction of the courts located in that
            jurisdiction to resolve any disputes or claims arising from your use
            of the application.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          transition={{ duration: 0 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions, concerns, or suggestions regarding these
            terms, please contact us at{" "}
            <a href="mailto:support@lawnxt.com" className="text-primary">
              support@lawnxt.com
            </a>
            .
          </p>
        </motion.div>
      </section>
    </div>
  );
}
