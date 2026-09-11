import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { AIWorkflowSection } from './sections/AIWorkflowSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { MetricsSection } from './sections/MetricsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { AIChat } from './components/AIChat/AIChat';

export function App() {
  return (
    <div className="portfolio-app-root">
      {/* Atmosphere grid */}
      <div className="bg-mesh-grid" />

      {/* Global interactive elements */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Main Page Flow (Strictly according to Resume Master Prompt) */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AIWorkflowSection />
        <ProjectsSection />
        <ExperienceSection />
        <MetricsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer & Floating Navigation */}
      <Footer />
      <BackToTop />

      {/* Floating AI Chat Assistant */}
      <AIChat />
    </div>
  );
}

export default App;
