import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { experienceData } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gray-100/50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey in web development."
        />
        
        <div className="mt-16 relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/50 rounded-full" />
          
          <div className="space-y-12 md:space-y-0">
            {experienceData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
