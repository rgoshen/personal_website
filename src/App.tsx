import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import ProjectSection from './components/ProjectSection';

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

const personalProjects = [
  {
    title: 'Quick Quiz App',
    description: `The Quick Quiz App is one of my foundational projects from when I first started learning JavaScript. Built using HTML, CSS, and JavaScript, it features local storage for high scores and uses an API to generate dynamic trivia questions. This project highlights my early experience with JavaScript and my initial work in front-end development, focusing on interactive user experiences.`,
    link: 'https://rgoshen.github.io/quiz_app/',
    imageSrc: '/assets/Quick_quiz_app.png',
    githubLink: 'https://github.com/rgoshen/quiz_app',
  },
  {
    title: 'Quote Generator',
    description: `The Quote Generator was one of my early JavaScript projects, created during my self-taught days to solidify core programming concepts. Built with HTML, CSS, and vanilla JavaScript, it dynamically generates random quotes, showcasing my foundational skills in DOM manipulation and asynchronous data fetching.`,
    link: 'https://rgoshen.github.io/quote_generator/',
    imageSrc: '/assets/quote_generator.png',
    githubLink: 'https://github.com/rgoshen/quote_generator',
  },
  {
    title: `To-do List`,
    description: `The to-do app is a task management tool I built using HTML, CSS, and JavaScript, allowing users to add, complete, and remove tasks. I completed this project as part of my bootcamp experience.`,
    link: 'https://rgoshen.github.io/todo_list/',
    imageSrc: '/assets/to-do-list.png',
    githubLink: 'https://github.com/rgoshen/todo_list',
  },
  {
    title: `Memory Game`,
    description: `I built this interactive memory game during my bootcamp, using JavaScript, HTML, and CSS to challenge players to match pairs of cards while recording their fastest time. This project helped me strengthen core programming concepts and implement responsive design for an engaging user experience.`,
    link: 'https://rgoshen.github.io/memory_game/',
    imageSrc: '/assets/memory-game.png',
    githubLink: 'https://github.com/rgoshen/memory_game',
  },
  {
    title: `Meme Generator`,
    description: `In my Meme Generator app, I used W3 styles and JavaScript to create a dynamic tool that allows users to customize images with personalized text. Built during my bootcamp, this project showcases my skills in managing state, handling user input, and working with image APIs to enhance interactivity.`,
    link: 'https://rgoshen.github.io/meme_generator/',
    imageSrc: '/assets/meme-generator.png',
    githubLink: 'https://github.com/rgoshen/meme_generator',
  },
  {
    title: `Connect 4`,
    description: `In my Connect 4 game project, I developed a classic two-player game using HTML, CSS, and JavaScript, focusing on DOM manipulation and basic game logic. This project helped me deepen my understanding of interactive web elements and responsive design.`,
    link: 'https://rgoshen.github.io/connect_4/',
    imageSrc: '/assets/connect-4.png',
    githubLink: 'https://github.com/rgoshen/connect_4',
  },
  {
    title: `Movie List App`,
    description: `In my Movie List App, I used jQuery and JavaScript to create an interactive platform for browsing and managing movie collections. This project, completed during my bootcamp, showcases my ability to build responsive UIs and implement dynamic functionality with jQuery.`,
    link: 'https://rgoshen.github.io/movie_app/',
    imageSrc: '/assets/movie_app.png',
    githubLink: 'https://github.com/rgoshen/movie_app',
  },
  {
    title: `TV Maze`,
    description: `The TV Maze app I created utilizes JavaScript, jQuery, and the TV Maze API to fetch and display TV show data dynamically. This project showcases my ability to work with RESTful APIs and manipulate the DOM to create an interactive user experience.`,
    link: 'https://rgoshen.github.io/tv_maze/',
    imageSrc: '/assets/tv_maze.png',
    githubLink: 'https://github.com/rgoshen/tv_maze',
  },
];

const professionalProjects = [
  {
    title: 'U.S. Tax Court Dawson Case Management System',
    description: `The U.S. Tax Court’s Electronic Filing Case Management System (ef-cms) is an open-source, serverless application developed by Flexion to optimize e-filing and case management. Utilizing AWS, Elasticsearch, DynamoDB, TypeScript, and Express.js, it offers scalable and efficient functionality for court operations.`,
    link: 'https://dawson.ustaxcourt.gov/',
    imageSrc: '/assets/dawson.jpg',
  },
  {
    title:
      'Medicare Dental Claims Modernization Initiative: Scalable Platform Development for CMS',
    description: `Developed a scalable dental claims processing platform using Java, Terraform, Bash, and AWS serverless architecture to support CMS’s modernization efforts for Medicare claims processing.
`,
    link: 'https://www.cms.gov/medicare/coverage/dental',
    imageSrc: '/assets/CMS-700x467.jpg',
  },
  {
    title: 'Office of Head Start: Head Start Enterprise System (HSES)',
    description: `Modernized the HSES platform using Java, Spring Boot, AWS, and Postgres to support grant management and provide real-time reporting for improved program oversight in early childhood education.`,
    link: 'https://hses.ohs.acf.hhs.gov/',
    imageSrc: '/assets/hses.jpg',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Features items={featureItems} />
      <About />
      <ProjectSection
        personalProjects={personalProjects}
        professionalProjects={professionalProjects}
      />
    </>
  );
};

export default App;
