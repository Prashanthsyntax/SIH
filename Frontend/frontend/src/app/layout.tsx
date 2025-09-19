// src/app/layout.js
import React from "react";
import "./globals.css";

export const metadata = {
  title: "ChatBot UI",
  description: "A chat UI built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-800 h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
