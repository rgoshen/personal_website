import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { LinkType } from '../types/Link';

const CustomLink: React.FC<LinkType> = ({
  url,
  label,
  isSocial = false,
  iconClass,
}) => {
  // Check if the link is an in-document anchor (starts with #)
  const isInternal = url.startsWith('#');
  // Check if it's an external link (starts with http/https)
  const isExternal = url.startsWith('http');

  if (isSocial && iconClass) {
    // Render social link with icon
    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={label}
        className='social-link'
      >
        <i className={iconClass} aria-hidden='true'></i>
      </a>
    );
  }

  if (isInternal) {
    // Render in-document smooth scroll link
    return (
      <ScrollLink
        to={url.replace('#', '')}
        smooth={true}
        offset={-70}
        duration={500}
        className='internal-link'
      >
        {label}
      </ScrollLink>
    );
  }

  if (isExternal) {
    // Render external link opening in a new tab
    return (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='external-link'
      >
        {label}
      </a>
    );
  }

  // Fallback: render as a standard anchor tag
  return (
    <a href={url} className='standard-link'>
      {label}
    </a>
  );
};

export default CustomLink;
