"use client";
import Image from "next/image";
import { CgCopyright } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      <div className="px-4 py-8 bg-primary-bg">
        <div className="max-w-screen-xl mx-auto flex flex-wrap gap-12 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 ">
          {/* First */}
          <div className="flex flex-col gap-4">
            <div
              onClick={() => router.push("/")}
              className="h-12 md:h-20 w-full flex cursor-pointer"
            >
              <Image
                src={logo}
                alt="DigiR"
                height={300}
                width={200}
                className="h-full w-1/3 md:1/2 object-contain"
              />
            </div>
            <p className="text-sm">
              Expert Digital Marketing and Web Design Services to Amplify Your
              Brand, Boost Engagement, and Drive Results
            </p>
          </div>

          {/* Second */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg">Navigation</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/our-work">Our Work</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          {/* Third */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg">Quick Links</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li>
                <Link href="/#faqs">Faqs</Link>
              </li>
            </ul>
          </div>
          {/* Forth : Contact us */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-lg">Contact Us</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <MdEmail className=" text-primary-dark" />
                <a href="mailto:digiraj.it@gmail.com">digiraj.it@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MdPhone className=" text-primary-dark" />
                <p>+917014834063</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center border-t border border-gray-300 ">
        <div className="max-w-screen-xl w-full flex items-center justify-between">
          <div className="flex text-sm items-center text-black gap-2">
            <CgCopyright />
            <p>2024 DigiR, All rights reserved</p>
          </div>{" "}
          <div className="flex items-center gap-4">
            <FaInstagram className=" text-2xl bg-primary-dark rounded-full p-1  text-white cursor-pointer hover:opacity-80 transition" />
            <FaFacebook className=" text-2xl bg-primary-dark rounded-full p-1 text-white cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>
      </div>
    </>
  );
}
