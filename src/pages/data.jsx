import { Code, Cpu, Feather, CheckCheck, Users, Coffee, Award } from 'lucide-react'; 
import images from '../assets/images';

// data.js (or wherever your projects are imported from)
export const projects = [
  // Web Designing
  {
    id: 1,
    title: "Law Firm Website",
    description: "Professional legal services website with clean UI, service sections, and contact integration.",
    imageSrc: images.lawfirm,
    category: "Web Designing",
    link: "https://lawfirm-sand-six.vercel.app"
  },
  {
    id: 2,
    title: "The Big Business Co",
    description: "Corporate business website with premium layout, branding sections, and service highlights.",
    imageSrc: images.bigbusiness,
    category: "Web Designing",
    link: "https://www.thebigbusinessco.com.au"
  },
  {
    id: 3,
    title: "School Website",
    description: "Modern school website with academic sections, admissions info, and responsive design.",
    imageSrc: images.kidsschool,
    category: "Web Designing",
    link: "https://school-website-two-psi.vercel.app"
  },

  // Web Dev
  {
    id: 4,
    title: "KloudShark Website",
    description: "Business website with modern UI, service showcase, and responsive frontend development.",
    imageSrc: images.kloudshark,
    category: "Web Dev",
    link: "https://www.kloudshark.com"
  },
  {
    id: 5,
    title: "Fundraiser Platform",
    description: "Crowdfunding platform with donation flow, campaign pages, and user interaction.",
    imageSrc: images.fundraiser,
    category: "Web Dev",
    link: "https://fund-raiser-jw2v.vercel.app"
  },
  {
    id: 6,
    title: "Worker Community App",
    description: "Community platform with user interaction, posts, and social features built on MERN stack.",
    imageSrc: images.commun,
    category: "Web Dev",
    link: "https://worker-community.vercel.app"
  },

  // Misc / Other Projects
  {
    id: 7,
    title: "Real Estate Website",
    description: "Property listing website with modern UI, featured listings, and responsive design.",
    imageSrc: images.realestate,
    category: "Web Designing",
    link: "https://real-estate-neon-alpha.vercel.app"
  },
  {
    id: 8,
    title: "Fundzz Platform",
    description: "Financial platform website with clean UI, service flow, and user-focused design.",
    imageSrc: images.fundzz,
    category: "Web Dev",
    link: "https://fundzz.com"
  },
  {
    id: 9,
    title: "Travel Website",
    description: "One-page travel website with destination highlights and modern responsive layout.",
    imageSrc: images.travel,
    category: "Web Designing",
    link: "https://travel-ten-sandy.vercel.app"
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