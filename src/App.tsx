import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import CarAdvisor from './components/CarAdvisor';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CarAdvisor />
      <ContactSection />
    </div>
  );
}

export default App;
