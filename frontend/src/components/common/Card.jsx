import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
