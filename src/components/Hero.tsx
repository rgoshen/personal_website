import React from 'react';
import { HeroType } from '../types/Hero';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';

const Hero: React.FC<HeroType> = ({
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
          {subtitle && <p className='mb-3 mx-5 fs-4'>{subtitle}</p>}
          {buttons.map((button, index) => (
            <ScrollLink
              key={index}
              to={button.href.replace('#', '')} // react-scroll requires just the id name
              smooth={true}
              offset={-70} // Adjusts for navbar height if needed
              duration={500}
              className='btn btn-outline-light btn-lg m-1'
            >
              {button.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
