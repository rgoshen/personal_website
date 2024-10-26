import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import logoSrc from '../assets/bytebridge-logo.png';
import heroSrc from '../assets/hero-img.jpg';

const navLinks = [
  { label: 'Home', href: 'home', isScroll: true },
  { label: 'Features', href: 'features', isScroll: true },
  { label: 'About me', href: 'about', isScroll: true },
  { label: 'My projects', href: 'projects', isScroll: true },
  { label: 'Contact', href: 'contact', isScroll: true },
];

const socialLinks = [
  {
    icon: 'facebook-f',
    href: 'https://www.facebook.com/rick.goshen/',
    label: 'Facebook',
  },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/rickgoshen/',
    label: 'LinkedIn',
  },
  { icon: 'github', href: 'https://github.com/rgoshen', label: 'GitHub' },
];

const Header = () => {
  return (
    <header>
      <Navbar logoSrc={logoSrc} links={navLinks} />
      <Hero
        backgroundImage={heroSrc}
        title='Rick Goshen'
        subtitle='Software Engineer'
        buttons={[
          { label: 'My skills', href: '#about' },
          { label: 'My portfolio', href: '#projects' },
        ]}
      />
    </header>
  );
};

export default Header;
