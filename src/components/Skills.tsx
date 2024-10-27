import React from 'react';
import { SkillsProps } from '../types/SkillsProps';

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className='skills-list'>
      <div className='d-flex flex-wrap justify-content-evenly'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='d-flex flex-column align-items-center m-3'
          >
            <i
              className={`${skill.iconClass} fa-3x m-2`}
              aria-hidden='true'
            ></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
