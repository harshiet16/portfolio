import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { 
  Download, Rocket, Code2, FolderGit2, CalendarDays, 
  Brain, Users, GraduationCap, LayoutTemplate, Layers, 
  TerminalSquare, Zap, Globe, MessageSquare, Lightbulb 
} from 'lucide-react';
import { personalData } from '../../data/personal';

const AboutSection = () => {
  const strengths = [
    { text: "Strong foundation in problem-solving, data structures, and analytical thinking", icon: Brain, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
    { text: "Proven ability to work effectively in team environments and remote collaboration setups", icon: Users, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
    { text: "Deep passion for continuous learning and adapting to evolving technologies", icon: GraduationCap, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/30" },
    { text: "Hands-on experience in building real-world, scalable web applications", icon: LayoutTemplate, color: "text-pink-500", bg: "bg-pink-100 dark:bg-pink-900/30" },
    { text: "Proficient in both frontend and backend development with clean architecture practices", icon: Layers, color: "text-rose-500", bg: "bg-rose-100 dark:bg-rose-900/30" },
    { text: "Focused on writing optimized, maintainable, and production-ready code", icon: TerminalSquare, color: "text-emerald-500", bg: "bg-emerald-100 dark:bg-emerald-900/30" },
    { text: "Quick learner with the ability to grasp new frameworks and tools efficiently", icon: Zap, color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30" },
    { text: "Enthusiastic about contributing to open-source projects and tech communities", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-100 dark:bg-cyan-900/30" },
    { text: "Strong communication skills with a problem-solving mindset", icon: MessageSquare, color: "text-fuchsia-500", bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30" },
    { text: "Ability to translate ideas into fully functional, user-centric applications", icon: Lightbulb, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" }
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        title="About Me" 
        subtitle="Passionate developer with a love for creating amazing web experiences."
      />
      
      <div className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Small Icon Card */}
        <div className="lg:w-1/4 flex justify-center lg:justify-start lg:sticky lg:top-32">
          <div className="w-48 h-48 sm:w-64 sm:h-64 relative group flex-shrink-0">
            <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 p-1 shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[22px] flex items-center justify-center p-6 relative overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 border-[20px] border-purple-50 dark:border-purple-900/10 rounded-full opacity-50 transform scale-150 transition-transform duration-700 group-hover:scale-110"></div>
                <Rocket 
                  size={80} 
                  strokeWidth={1.5}
                  className="text-transparent bg-clip-text text-purple-500 dark:text-purple-400 transform transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-110 relative z-10" 
                  style={{ color: '#8b5cf6' }}
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
          </div>
        </div>

        {/* Right Column: Text & Stats Content */}
        <div className="lg:w-3/4 space-y-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
              {personalData.aboutHeading}
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalData.aboutParagraphs ? (
                personalData.aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))
              ) : (
                <p>{personalData.aboutText}</p>
              )}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Strengths & Highlights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mr-4 mt-1 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                    <item.icon className={`${item.color}`} size={20} strokeWidth={2} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium leading-tight pt-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {/* Card 1 */}
            <div className="px-4 py-6 bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3 text-purple-600 dark:text-purple-400">
                <Code2 size={24} />
              </div>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-2">400+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-bold tracking-wider uppercase">DSA Questions</div>
            </div>
            
            {/* Card 2 */}
            <div className="px-4 py-6 bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
                <FolderGit2 size={24} />
              </div>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-2">20+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-bold tracking-wider uppercase">Projects Built</div>
            </div>

            {/* Card 3 */}
            <div className="px-4 py-6 bg-gray-50 dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 flex flex-col items-center text-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3 text-indigo-600 dark:text-indigo-400">
                <CalendarDays size={24} />
              </div>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 mb-2">1+</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-bold tracking-wider uppercase">Year Experience</div>
            </div>
          </div>
          
          <div className="pt-8">
            <a href={personalData.resume} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button className="group">
                Download Resume
                <Download size={18} className="ml-2 transform group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
