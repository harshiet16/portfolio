import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { Trophy, Target, Award, Star, Zap } from 'lucide-react';

const ExtrasSection = () => {
  const hobbies = [
    {
      title: "Traveling",
      description: "Exploring diverse cultures, magnificent landscapes, and engaging in profound new experiences across different terrains.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Improving Skills",
      description: "Dedication to continuous learning, from exploring new developer frameworks to continuously polishing algorithmic problem solving.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Gaming",
      description: "An avid enthusiast of strategy and storytelling games, utilizing analytical problem-solving in fast-paced virtual spheres.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    }
  ];

  const achievements = [
    {
      text: "Successfully cracked both the highly competitive JEE Mains examination and the AKTU entrance examination.",
      icon: Target,
      color: "text-rose-500"
    },
    {
      text: "Cleared the preliminary stage of the SSC CGL 2025 examination, demonstrating robust analytical and quantitative aptitude.",
      icon: Star,
      color: "text-amber-500"
    },
    {
      text: "Advanced to Level 3 of the prestigious Flipkart GRiD 5.0 Hackathon, successfully demonstrating dynamic software engineering capabilities.",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      text: "Solved over 600 complex algorithmic problems across leading competitive programming platforms including LeetCode, CodeForces, CodeChef, and GeeksforGeeks.",
      icon: Zap,
      color: "text-blue-500"
    },
    {
      text: "Earned certifications in C++ Data Structures via Coding Ninjas, Identity Security for AI from Saviynt, and completed a comprehensive Software Engineering Job Simulation via Forage (REST APIs, Kafka).",
      icon: Award,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="extras" className="py-24 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hobbies Header */}
        <SectionTitle 
          title="Hobbies & Interests" 
          subtitle="A glimpse into what I enjoy beyond writing code and building applications."
        />
        
        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={hobby.image} 
                  alt={hobby.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Sub-Section */}
        <div className="mt-24">
          <div className="text-center md:text-left mb-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Milestones & Achievements</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto md:mx-0 rounded-full" />
          </div>
          
          <Card className="p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-md">
            <div className="space-y-6">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className={`mt-1 mr-5 flex-shrink-0 bg-gray-50 dark:bg-gray-800/80 p-3 rounded-full border border-gray-100 dark:border-gray-700/50 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ${item.color}`}>
                    <item.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ExtrasSection;
