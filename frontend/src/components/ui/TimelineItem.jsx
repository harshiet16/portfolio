import React from 'react';
import Card from '../common/Card';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  // Use graduation cap icon for education paths
  const isEducation = item.title.toLowerCase().includes('commerce') || item.title.toLowerCase().includes('training');
  
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full group overflow-hidden md:overflow-visible ${isLeft ? 'md:flex-row-reverse' : ''} md:py-8`}>
      
      {/* Mobile line (visible only on small screens) */}
      <div className="absolute left-[38px] top-12 bottom-[-3rem] w-1 bg-purple-200 dark:bg-purple-900/50 md:hidden last:hidden"></div>

      {/* Opposite Side (Date for Desktop) */}
      <div className={`hidden md:flex md:w-5/12 ${isLeft ? 'justify-start pl-12' : 'justify-end pr-12'} items-center`}>
        <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
          <span className="inline-flex items-center gap-3 text-lg lg:text-xl font-bold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-purple-100 dark:border-purple-900/50 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            <Calendar size={22} className="text-purple-500" />
            {item.period}
          </span>
        </div>
      </div>
      
      {/* Center dot/badge */}
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-[0_0_0_4px_rgba(168,85,247,0.2)] dark:shadow-[0_0_0_4px_rgba(168,85,247,0.1)] border border-purple-200 dark:border-purple-800 transform transition-transform duration-500 group-hover:scale-110 group-hover:border-purple-500 
      absolute left-4 md:static md:mx-auto">
        <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
      </div>
      
      {/* Content Card */}
      <div className="w-full md:w-5/12 pl-24 md:pl-0 mt-2 md:mt-0">
        <Card className={`p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
          
          {/* Mobile-only date capsule */}
          <div className="md:hidden flex mb-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 bg-purple-100 dark:bg-purple-900/40 dark:text-purple-300 w-max px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm border border-purple-200/50 dark:border-purple-800/50">
              <Calendar size={16} />
              {item.period}
            </span>
          </div>

          <div className={`flex flex-col gap-2 mb-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
          </div>
          
          <h4 className={`text-lg text-purple-600 dark:text-purple-400 font-medium mb-3 flex items-center gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {isEducation ? <GraduationCap size={18} /> : <Briefcase size={18} />}
            {item.organization}
          </h4>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </Card>
      </div>

    </div>
  );
};

export default TimelineItem;
