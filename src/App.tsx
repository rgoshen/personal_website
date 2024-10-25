import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import './App.css';
import Navbar from './components/Navbar';

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

const App: React.FC = () => {
  return (
    <>
      <Navbar logoSrc='/src/assets/bytebridge-logo.png' links={navLinks} />
      {/* Other Components */}
    </>
  );
};

export default App;
