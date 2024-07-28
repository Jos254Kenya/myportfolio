import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    transforce,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    code,
    mobileAppsImage,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Fullstack Software Developer",
      company_name: "Mount Kenya Milk",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2024 - To date",
      points: [
        "Analyzing and interpreting project requirements and assigning duties to development team.",
        "Developing and maintaining web and mobile applications using React.js, Axios, PHP, MySQL, mongoDB and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Senior Software Developer",
      company_name: "Transforceholdings Limited, Mombasa -Kenya",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2022 – Dec 2023",
      points: [
        "Analyzed and interpreted project requirements to complete the projected website development..",
        "Design and management of the company's official website.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions and meet project deadlines.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer (Self)",
      company_name: "Elohim Ventures Limited, Mombasa- Kenya",
      icon: shopify,
      iconBg: "#383E56",
      date: "2021 - Jan 2022",
      points: [
        "Designed and developed the pharmacy and clinic management system in PHP, Ajax and MySQL.",
        "Customer consultations and Project Management",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Sigawa proved me wrong.",
      name: "Mary K. Murithi",
      designation: "CFO",
      company: "Stanbookings Ltd",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sigawa does.",
      name: "Elijah Magaiwa",
      designation: "COO",
      company: "Specialcare Pharmaceutical",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sigawa optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Jerome Wanyonyi",
      designation: "CTO",
      company: "Treelife Enterprises Ltd",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Custom MVC Framework",
      description:
        "A customized MVC framework installed via Composer, inspired by in-depth knowledge of Laravel, Symfony, Codeingitor.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mvc",
          color: "green-text-gradient",
        },
        {
          name: "composer",
          color: "pink-text-gradient",
        },
      ],
      image: jobit, 
      source_code_link: "https://github.com/Jos254Kenya/k-mvc-core",
    },
    {
      name: "Online Shuttle Booking System",
      description:
        "A comprehensive booking system with admin and client sites, featuring payment gateways.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "axios",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "yellow-text-gradient",
        },
      ],
      image: tripguide, // Replace with the actual image variable
      source_code_link: "https://www.sgrshuttle.stanbookings.com",
    },
    {
      name: "Cleaning Company Website",
      description:
        "Website for booking cleaning services with real-time SMS and email notifications.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "ajax",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "yellow-text-gradient",
        },
      ],
      image: transforce, // Replace with the actual image variable
      source_code_link: "https://www.treelife.co.ke",
    },
    {
      name: "Mobile Applications for Sales and Drivers",
      description:
        "Mobile apps utilizing Google Maps API and Nomination API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
      ],
      image: mobileAppsImage, // Replace with the actual image variable
      source_code_link: "#",
    },
    {
      name: "OCR Application",
      description:
        "Currently working on an OCR application using Python.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ocr",
          color: "green-text-gradient",
        },
      ],
      image: code, // Replace with the actual image variable
      source_code_link: "#",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };