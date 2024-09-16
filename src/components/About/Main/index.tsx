"use client";

import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import computer from "../../../public/computer.jpg";
import choice from "../../../public/choice.jpg";
import { khand } from "@/app/fonts/font";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  return (
    <div className="px-6 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:items-center gap-2 ">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.8 }}
            className={`text-4xl ${khand.className} font-extrabold text-primary-dark`}
          >
            About Us
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg leading-6 text-gray-500 md:w-3/4 md:text-center"
          >
            At <strong>DigiR</strong>, we are a team of passionate web
            developers, designers, and digital marketers dedicated to helping
            businesses build their digital presence. With a focus on creativity
            and innovation, we craft tailored solutions that not only meet but
            exceed our clients&apos; expectations.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16"
        >
          <Image
            src={computer}
            alt="Computer"
            height={400}
            width={400}
            className="w-full h-auto"
          />
        </motion.div>

        <div className="mt-16">
          <section className="mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold text-gray-800 ${khand.className}`}
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 md:w-1/2"
            >
              Our mission is simple: to empower businesses with cutting-edge
              digital solutions. We combine our technical expertise with a deep
              understanding of market trends to create websites and digital
              strategies that drive real results.
            </motion.p>
          </section>

          <section className="mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold text-gray-800 ${khand.className}`}
            >
              Our Values
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 space-y-4 text-lg text-gray-600"
            >
              <li>
                <strong>Creativity:</strong> We believe that innovation comes
                from thinking outside the box. We use creativity to design
                unique, engaging websites that resonate with your audience.
              </li>
              <li>
                <strong>Excellence:</strong> From design to development, we are
                committed to delivering excellence at every stage of the
                project.
              </li>
              <li>
                <strong>Client-Centric:</strong> Your vision is our top
                priority. We listen, collaborate, and ensure that our solutions
                are tailored to your business needs.
              </li>
              <li>
                <strong>Transparency:</strong> We value open communication and
                honest relationships. Our clients are always in the loop, and
                there are no surprises when it comes to project timelines or
                costs.
              </li>
              <li>
                <strong>Growth:</strong> We are dedicated to not only growing
                our own skill sets but also helping our clients expand their
                digital presence and achieve their goals.
              </li>
            </motion.ul>
          </section>

          <section className="mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold ${khand.className} text-gray-800`}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              Our team is made up of experienced professionals who bring
              together a diverse set of skills, from front-end and back-end
              development to SEO and digital marketing strategies. Together, we
              offer a full-service experience to our clients, handling
              everything from the initial concept to the final launch.
            </motion.p>
          </section>

          <section className="mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold ${khand.className} text-gray-800`}
            >
              Why Choose Us?
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 space-y-4 text-lg text-gray-600"
            >
              <li>
                <strong>Customized Solutions:</strong> Every project we take on
                is customized to fit the specific needs and goals of your
                business.
              </li>
              <li>
                <strong>Experience Across Industries:</strong> We’ve worked with
                clients in a variety of sectors, giving us unique insight into
                what works best for different markets.
              </li>
              <li>
                <strong>Full-Service Agency:</strong> We handle every aspect of
                your online presence – from website creation and design to
                digital marketing campaigns that get your brand noticed.
              </li>
              <li>
                <strong>Results-Driven:</strong> We focus on delivering
                measurable outcomes that have a lasting impact on your business
                growth.
              </li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-16"
            >
              <Image
                src={choice}
                alt="Choice"
                height={400}
                width={400}
                className="w-full h-auto"
              />
            </motion.div>
          </section>

          <section className="mb-12">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold ${khand.className} text-gray-800`}
            >
              Our Story
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              What began as a small team of web enthusiasts has grown into a
              full-service digital agency. Over the years, we&rsquo;ve had the
              privilege of working with amazing clients, building creative and
              effective digital solutions that help their businesses thrive.
            </motion.p>
          </section>

          <section className="text-center flex-col flex bg-primary-bg p-6 rounded-md items-center mt-16">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
              className={`text-3xl ${khand.className} font-bold text-gray-800`}
            >
              Let’s Build Something Amazing Together
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mt-2 md:w-1/2"
            >
              If you&rsquo;re ready to take your digital presence to the next
              level, we&rsquo;re here to help. Get in touch with us, and
              let&rsquo;s discuss how we can create something unique for your
              business.
            </motion.p>
            <motion.button
              //   onClick={() => router.push("/#contact")}
              initial="hidden"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group/talk font-[500] mt-4 bg-primary-dark text-white py-2 px-6 rounded-full"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{ duration: 0.8 }}
            >
              <span>Let&rsquo;s Talk</span>
              <MdOutlineArrowOutward className="group-hover/talk:rotate-45 transition" />
            </motion.button>
          </section>
        </div>
      </div>
    </div>
  );
}
