import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Download } from 'lucide-react';
import { personalData } from '../../data/personal';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-blue-100 dark:from-indigo-950 dark:via-purple-900 dark:to-blue-900 transition-colors duration-500" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-end order-1">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/80 dark:border-gray-800/80 shadow-[0_0_40px_rgba(168,85,247,0.3)] dark:shadow-[0_0_50px_rgba(168,85,247,0.4)] overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://i.pinimg.com/736x/4e/99/61/4e996161b1ff9177cd41ce737c8e00ca.jpg" 
                alt="Harsh Pandey" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              <span className="block mb-2 text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">Hi 👋, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 drop-shadow-sm">
                {personalData.name}
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6 drop-shadow-sm">
              {personalData.title}
            </h2>
            
            <div className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium space-y-4">
              <p>{personalData.tagline}</p>
              <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">{personalData.aboutText}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full justify-center group text-lg py-4 px-8">
                  View My Work
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={personalData.resume} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full justify-center group text-lg py-4 px-8">
                  Resume
                  <Download size={20} className="ml-2 transform group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button className="w-full justify-center text-lg py-4 px-8">
                  Hire Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
