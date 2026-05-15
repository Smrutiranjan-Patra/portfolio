import {
  jsVisualizerPreview, html, css, js, node, express, npm, mongo, psql, msql, react, redux, github, typescript, tailwind, antd, next, jest, rtl, glab, jira, postman, docker, copilot, chatgpt, gemini
} from "../assets/index.js"

export const portfolio = {
  name: "Smrutiranjan Patra",
  shortName: "Smrutiranjan",
  initials: "SP",
  role: "Full Stack Product Developer",
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
    headline:
      "I build scalable full-stack applications with modern frontend systems, backend services, and reliable architecture.",
    rolePrefix: "Focused on",
    focusItems: [
      {
        label: "full-stack application architecture",
        availability: "Open to product engineering roles",
      },
      {
        label: "React and Next.js systems",
        availability: "Open to frontend and full-stack roles",
      },
      {
        label: "backend APIs and database design",
        availability: "Open to backend-integrated product work",
      },
      {
        label: "performance optimization and scalability",
        availability: "Open to high-scale engineering teams",
      },
      {
        label: "testing, reliability, and developer experience",
        availability: "Open to quality-focused engineering roles",
      },
    ],
    description:
      "I am Smrutiranjan Patra, a full-stack engineer with 4+ years of experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. I specialize in frontend architecture, backend APIs, database optimization, and enterprise-grade systems.",
    actions: [
      { label: "View projects", href: "#project", variant: "primary" },
      {
        label: "Download resume",
        href: "resume",
        variant: "secondary",
        external: true,
      },
    ],
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/Smrutiranjan-Patra",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/",
      },
      {
        label: "Email",
        href: "mailto:guessme.smruti@gmail.com",
      },
    ],
    availability: "Open to full-stack and product engineering roles",
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
    headline: "Product-minded engineer with enterprise delivery experience.",
    subheadline:
      "I care about scalable systems, clean architecture, performant user experiences, and reliable backend services.",
    description:
      "My work spans enterprise applications, reusable component systems, backend APIs, workflow automation, and performance-sensitive full-stack platforms. I have worked across EDI and e-commerce systems using React.js, Next.js, Node.js, Express.js, MongoDB, and modern engineering practices to improve scalability, maintainability, and team productivity.",
    metrics: [
      { value: "4+", label: "Years building production apps" },
      { value: "20%", label: "Application speed improvement delivered" },
      { value: "40%", label: "Onboarding time reduction through docs" },
      { value: "3", label: "Product roles across enterprise teams" },
    ],
    highlights: [
      {
        number: "01",
        title: "Full-stack architecture",
        description:
          "Build scalable full-stack systems with reusable frontend components, backend services, and maintainable architecture.",
      },
      {
        number: "02",
        title: "Performance and scalability",
        description:
          "Optimize frontend rendering, backend processing, database queries, and application scalability for large-scale systems.",
      },
      {
        number: "03",
        title: "Reliability and DX",
        description:
          "Write unit tests, document internal APIs, mentor developers, and create patterns that improve engineering efficiency.",
      },
      {
        number: "04",
        title: "Backend APIs and databases",
        description:
          "Design and implement RESTful APIs, optimize database queries, and ensure secure and scalable backend systems.",
      },
    ],
    workflow: [
      {
        title: "Map the product flow",
        description:
          "Understand users, edge cases, data movement, and where the application can reduce effort.",
      },
      {
        title: "Design reusable systems",
        description:
          "Break applications into scalable frontend modules, backend services, and maintainable architecture patterns.",
      },
      {
        title: "Optimize the experience",
        description:
          "Use caching, memoization, pagination, testing, and query optimization to keep systems fast and reliable.",
      },
      {
        title: "Document and hand off",
        description:
          "Leave APIs, architecture decisions, workflows, and implementation details clear for the next developer.",
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
        "Architected scalable full-stack application systems with reusable frontend architecture, backend integrations, and maintainable engineering patterns.",
        "Implemented frontend and backend performance improvements such as code splitting, memoization, and API optimization, delivering around 20% improvement in application speed.",
        "Designed a custom system management utility for API versioning and deprecation, helping phase out legacy dependencies and reduce technical debt.",
      ],
    },
    {
      company: "DCKAP Technologies",
      role: "Product Developer I",
      period: "August 2022 - July 2024",
      points: [
        "Built a unified Projects module for managing shared and personal assets, improving workflow efficiency through simpler navigation and optimized data handling.",
        "Created automated credential mapping plus import and export flows that reduced manual configuration effort for users.",
        "Engineered reusable frontend modules, backend integrations, and standardized error-handling patterns while improving stability for large datasets.",
      ],
    },
    {
      company: "Influx Worldwide",
      role: "Associate Software Developer",
      period: "April 2022 - August 2022",
      points: [
        "Automated dynamic report generation from user inputs, reducing manual effort and improving operational efficiency.",
        "Resolved production bugs, improved backend reliability, and optimized build configuration for better maintainability.",
      ],
    },
  ],

  achievementsSection: {
    eyebrow: "Impact",
    headline: "What I bring to teams",
    subheadline: "Highlights from the resume that describe how I work, not just what I know.",
  },

  achievements: [
    "Awarded Employee of the Quarter for consistent delivery and high-quality full-stack engineering contributions.",
    "Mentored junior developers and improved team productivity, code quality, and shared engineering standards.",
    "Implemented unit testing with Jest and React Testing Library to improve reliability and reduce production issues.",
    "Established documentation standards for internal APIs and engineering libraries, reducing onboarding time for new hires by about 40%.",
  ],

  projectsSection: {
    eyebrow: "Toy Projects",
    headline: "Selected builds with product thinking",
    subheadline:
      "A closer look at full-stack systems, application architecture, and the engineering decisions behind each project.",
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
      tech: ["React JS", "Zustand", "Ant Design"],
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
    headline:
      "Full-stack engineering across frontend, backend, and databases",
    subheadline:
      "Building scalable applications using modern frontend frameworks, backend APIs, databases, testing, and deployment tooling.",
  },

  skills: [
    { name: "JavaScript ES6+", icon: js, group: "Language" },
    { name: "TypeScript", icon: typescript, group: "Language" },
    { name: "React.js", icon: react, group: "Frontend" },
    { name: "Next.js", icon: next, group: "Frontend" },
    { name: "Redux Toolkit", icon: redux, group: "State" },
    { name: "Zustand", group: "State" },
    { name: "HTML5", icon: html, group: "Interface" },
    { name: "CSS3 / SASS", icon: css, group: "Interface" },
    { name: "Tailwind CSS", icon: antd, group: "Styling" },
    { name: "Ant Design", icon: tailwind, group: "Styling" },
    { name: "Jest", icon: jest, group: "Testing" },
    { name: "React Testing Library", icon: rtl, group: "Testing" },
    { name: "Node.js", icon: node, group: "Backend" },
    { name: "Express.js", icon: express, group: "Backend" },
    { name: "REST APIs", group: "Backend" },
    { name: "PostgreSQL", icon: psql, group: "Database" },
    { name: "MongoDB", icon: mongo, group: "Database" },
    { name: "MySQL", icon: msql, group: "Database" },
    { name: "GitHub", icon: github, group: "Workflow" },
    { name: "GitLab", icon: glab, group: "Workflow" },
    { name: "Docker", icon: docker, group: "DevOps" },
    { name: "Jira", icon: jira, group: "Workflow" },
    { name: "Postman", icon: postman, group: "Tooling" },
    { name: "npm", icon: npm, group: "Tooling" },
    { name: "copilot", icon: copilot, group: "AI tools" },
    { name: "Chatgpt", icon: chatgpt, group: "AI tools" },
    { name: "Gemini", icon: gemini, group: "AI tools" },
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
    subheadline:
      "Share a role, project, or collaboration idea and I will get back to you.",
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
      {
        label: "guessme.smruti@gmail.com",
        href: "mailto:guessme.smruti@gmail.com",
      },
      {
        label: "+91 9776444262",
        href: "tel:9776444262",
      },
      {
        label: "Puri, Odisha",
        href: "https://goo.gl/maps/TDDTGna6qYtZFVT17",
        external: true,
      },
    ],
    noteTitle: "Best fit",
    note:
      "Full-stack engineering roles, product development, scalable web applications, backend systems, frontend architecture, and performance-focused teams.",
  },
};