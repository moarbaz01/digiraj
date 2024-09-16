"use client";

import { khand } from "@/app/fonts/font";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { BiSolidDownArrow } from "react-icons/bi";
import { PiQuestionDuotone } from "react-icons/pi";
import { useState } from "react";
import { motion } from "framer-motion";
import QuestionModal from "../Modals/QuestionModal";

const faqs = [
  {
    question: "What services do you offer?",
    details:
      "We specialize in web design and digital marketing services, including responsive website creation, brand identity design, search engine optimization (SEO), social media marketing, and tailored online campaigns to enhance your business’s digital presence.",
  },
  {
    question: "How do you approach a project?",
    details:
      "Our approach begins with a thorough understanding of your business goals and target audience. We then create a custom strategy for design and marketing, followed by iterative development and regular communication to ensure alignment throughout the project.",
  },
  {
    question: "What is your typical project timeline?",
    details:
      "Timelines depend on the project’s complexity. A standard website or marketing campaign can take a few weeks, while larger initiatives, like complete rebranding or multi-channel marketing, may take several months. We provide a detailed timeline after reviewing your requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    details:
      "Yes, we provide ongoing support to ensure your website or campaign performs optimally. Our post-launch services include website maintenance, marketing performance tracking, and continuous optimization.",
  },
  {
    question: "What industries do you serve?",
    details:
      "We serve a wide range of industries, including e-commerce, healthcare, education, real estate, and more. Our services are customized to meet the unique needs of each industry and business.",
  },
  {
    question: "What are your pricing models?",
    details:
      "Pricing depends on the scope and complexity of the project. We offer flexible packages for web design, SEO, social media management, and digital advertising. A detailed estimate is provided after an initial consultation.",
  },
  {
    question: "How do you ensure the security of my website?",
    details:
      "We prioritize security by using best practices like SSL certificates, secure authentication, and regular site audits. Our team ensures that your website complies with the latest security standards to protect your business and user data.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    details:
      "Yes, we offer website redesigns to enhance aesthetics, functionality, and SEO performance. Whether you're looking for a fresh look or better conversion rates, we can help improve your site’s effectiveness.",
  },
  {
    question: "Do you provide SEO services?",
    details:
      "Yes, SEO is a core part of our digital marketing services. We optimize your website for search engines, ensuring higher visibility and better ranking, and we also offer ongoing SEO strategies to maintain and improve performance over time.",
  },
  {
    question: "How do you handle project revisions?",
    details:
      "We encourage collaboration and allow revisions during both the design and development phases. Our process ensures that feedback is implemented to achieve the best possible outcome for your project.",
  },
];

export default function Faqs() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      id="faqs"
      className="lg:min-h-screen flex items-center justify-center px-4 py-12"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center max-w-screen-xl mx-auto flex-col"
      >
        <div className="flex md:flex-row flex-col gap-6 md:gap-2 w-full md:justify-between">
          <div className="flex-[1] flex flex-col gap-2">
            <h1
              className={`text-primary-dark font-bold ${khand.className} flex items-center gap-1 text-6xl`}
            >
              FAQS?
            </h1>
            <h1
              className={`font-bold md:flex items-center gap-1 text-2xl md:text-4xl`}
            >
              Frequently Asked Questions
            </h1>
            <p>
              Got questions? Check out our FAQs for quick answers about our
              services and process. Feel free to contact us if you need more
              info!
            </p>
            <button
              onClick={() => setIsOpenModal(true)}
              className="flex items-center gap-2 group/talk bg-black py-2 px-4 w-fit text-white rounded-full"
            >
              <span>Ask Question</span>{" "}
              <PiQuestionDuotone className="group-hover/talk:rotate-45 transition" />
            </button>
          </div>
          <div className="flex-[1]">
            {faqs.map((f, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={
                    <BiSolidDownArrow className="text-primary-dark" />
                  }
                >
                  <p className="font-[600]">{f.question}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{f.details}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </motion.div>
      <QuestionModal isOpen={isOpenModal} onClose={handleCloseModal} />
    </div>
  );
}
