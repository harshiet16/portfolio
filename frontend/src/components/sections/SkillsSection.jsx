import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { skillsData } from '../../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Skills & Technologies" 
          subtitle="The tools and technologies I use to bring ideas to life."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillsData.map((categoryGroup, index) => (
            <SkillCard 
              key={index}
              icon={categoryGroup.icon}
              category={categoryGroup.category}
              skills={categoryGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
