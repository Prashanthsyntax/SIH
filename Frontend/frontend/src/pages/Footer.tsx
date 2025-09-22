// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl">
            Subscribe to our newsletter to get updates.
          </h1>

          <a
            href="#"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-lg gap-x-3 hover:bg-blue-700 focus:ring focus:ring-blue-400 focus:ring-opacity-80 md:mx-3 shrink-0 md:mt-0 md:w-auto mt-6 transition-colors duration-300"
          >
            <span>Sign Up Now</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-gray-100">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Who We Are
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Our Philosophy
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-100">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Retail & E-Commerce
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Information Technology
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Finance & Insurance
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-100">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Translation
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Proofreading & Editing
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                Content Creation
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-100">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="tel:+8807684734978"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                +880 768 473 4978
              </a>
              <a
                href="mailto:info@merakiui.com"
                className="text-gray-400 transition-colors duration-300 hover:underline hover:text-blue-400"
              >
                info@merakiui.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link href="#">
            <Image
              className="w-auto h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt="Meraki UI Logo"
              width={150}
              height={28}
            />
          </Link>

          <p className="mt-4 text-sm text-gray-400 sm:mt-0">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
