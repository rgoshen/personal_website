import React from 'react';
import { ProfileType } from '../types/Profile';

const Profile: React.FC<ProfileType> = ({
  imageSrc,
  altText,
  bio,
  socialLinks = [],
}) => {
  return (
    <div className='text-center'>
      <img
        src={imageSrc}
        alt={altText}
        className='rounded-circle shadow-1-strong mb-4'
        style={{ maxWidth: '100%', height: 'auto', width: '150px' }} // Optional styling for image size
      />
      <p>{bio}</p>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={link.label}
          className='m-2'
        >
          <i className={`${link.iconClass} fa-2x`}></i>
        </a>
      ))}
    </div>
  );
};

export default Profile;
