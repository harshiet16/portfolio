import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-black/40 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional licenses and online course credentials."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {certificationsData.map((cert) => (
            <Card key={cert.id} className="p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group shadow-md border border-gray-100 dark:border-gray-800">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} />
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 px-3 py-1.5 rounded-full transition-all duration-300 group/link">
                  <span className="group-hover/link:underline">View</span>
                  <ExternalLink size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Issued: {cert.date}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
