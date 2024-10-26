import React from 'react';
import { HeroProps } from '../types/HeroTypes';
import './Hero.css';

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttons = [],
}) => {
  return (
    <div
      className='hero-section'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='mask'>
        <div className='text-content'>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {buttons.map((button, index) => (
            <a key={index} href={button.href} className='hero-button'>
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
