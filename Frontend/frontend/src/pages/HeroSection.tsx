
"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-sm">
        <Link href="https://prebuiltui.com">
          <svg
            width="155"
            height="40"
            viewBox="0 0 155 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
            <path
              d="M45.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924"
              fill="#fff"
            />
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link href="/" className="hover:text-purple-500 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-purple-500 transition">
            Products
          </Link>
          <Link href="/stories" className="hover:text-purple-500 transition">
            Stories
          </Link>
          <Link href="/pricing" className="hover:text-purple-500 transition">
            Pricing
          </Link>
        </div>

        <button className="hidden md:block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full">
          Start free trial
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile navlinks */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/pricing">Pricing</Link>

        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="absolute top-28 -z-1 left-1/4 size-72 bg-purple-600 blur-[300px]" />
        <Link
          href="https://prebuiltui.com"
          className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-purple-100 bg-purple-200/15"
        >
          <span className="bg-purple-800 text-white text-xs px-3.5 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span>Try 30 days free trial option</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition duration-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </Link>

        <h1 className="text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-2xl text-center">
          Free template to start your{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-300 px-3 rounded-xl text-nowrap">
            Next.js site.
          </span>
        </h1>

        <p className="text-base text-center text-slate-200 max-w-lg mt-6">
          No complexity. No noise. Just clean, reliable automation to boost your
          team’s efficiency.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 h-11">
            Get started
          </button>
          <button className="flex items-center gap-2 border border-purple-900 hover:bg-purple-950/50 transition rounded-full px-6 h-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
              <rect x="2" y="6" width="14" height="12" rx="2" />
            </svg>
            <span>Watch demo</span>
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-14 mt-12">
          {["No credit card", "30 days free trial", "Setup in 10 minutes"].map(
            (text, i) => (
              <p key={i} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-purple-600"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-slate-400">{text}</span>
              </p>
            )
          )}
        </div>

        {/* Showcase image full width */}
        <div className="w-full mt-16">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase.png"
            className="w-full h-auto rounded-none"
            alt="hero section showcase"
          />
        </div>
      </div>
    </div>
  );
}

import React from 'react'

const HeroSection = () => {
  return (
    <div>
      Hello World
    </div>
  )
}

export default HeroSection

