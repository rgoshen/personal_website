import React from 'react';
import './Footer.css';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>&#169; 2020 - {currentYear} Rick Goshen</p>
    </footer>
  );
};

export default FooterSection;
