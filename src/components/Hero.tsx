import React from 'react';
import { HeroProps } from '../types/HeroProps';
import './Hero.css';

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttons = [],
}) => {
  return (
    <div
      className='hero-section p-5 text-center bg-image shadow-2-strong'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='mask'>
        <div className='text-white'>
          <h1 className='mb-3'>{title}</h1>
          {subtitle && <p className='mb-3 mx-5'>{subtitle}</p>}
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className='btn btn-outline-light btn-lg m-1'
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
