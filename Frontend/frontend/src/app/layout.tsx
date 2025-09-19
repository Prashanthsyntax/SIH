// src/app/layout.js
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Sentenara • AI",
  description: "Sentenara - Research Engine powered by AI",
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
