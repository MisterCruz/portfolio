const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mistercruz.github.io/portfolio',
  title: 'RC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rolando Cruz',
  role: 'Front End Engineer',
  description:
    '👨🏽‍💻 I am an aspiring developer that enjoys building things with code while listening to lofi & drinking matcha 🍵',
  resume: 'https://mistercruz.github.io/resume/',
  social: {
    linkedin: 'https://www.linkedin.com/in/rolandocruzb/',
    github: 'https://github.com/MisterCruz',
  },
}

const projects = [
  {
    name: 'YelpCamp',
    description:
      'Built a full stack web app that allows users to upload their favorite campsites and put them on the map',
    stack: ['Node.js', 'Express.js', 'JavaScript'],
    
  },
  {
    name: 'Sorting Algorithm Visualizer',
    description:
      'An interactive web app to visualize sorting algorithms such as merge sort',
    stack: ['React', 'JavaScript', 'CSS'],
    
  },
  {
    name: 'Generative NFT dApp',
    description:
      'Created a Generative NFT minting decentralized application on Ethereum',
    stack: ['React', 'Solidity', 'Ethers.js'],
    
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rocruz9816@gmail.com',
}

export { header, about, projects, skills, contact }
