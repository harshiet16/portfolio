import React from 'react';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { educationData } from '../../data/education';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and structural training."
        />
        
        <div className="mt-16 relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900/50 rounded-full" />
          
          <div className="space-y-12 md:space-y-0">
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
