
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer"; // ✅ Import the Footer component

const Main = () => {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <FAQSection />
      </div>
      <Footer /> {/* ✅ Added Footer */}
    </main>
  );
};

export default Main;

import React from 'react'
import HeroSection from './HeroSection'

const Main = () => {
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Main

