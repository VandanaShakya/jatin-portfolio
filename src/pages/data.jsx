import { Code, Cpu, Feather, CheckCheck, Users, Coffee, Award } from 'lucide-react'; 
import images from '../assets/images';

// data.js (or wherever your projects are imported from)
export const projects = [
  // Web Designing
  {
    id: 1,
    title: "Creative Portfolio Design",
    description: "A modern, responsive portfolio layout for creatives.",
    imageSrc: images.project1,
    category: "Web Designing",
    link: "#"
  },
  {
    id: 2,
    title: "Landing Page UI",
    description: "A sleek landing page design for a startup.",
    imageSrc: images.project2,
    category: "Web Designing",
    link: "#"
  },
  {
    id: 3,
    title: "E-commerce Storefront",
    description: "Responsive web design for an online store.",
    imageSrc:images.project3,
    category: "Web Designing",
    link: "#"
  },

  // Web Dev
  {
    id: 4,
    title: "React Dashboard",
    description: "Dynamic admin dashboard built with React and Tailwind.",
    imageSrc: images.project4,
    category: "Web Dev",
    link: "#"
  },
  {
    id: 5,
    title: "Node.js API Backend",
    description: "RESTful API with Node.js and Express for a SaaS app.",
    imageSrc: images.project5,
    category: "Web Dev",
    link: "#"
  },
  {
    id: 6,
    title: "Full-Stack Blog App",
    description: "MERN stack project with authentication and CRUD.",
    imageSrc: images.project6,
    category: "Web Dev",
    link: "#"
  },

  // Misc / Other Projects
  {
    id: 7,
    title: "Branding Website",
    description: "Landing page for a branding agency with animations.",
    imageSrc: images.project7,
    category: "Web Designing",
    link: "#"
  },
  {
    id: 8,
    title: "Portfolio CMS",
    description: "Custom CMS for a personal portfolio website.",
    imageSrc: images.project8,
    category: "Web Dev",
    link: "#"
  },
  {
    id: 9,
    title: "Startup One Page",
    description: "One-page website design for a tech startup.",
    imageSrc: images.project9,
    category: "Web Designing",
    link: "#"
  }
];


export const categories = ['All', 'Webdesign', 'Development', 'Photography'];


// about//
export const pillars = [
        {
            icon: Feather, 
            title: 'Frontend Craftsmanship',
            description: "Building fast, fluid, and intuitive user experiences with modern frameworks like React, ensuring seamless responsiveness across all devices.",
        },
        {
            icon: Code,
            title: 'Scalable Backend APIs',
            description: "Designing and implementing robust, secure, and scalable server-side solutions using Node.js/Python and REST/GraphQL architectures.",
        },
        {
            icon: Cpu,
            title: 'DevOps & Quality',
            description: "Implementing CI/CD pipelines, containerization (Docker), and rigorous testing protocols to guarantee maximum uptime and reliability.",
        },
    ];


    // stat //
    export const statsData = [
    {
        icon: CheckCheck,
        count: '140',
        label: 'COMPLETE PROJECT',
        // Note: The original image had "COMPLETE PROJECT" but "Completed Projects" is better grammar.
    },
    {
        icon: Users,
        count: '48',
        label: 'HAPPY CLIENTS',
    },
    {
        icon: Coffee,
        count: '224',
        label: 'CUPS OF COFFEE',
    },
    {
        icon: Award,
        count: '4',
        label: 'AWARDS',
    },
];



// services //
export const services = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    tag: 'MAIN SERVICE',
    imagePlaceholder: images.webdev,
    link: 'https://www.fnamarketingsolutions.com/services/website-development',
  },
  {
    id: 2,
    title: 'Frontend Development',
    tag: 'WEB DEVELOPMENT',
    imagePlaceholder: images.frontend,
    link: 'https://www.fnamarketingsolutions.com/services/frontend-development',
  },
  {
    id: 3,
    title: 'Backend Development',
    tag: 'SPECIALTY',
    imagePlaceholder: images.backend,
    link: 'https://www.fnamarketingsolutions.com/services/backend-development',
  },
  {
    id: 4,
    title: 'Website Hosting & Maintenance',
    tag: 'WEB SERVICE',
    imagePlaceholder: images.webhosting,
    link: 'https://www.fnamarketingsolutions.com/services/web-hosting',
  },
  {
    id: 5,
    title: 'SEO & Digital Marketing',
    tag: 'MARKETING',
    imagePlaceholder: images.seo,
    link: 'https://www.fnamarketingsolutions.com/services/seo-digital-marketing',
  },
  {
    id: 6,
    title: 'Email Marketing Campaigns',
    tag: 'MARKETING',
    imagePlaceholder: images.email,
    link: 'https://www.fnamarketingsolutions.com/services/email-marketing',
  },
];



// about scrollig data //
export const scrollingTexts = [
    {
      img: images.frontend,
      title: "Frontend Development",
      desc: "Designing beautiful, interactive, and user-focused interfaces that engage visitors effortlessly.",
      description: "Turning concepts into engaging web realities.",
    },
    {
      img: images.backend,
      title: "Backend Engineering",
      desc: "Building powerful and scalable server-side systems for high-performance web experiences.",
      description: "Turning concepts into engaging web realities.",
    },
    {
      img: images.uiux,
      title: "UI/UX Design",
      desc: "Transforming ideas into seamless and intuitive digital journeys with precision and style.",
      description: "Building intuitive and modern online spaces.",
    },
    {
      img: images.webdev,
      title: "Full Stack Solutions",
      desc: "Delivering end-to-end web applications from concept to deployment, ensuring excellence at every layer.",
      description: "Simplifying design through thoughtful development.",
    },
  ]