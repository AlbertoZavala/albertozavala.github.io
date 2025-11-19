// src/App.tsx
import React from "react";
import { HeaderNav } from "./components/layout/HeaderNav";
import { Footer } from "./components/layout/Footer";
import { HomeSection } from "./sections/Home/HomeSection";
import { SkillsSection } from "./sections/Skills/SkillsSection";
import { TechStackSection } from "./sections/TechStack/TechStackSection";
import { AboutSection } from "./sections/About/AboutSection";
import { ResumeSection } from "./sections/Resume/ResumeSection";
import { ValueSection } from "./sections/Value/ValueSection";   // 👈 nuevo
import { ProjectsSection } from "./sections/Projects/ProjectsSection";
import { ContactSection } from "./sections/Contact/ContactSection";

const App: React.FC = () => {
  return (
    <div id="app-root">
      <HeaderNav />

      <HomeSection />
      <SkillsSection />
      <TechStackSection />
      <AboutSection />
      <ResumeSection />
      <ValueSection />   
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default App;
