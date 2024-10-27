import React from 'react';
import Profile from './Profile';
import Skills from './Skills';

import imageSrc from '/assets/me_scaled.jpg';

const About: React.FC = () => {
  const bio = `I am a software engineer currently working for
                Flexion Inc. I live in Tucson,
                AZ. I have 20 years of military experience in teamwork and
                leadership. This experience has taught me to adapt and overcome
                any problem I face. For the past 4+ months, I am part of an
                amazing team working on a modernization project for the Center
                for Medicare and Medicaid Services. We are creating an app to
                adjudicate claims.`;

  const socialLinks = [
    {
      iconClass: 'fab fa-facebook-f',
      href: 'https://www.facebook.com/rick.goshen/',
      label: 'Facebook',
    },
    {
      iconClass: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/rickgoshen/',
      label: 'LinkedIn',
    },
    {
      iconClass: 'fab fa-github',
      href: 'https://github.com/rgoshen',
      label: 'GitHub',
    },
  ];

  const skills = [
    { name: 'HTML5', iconClass: 'fa fa-html5' },
    { name: 'CSS3', iconClass: 'fa fa-css3' },
    { name: 'Sass', iconClass: 'fa fa-sass-alt' },
    { name: 'JavaScript', iconClass: 'fab fa-js' },
    { name: 'Java', iconClass: 'fa fa-java' },
    { name: 'Python', iconClass: 'fa fa-python' },
    { name: 'Markdown', iconClass: 'fa fa-markdown' },
    { name: 'React', iconClass: 'fa fa-react' },
    { name: 'Node.js', iconClass: 'fa fa-nodejs' },
    { name: 'Bootstrap', iconClass: 'fa fa-bootstrap' },
    { name: 'Material Design Bootstrap', iconClass: 'fab fa-mdb' },
    { name: 'Databases', iconClass: 'fas fa-database' },
    { name: 'PostgreSQL', iconClass: 'fa fa-postgresql' },
    { name: 'Git', iconClass: 'fa fa-git' },
    { name: 'GitHub', iconClass: 'fa fa-github' },
    { name: 'Bitbucket', iconClass: 'fa fa-bitbucket' },
    { name: 'Apple', iconClass: 'fa fa-apple' },
    { name: 'Linux', iconClass: 'fa fa-linux' },
    { name: 'Windows', iconClass: 'fab fa-windows' },
    { name: 'Amazon Web Services', iconClass: 'fab fa-aws' },
  ];

  return (
    <section className='container my-5' id='about'>
      <h3>
        <strong>About Me</strong>
      </h3>
      <div className='row'>
        <div className='col-md-6'>
          <Profile
            imageSrc={imageSrc}
            altText='Rick Goshen'
            bio={bio}
            socialLinks={socialLinks}
          />
        </div>
        <div className='col-md-6'>
          <Skills skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default About;
