import React from 'react';
import { FeaturesProps } from '../types/FeatureProps';

const Features: React.FC<FeaturesProps> = ({ items }) => {
  return (
    <section className='text-center m-5' id='features'>
      <h3>
        <strong>Features</strong>
      </h3>
      <div className='row' aria-label='features row'>
        {items.map((item, index) => (
          <div
            className='col-lg-3 col-md-6'
            aria-label='features column'
            key={index}
          >
            <i className={`${item.icon} fa-3x text-primary`}></i>
            <h5 className='my-4'>{item.title}</h5>
            <p className='mb-md-3'>{item.description}</p>
          </div>
        ))}
      </div>
      <hr className='m-5' />
    </section>
  );
};

export default Features;
