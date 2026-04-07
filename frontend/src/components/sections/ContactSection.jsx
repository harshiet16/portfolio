import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ContactForm from '../ui/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalData } from '../../data/personal';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Let's discuss your next project or opportunity."
      />
      <div className="grid lg:grid-cols-3 gap-12 mt-12">
        <div className="space-y-6 lg:col-span-1">
          
          <div className="flex items-start gap-4">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl shrink-0">
              <Mail size={24} />
            </div>
            <div className="flex flex-col justify-center min-h-[56px]">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
              <a href={`mailto:${personalData.email}`} className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {personalData.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0">
              <Phone size={24} />
            </div>
            <div className="flex flex-col justify-center min-h-[56px]">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
              <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {personalData.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl shrink-0">
              <MapPin size={24} />
            </div>
            <div className="flex flex-col justify-center min-h-[56px]">
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location</h4>
              <span className="text-gray-600 dark:text-gray-400">
                {personalData.location}
              </span>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl text-white shadow-[0_20px_40px_rgba(139,92,246,0.3)] mt-8 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 text-white">Let's work together</h3>
            <p className="mb-6 opacity-90">I'm currently available for freelance work and new opportunities globally.</p>
            <a href={`mailto:${personalData.email}`} className="inline-flex px-6 py-3 bg-white text-purple-600 font-bold rounded-xl transition-all hover:shadow-lg hover:bg-gray-50 active:scale-95">
              Say Hello
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
