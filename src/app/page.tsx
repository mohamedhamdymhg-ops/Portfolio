import React from "react";
import { Hero } from "@/components/sections/Hero";
import { PersonalInfoSection } from "@/components/sections/PersonalInfo";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Services } from "@/components/sections/Services";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* 1. Identity & Value Proposition */}
      <Hero />

      {/* 2. Personal Snapshot / Overview */}
      <PersonalInfoSection />

      {/* 3. About & Philosophy */}
      <About />

      {/* 4. Projects Showcase & Case Studies (High Content Priority) */}
      <Projects />

      {/* 5. Core Competencies & Tools */}
      <Skills />

      {/* 6. Work History & Verified Deliverables */}
      <Experience />

      {/* 7. Education & Ministerial Initiative (DEPI) */}
      <Education />

      {/* 8. Offered Services & Capabilities */}
      <Services />

      {/* 9. Verified Certifications */}
      <Certifications />

      {/* 10. Contact & Inquiries */}
      <Contact />
    </>
  );
}
