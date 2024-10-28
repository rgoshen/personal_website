import React from 'react';
import { SkillsType } from '../types/Skills';

const Skills: React.FC<SkillsType> = ({ skills }) => {
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
