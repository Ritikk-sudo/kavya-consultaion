import React from "react";
import Caraousel from "../components/Caraousel";
import HeroSection from "../components/HeroSection";
import HelpSection from "@/components/HelpSection";
import ServeSection from "@/components/ServeSection";

function page() {
  return (
    <main>
      <Caraousel />
      <HeroSection />
      <ServeSection />
      <HelpSection />
    </main>
  );
}

export default page;
