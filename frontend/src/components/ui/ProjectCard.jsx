import React from 'react';
import Card from '../common/Card';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] group">
      
      {/* Banner / Image container */}
      <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-semibold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
