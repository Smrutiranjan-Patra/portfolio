import jsVisualizerPreview from "../compoents/images/jsVisualizerPreview.png";
import html from "../compoents/images/html-5.png";
import css from "../compoents/images/css3.png";
import js from "../compoents/images/javascript.png";
import node from "../compoents/images/node-js.png";
import express from "../compoents/images/express.png";
import npm from "../compoents/images/npm.png";
import mongo from "../compoents/images/mongodb.png";
import react from "../compoents/images/react.png";
import redux from "../compoents/images/redux.png";
import github from "../compoents/images/github.png";

export const portfolio = {
  name: "Smrutiranjan Patra",
  shortName: "Smrutiranjan",
  initials: "SP",
  role: "Full Stack Product developer",
  resumeLabel: "Resume",
  resumeUrl: "/Smrutiranjan_Patra_Resume.pdf",
  footer: "Built by Smrutiranjan Patra",
  themeSwitch: {
    lightLabel: "Light",
    darkLabel: "Dark",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#Resume" },
    { label: "Contact", href: "#Contact" },
  ],

  hero: {
    eyebrow: "Full Stack Engineer",
    headline: "I build enterprise React interfaces that stay fast, scalable, and maintainable.",
    rolePrefix: "Focused on",
    focusItems: [
      {
        label: "React and Next.js systems",
        availability: "Open to senior engineer roles",
      },
      {
        label: "performance optimization",
        availability: "Open to product engineering roles",
      },
      {
        label: "reusable UI architecture",
        availability: "Open to design-system work",
      },
      {
        label: "testing and reliability",
        availability: "Open to quality-focused frontend roles",
      },
      {
        label: "developer experience",
        availability: "Open to platform UI roles",
      },
    ],
    description:
      "I am Smrutiranjan Patra, a full-stack engineer with 4+ years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. I specialize in component architecture, API development, database optimization, and enterprise-grade systems.",
    actions: [
      { label: "View projects", href: "#project", variant: "primary" },
      { label: "Download resume", href: "resume", variant: "secondary", external: true },
    ],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/Smrutiranjan-Patra" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/" },
      { label: "Email", href: "mailto:guessme.smruti@gmail.com" },
    ],
    availability: "Open to senior frontend roles",
    illustrationLabel: "Full-stack developer workspace illustration",
    illustrationTitle: "Developer building a full-stack application",
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "20%", label: "Speed improvement delivered" },
      { value: "40%", label: "Onboarding time reduced" },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "Product-minded frontend engineer with enterprise delivery experience.",
    subheadline: "I care about fast interfaces, reusable systems, clean code, and the developer experience behind the product.",
    description:
      "My work spans enterprise UI frameworks, reusable component systems, API lifecycle tooling, workflow automation, and performance-sensitive React and Node.js applications. I have worked across EDI and e-commerce platforms, using React.js, Next.js, Node.js, Express.js, MongoDB, and modern full-stack practices to improve speed, maintainability, and team productivity.",
    metrics: [
      { value: "4+", label: "Years building production web apps" },
      { value: "20%", label: "Application speed improvement delivered" },
      { value: "40%", label: "Onboarding time reduction through docs" },
      { value: "3", label: "Product roles across enterprise teams" },
    ],
    highlights: [
      {
        number: "01",
        title: "Enterprise UI systems",
        description:
          "Architect modular React interfaces, reusable snippets, and shared components used across product lines.",
      },
      {
        number: "02",
        title: "Performance and state",
        description:
          "Improve rendering speed, pagination, memoization, code splitting, and predictable state management for large datasets.",
      },
      {
        number: "03",
        title: "Reliability and DX",
        description:
          "Write unit tests, document internal APIs, mentor developers, and create patterns that reduce onboarding time.",
      },
      {
        number: "04",
        title: "Backend APIs and Databases",
        description:
          "Design and implement RESTful APIs, optimize database queries, and ensure secure and scalable backend systems.",
      },
    ],
    workflow: [
      {
        title: "Map the product flow",
        description: "Understand users, edge cases, data movement, and where the interface can reduce effort.",
      },
      {
        title: "Design reusable pieces",
        description: "Break screens into components, state boundaries, and patterns that other developers can extend.",
      },
      {
        title: "Optimize the experience",
        description: "Use code splitting, memoization, pagination, and testing to keep the product fast and reliable.",
      },
      {
        title: "Document and hand off",
        description: "Leave internal APIs, UI rules, and implementation decisions clear for the next person.",
      },
    ],
  },

  experienceSection: {
    eyebrow: "Experience",
    headline: "Professional work with measurable product impact",
    subheadline: "A resume-backed snapshot of roles, ownership, and outcomes.",
  },

  experience: [
    {
      company: "DCKAP Technologies",
      role: "Product Developer II",
      period: "July 2024 - Present",
      points: [
        "Architected a modular, high-performance UI framework for enterprise-grade applications with a focus on maintainability and component reusability.",
        "Implemented frontend performance improvements such as code splitting and memoization, delivering around 20% improvement in application speed.",
        "Designed a custom system management utility for API versioning and deprecation, helping phase out legacy dependencies and reduce technical debt.",
      ],
    },
    {
      company: "DCKAP Technologies",
      role: "Product Developer I",
      period: "August 2022 - July 2024",
      points: [
        "Built a unified Projects module for managing shared and personal assets, improving workflow efficiency through simpler navigation and data access.",
        "Created automated credential mapping plus import and export flows that reduced manual configuration effort for users.",
        "Engineered reusable snippets and standardized error-handling patterns across the platform while improving UI stability for large datasets.",
      ],
    },
    {
      company: "Influx Worldwide",
      role: "Associate Software Developer",
      period: "April 2022 - August 2022",
      points: [
        "Automated dynamic report generation from user inputs, reducing manual effort and improving operational efficiency.",
        "Resolved production bugs to improve reliability and optimized build configuration with Babel for better maintainability.",
      ],
    },
  ],

  achievementsSection: {
    eyebrow: "Impact",
    headline: "What I bring to teams",
    subheadline: "Highlights from the resume that describe how I work, not just what I know.",
  },

  achievements: [
    "Awarded Employee of the Quarter for consistent delivery and high-quality frontend contributions.",
    "Mentored junior developers and improved team productivity, code quality, and shared engineering standards.",
    "Implemented unit testing with Jest and React Testing Library to improve reliability and reduce production issues.",
    "Established documentation standards for internal APIs and UI libraries, reducing onboarding time for new hires by about 40%.",
  ],

  projectsSection: {
    eyebrow: "Toy Projects",
    headline: "Selected builds with product thinking",
    subheadline: "A closer look at interface work, full-stack flows, and the decisions behind each project.",
    label: "Featured build",
    liveLabel: "Live site",
    repoLabel: "GitHub",
    detailLabel: "What it covers",
  },

  projects: [
    {
      name: "JS Visualizer",
      type: "Developer Tool / Educational Platform",
      role: "Full Stack Developer",
      outcome:
        "Built an interactive JavaScript execution visualizer to simulate the event loop, call stack, and asynchronous behavior for better learning and debugging.",
      description:
        "An interactive JavaScript visualization tool inspired by runtime execution concepts. The application visually demonstrates how JavaScript handles synchronous and asynchronous operations including the call stack, Web APIs, microtask queue, and callback queue.",
      tech: ["HTML", "CSS", , "JavaScript", "React JS", "Zustand"],
      features: [
        "Event loop visualization",
        "Call stack simulation",
        "Microtask and callback queue handling",
        "Async execution flow representation",
        "Step-by-step execution understanding",
        "Interactive learning interface",
        "Responsive UI"
      ],
      image: jsVisualizerPreview,
      imageAlt: "JavaScript Visualizer project preview",
      live: "https://smrutiranjan-patra.github.io/js-visualizer/",
      repo: "https://github.com/Smrutiranjan-Patra/js-visualizer",
    }
  ],

  skillsSection: {
    eyebrow: "Skills",
    headline: "Frontend depth with full-stack awareness",
    subheadline: "React architecture, state management, testing, performance, backend APIs, databases, and delivery tooling.",
  },

  skills: [
    { name: "JavaScript ES6+", icon: js, group: "Language" },
    { name: "TypeScript", group: "Language" },
    { name: "React.js", icon: react, group: "Frontend" },
    { name: "Next.js", group: "Frontend" },
    { name: "Redux Toolkit", icon: redux, group: "State" },
    { name: "Zustand", group: "State" },
    { name: "HTML5", icon: html, group: "Interface" },
    { name: "CSS3 / SASS", icon: css, group: "Interface" },
    { name: "Tailwind CSS", group: "Styling" },
    { name: "Jest", group: "Testing" },
    { name: "React Testing Library", group: "Testing" },
    { name: "Node.js", icon: node, group: "Backend" },
    { name: "Express.js", icon: express, group: "Backend" },
    { name: "REST APIs", group: "Backend" },
    { name: "PostgreSQL", group: "Database" },
    { name: "MongoDB", icon: mongo, group: "Database" },
    { name: "MySQL", group: "Database" },
    { name: "GitHub", icon: github, group: "Workflow" },
    { name: "GitLab", group: "Workflow" },
    { name: "Docker", group: "DevOps" },
    { name: "Jira", group: "Workflow" },
    { name: "Postman", group: "Tooling" },
    { name: "npm", icon: npm, group: "Tooling" },
  ],

  educationSection: {
    eyebrow: "Education",
    headline: "Learning path",
    subheadline: "Formal education and focused web development training.",
  },

  education: [
    {
      title: "Master of Computer Applications, AI and Machine Learning",
      place: "Amity University, Uttar Pradesh",
      period: "2025 - Present",
    },
    {
      title: "Bachelor of Commerce, Accounting",
      place: "Utkal University, Odisha",
      period: "2017 - 2021",
    },
    {
      title: "MERN Stack Web Development Training",
      place: "Masai School, India",
      period: "2021 - 2022",
    },
  ],

  contact: {
    eyebrow: "Contact",
    headline: "Let us build something useful.",
    subheadline: "Share a role, project, or collaboration idea and I will get back to you.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about the opportunity or project",
      submitLabel: "Send message",
      successMessage: "Thanks for Contact Me",
    },
    directTitle: "Direct links",
    links: [
      { label: "guessme.smruti@gmail.com", href: "mailto:guessme.smruti@gmail.com" },
      { label: "+91 9776444262", href: "tel:9776444262" },
      { label: "Puri, Odisha", href: "https://goo.gl/maps/TDDTGna6qYtZFVT17", external: true },
    ],
    noteTitle: "Best fit",
    note:
      "Senior frontend roles, product engineering, enterprise React applications, UI architecture, performance optimization, and testing-focused teams.",
  },
};
