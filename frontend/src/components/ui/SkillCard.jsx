import React from 'react';
import Card from '../common/Card';
import * as LucideIcons from 'lucide-react';

const SkillCard = ({ icon, category, skills }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Code;

  return (
    <Card className="p-8 h-full border-t-0 hover:-translate-y-2 group transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors duration-300">
          <IconComponent size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const isString = typeof skill === 'string';
          const name = isString ? skill : skill.name;
          const img = isString ? null : skill.img;
          const lucideKey = isString ? null : skill.lucide;
          const SkillLucideIcon = lucideKey ? LucideIcons[lucideKey] : null;
          
          return (
            <span 
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-700 transition-colors shadow-sm"
            >
              {img && <img src={img} alt={name} className="w-5 h-5 object-contain" />}
              {SkillLucideIcon && <SkillLucideIcon size={18} className="text-gray-500 dark:text-gray-400" />}
              {name}
            </span>
          );
        })}
      </div>
    </Card>
  );
};

export default SkillCard;
