import React, { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import EducationSection from '../components/sections/EducationSection';
import ExtrasSection from '../components/sections/ExtrasSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';
import { projectsData as mockProjects } from '../data/projects';

const Home = () => {
  const [projects, setProjects] = useState(mockProjects);

  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProjects(data);
        }
      })
      .catch(err => console.error('Error fetching projects, using fallback data:', err));
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ExtrasSection />
      <ContactSection />
    </main>
  );
};

export default Home;
