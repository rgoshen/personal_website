import React from 'react';
import { ContactLink } from '../types/ContactLink';

interface ContactSectionProps {
  links: ContactLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ links }) => {
  return (
    <section className='text-center my-5' id='contact'>
      <h3>
        <strong>Contact me</strong>
      </h3>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={link.label}
          role='button'
          style={{ color: link.color || 'inherit', margin: '0 10px' }}
        >
          <i className={link.iconClass} aria-hidden='true'></i>
        </a>
      ))}
    </section>
  );
};

export default ContactSection;
