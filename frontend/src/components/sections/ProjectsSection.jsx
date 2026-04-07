import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="A showcase of my recent work and contributions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
