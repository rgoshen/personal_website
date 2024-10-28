import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../../types/Projects';
import { setEqualHeight } from '../../utils/setEqualHeight';

interface ProjectSectionProps {
  personalProjects: Project[];
  professionalProjects: Project[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  personalProjects,
  professionalProjects,
}) => {
  useEffect(() => {
    // Set equal height for cards on load and resize
    setEqualHeight('.project-card');
    window.addEventListener('resize', () => setEqualHeight('.project-card'));

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', () =>
        setEqualHeight('.project-card'),
      );
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
