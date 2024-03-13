import React from "react";
import Caraousel from "../components/Caraousel";
import HeroSection from "../components/HeroSection";
import HelpSection from "@/components/HelpSection";
import ServeSection from "@/components/ServeSection";
import About from "@/components/About";

function page() {
  return (
    <main>
      <Caraousel />
      <HeroSection />
      <ServeSection />
      <HelpSection />
      <About />
    </main>
  );
}

export default page;
