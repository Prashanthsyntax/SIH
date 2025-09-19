import React from "react";
import InputBar from "./input";

export default function MainUI() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0b0e11] text-white px-6">
      {/* Logo / Title */}
      <div className="text-center mb-12 relative">
        <h1 className="text-6xl font-extrabold tracking-tight">
          <span className="relative text-white">Sentenara</span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-text-glow px-2">
            Pro
          </span>
        </h1>

        {/* Glow Effect Behind Text */}
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-[280px] h-[120px] bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 opacity-30 blur-3xl rounded-full animate-pulse" />
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-3xl">
        <InputBar />
      </div>
    </div>
  );
}
