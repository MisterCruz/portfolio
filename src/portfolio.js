const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mistercruz.github.io/portfolio',
  title: 'RC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rolando Cruz',
  role: 'Software Engineer',
  description:
    '👨🏽‍💻 I am an aspiring developer that enjoys building things with code while listening to lofi & drinking matcha. My previous experience includes working at Amazon as a Software Engineer Intern working on Full Stack Development.',
  resume: 'https://mistercruz.github.io/resume/',
  social: {
    linkedin: 'https://www.linkedin.com/in/rolandocruzb/',
    github: 'https://github.com/MisterCruz',
  },
}

const projects = [
  {
    name: 'PizzaNow',
    description:
      'A full stack food delivery application built on React.js/Next.js for a responsive and fast user experience. Wrote a Node.js backend to consume the Paypal API to support live order tracking',
    stack: ['React.js', 'Express', 'Node.js', 'Next.js', 'MongoDB'],
  },
  {
    name: 'Ghost - An AI Writing Assistant',
    description:
      'An AI writing assistant that writes blog posts, twitter threads, and even ad copies by using GPT-3 about any prompt a user enters. The front end is built using React.js and Next.js with the backend written in Node.js',
    stack: ['React.js', 'Next.js', 'Node.js', 'ML/AI'],
    livePreview: 'https://aiwriter-mu.vercel.app/',
  },
  {
    name: 'Find-A-Camp',
    description:
      'Built a full stack web app that allows users to upload their favorite campsites and put them on the map with user authentication',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    name: 'E-Commerce Shop',
    description:
      'Built a full stack web app with React.js on the frontend and using Strapi for the headless CMS. Integrated the payment system with the Stripe API',
    stack: ['React.js', 'Strapi Headless CMS', 'TypeScript'],
  },
  {
    name: 'Generative NFT dApp',
    description:
      'Created a Generative NFT minting decentralized application on Ethereum',
    stack: ['React.js', 'Solidity', 'Ethers.js'],
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express',
  'Python',
  'Git',
  'CI/CD',
  'Tailwind CSS',
  'Next.js',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rocruz9816@gmail.com',
}

export { header, about, projects, skills, contact }
