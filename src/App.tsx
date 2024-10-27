import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';

const featureItems = [
  {
    icon: 'fas fa-tachometer-alt',
    title: 'Fast',
    description: 'Blazing fast load times is my highest priority',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive',
    description:
      'My layouts will look perfect on any device, regardless of screen size.',
  },
  {
    icon: 'far fa-lightbulb',
    title: 'Intuitive',
    description: 'Easy to use, intuitive UX/UI out of the box.',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Dynamic',
    description: 'Websites don’t have to be boring. I love to give them life.',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Features items={featureItems} />
      <About />
    </>
  );
};

export default App;
