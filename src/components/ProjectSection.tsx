import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types/Projects';
import { setEqualHeight } from '../utils/setEqualHeight';

interface ProjectSectionProps {
  personalProjects: Project[];
  professionalProjects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  personalProjects,
  professionalProjects,
}) => {
  console.log('🧪 ProjectSection component rendered');
  useEffect(() => {
    console.log('🔧 Running setEqualHeight...');
    setEqualHeight('.project-card');

    const handleResize = () => setEqualHeight('.project-card');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className='container my-5' id='projects'>
      <h3 className='text-center mb-4'>
        <strong>Projects</strong>
      </h3>

      <div className='mb-5'>
        <h4>Personal Projects</h4>
        <div className='row'>
          {personalProjects.map((project, index) => (
            <div className='col-md-4' key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4>Professional Projects</h4>
        <div className='row'>
          {professionalProjects.map((project, index) => (
            <div className='col-md-4' key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
