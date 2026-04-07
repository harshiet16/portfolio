import React from 'react';

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4 inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-6 rounded-full" />
    </div>
  );
};

export default SectionTitle;
