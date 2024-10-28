import React from 'react';
import { Project } from '../types/Projects';
import './ProjectCard.css';

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  link,
  imageSrc,
  githubLink,
}) => {
  return (
    <div className='card project-card mb-4'>
      {imageSrc && (
        <img src={imageSrc} className='card-img-top' alt={`${title} project`} />
      )}
      <div className='card-body position-relative'>
        <h5 className='card-title'>{title}</h5>

        {/* GitHub Icon Link (only if githubLink is provided) */}
        {githubLink && (
          <a
            href={githubLink}
            className='github-icon'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`View ${title} on GitHub`}
          >
            <i className='fab fa-github'></i>
          </a>
        )}

        <p className='project-description'>{description}</p>
        <a
          href={link}
          className='btn btn-primary mt-3'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Go to ${title} project`}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
