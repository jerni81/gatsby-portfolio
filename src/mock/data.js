import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'AJ Jernigan | Freelance Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'AJ Jernigan',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vS6KTk6Tk2KtWgbYW_pA_dSeV8Fy1SgAXJhy7jJWm5nQUeDAauZuQQBVzCrqy9pemsXfos-Me9spwmU/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'townsend-mediation.png',
    title: 'Townsend Mediation',
    info:
      'Townsend Mediation is a fully responsive frontend site built with create-react-app using Material-UI and react-router for styling and navigation. I was able to create a custom layout that fit the clients requested use cases, as well as style the site to their specifications.',
    info2: '',
    url: 'http://townsend-mediation.surge.sh/',
    repo: 'https://github.com/jerni81/townsend-mediation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'daytona-gang.png',
    title: 'Daytona Gang',
    info: 'Daytona Gang is a fullstack Progresive Web App built using the MERN stack. The frontend is built with create-react-app using Material-UI and react-router for styling and navigation, as well as Google Firebase for authentification. The backend is built using MongoDB as the database, and Node.js with Express as the runtime environment and backend framework. Data sent to the database is formated using Mongoose.',
    info2: '',
    url: 'http://daytona-gang.surge.sh/',
    repo: 'https://github.com/jerni81/daytona_gang_v2', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ajjernigan87@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aj-jernigan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jerni81',
    },
  ],
};
