import React from 'react';
import { personalData } from '../../data/personal';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Name Graphic */}
        <a href="#home" className="text-4xl font-black text-white tracking-widest mb-4 hover:text-purple-400 transition-colors">
          HARSH<span className="text-purple-500">.</span>
        </a>
        
        {/* Description */}
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
          Building fast, scalable web applications that people love. Let's create something amazing together.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <a href="#about" className="font-medium hover:text-purple-400 transition-colors">About</a>
          <a href="#skills" className="font-medium hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projects" className="font-medium hover:text-purple-400 transition-colors">Projects</a>
          <a href="#experience" className="font-medium hover:text-purple-400 transition-colors">Experience</a>
          <a href="#education" className="font-medium hover:text-purple-400 transition-colors">Education</a>
          <a href="#contact" className="font-medium hover:text-purple-400 transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-12">
          <a 
            href={personalData.github} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-900/50"
          >
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
          </a>
          <a 
            href={personalData.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-900/50"
          >
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a 
            href={personalData.twitter} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-900/50"
          >
            <span className="sr-only">Twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 11 2.8 11c.8.4 1.7.5 2.7.4-4-2.2-4-8-4-8 1.4.8 3 1.3 4.8 1.4-8-5.3-2-12-2-12 11 8.8 19 8 19 8z"></path></svg>
          </a>
          <a 
            href={personalData.instagram} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-900/50"
          >
            <span className="sr-only">Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a 
            href={personalData.facebook} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-gray-900/50"
          >
            <span className="sr-only">Facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="w-full pt-8 border-t border-gray-800 flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Harsh Pandey. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
