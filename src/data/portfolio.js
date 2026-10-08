import {
  jsVisualizerPreview, neoathlonPreview, html, css, js, node, express, npm, mongo, psql, msql, react, redux, github, typescript, tailwind, antd, next, jest, rtl, glab, jira, postman, docker, copilot, chatgpt, gemini
} from "../assets/index.js"
import {
  SiPython, SiFlask, SiSqlalchemy, SiGunicorn, SiCelery, SiRedis, SiJsonwebtokens,
  SiAuth0, SiSwagger, SiPytest, SiVitest, SiJenkins, SiNginx, SiSass, SiShadcnui, SiBootstrap
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";
import { TbApi, TbWebhook, TbPlugConnected, TbArrowsExchange } from "react-icons/tb";

export const portfolio = {
  name: "Smrutiranjan Patra",
  shortName: "Smrutiranjan",
  initials: "SP",
  role: "Full Stack Developer",
  resumeLabel: "Resume",

  // The little road buddy that hops along beside you. One short line per
  // section, in his voice rather than Smrutiranjan's.
  mascot: {
    name: "Pit",
    label: "Pit, your road buddy",
    dismissLabel: "Send Pit home",
    greeting: "Hop in.",
    messages: {
      home: "Buckle up. Five years of road ahead.",
      about: "That is the driver. He will talk about Flask if you let him.",
      experience: "This is the good bit. Watch the signs.",
      project: "Quick detour. He took it because the problem was fun.",
      skills: "Everything he packed, and where he picked it up.",
      contact: "End of the road. Go on, say hello.",
    },
  },

  // Every section is a stop on one continuous road. `mile` is the marker that
  // sits on the rail; `label` is the signpost next to it.
  stops: {
    home: { mile: "00", label: "Start of the route" },
    about: { mile: "01", label: "Who is driving" },
    experience: { mile: "02", label: "The road so far" },
    project: { mile: "03", label: "Detours" },
    skills: { mile: "04", label: "What is in the pack" },
    contact: { mile: "05", label: "Next stop" },
  },

  resumeUrl: "/Smrutiranjan_Patra_Resume.pdf",
  footer: "Built by Smrutiranjan Patra",
  themeSwitch: {
    lightLabel: "Light",
    darkLabel: "Dark",
  },

  navigation: [
    { label: "Start", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#experience" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#Resume" },
    { label: "Contact", href: "#Contact" },
  ],

  hero: {
    eyebrow: "Full Stack Developer",
    location: "Bhubaneswar, India",
    headline:
      "I build scalable web applications end to end, from Python APIs and async pipelines to React interfaces.",
    rolePrefix: "Focused on",
    focusItems: [
      {
        label: "Python and Flask backend services",
        availability: "Open to full-stack and backend-heavy roles",
      },
      {
        label: "REST API design and system integrations",
        availability: "Open to API and integration engineering work",
      },
      {
        label: "asynchronous processing with Celery and Redis",
        availability: "Open to distributed and data-heavy systems",
      },
      {
        label: "React and Next.js application architecture",
        availability: "Open to product engineering roles",
      },
      {
        label: "containerized delivery with Docker, Jenkins, and AWS",
        availability: "Open to teams that own what they ship",
      },
    ],
    description:
      "I am Smrutiranjan Patra, a full-stack developer with 4+ years of experience building scalable web applications with Python (Flask), Node.js, and React/Next.js. I currently build DCKAP Integrator, an iPaaS platform that connects B2B distributors with ERP, e-commerce, and EDI systems — designing REST APIs, async workflows with Celery and Redis, secure JWT and OAuth 2.0 flows, and the relational data models behind them.",
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
    availability: "Open to full-stack engineering roles",
    illustrationLabel: "Map of the route from bootcamp to full-stack developer",
    illustrationTitle: "The route so far",
    routeMap: {
      caption: "The route so far",
      stops: [
        { year: "2021", label: "Masai School", note: "Learned to build" },
        { year: "2022", label: "Influx Worldwide", note: "First production miles" },
        { year: "2022", label: "DCKAP \u2014 Developer I", note: "Took on the backend" },
        { year: "2024", label: "DCKAP \u2014 Developer II", note: "Owning the platform" },
      ],
      hereLabel: "You are here",
    },
    stats: [
      { value: "4+", label: "Years of experience" },
      { value: "20%", label: "Application performance gained" },
      { value: "40%", label: "Onboarding time reduced" },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "Full-stack developer building integration platforms end to end.",
    subheadline:
      "I own features from the database schema and Flask API through the async workers to the React interface on top.",
    description:
      "Most of my work lives inside DCKAP Integrator, an iPaaS platform that moves data between ERPs, e-commerce storefronts, and EDI partners for B2B distributors. That means designing REST APIs with Flask and SQLAlchemy, modelling data in PostgreSQL, running long jobs through Celery and Redis, securing access with JWT and OAuth 2.0, and building the React and Next.js interfaces that sit in front of it all. I ship it with pytest and Jest coverage, Docker containers, and Jenkins pipelines deploying to AWS.",
    metrics: [
      { value: "4+", label: "Years building production systems" },
      { value: "20%", label: "Application performance improvement" },
      { value: "40%", label: "Onboarding time reduction through docs" },
      { value: "3", label: "Engineering roles across product teams" },
    ],
    highlights: [
      {
        number: "01",
        title: "Backend services and APIs",
        description:
          "Design REST APIs with Flask, Flask-RESTful, and SQLAlchemy, with Marshmallow and Pydantic validation, Alembic migrations, and JWT or OAuth 2.0 authentication.",
      },
      {
        number: "02",
        title: "Async and data processing",
        description:
          "Move long-running work off the request path with Celery and Celery Beat on Redis, and keep large datasets responsive with server-side pagination and query optimization.",
      },
      {
        number: "03",
        title: "Frontend architecture",
        description:
          "Build React and Next.js interfaces with reusable component systems, Redux Toolkit or Zustand state, code splitting, lazy loading, and memoization.",
      },
      {
        number: "04",
        title: "Delivery and reliability",
        description:
          "Containerize services with Docker, automate test and deploy through Jenkins to AWS, and back it with pytest, Jest, Vitest, and React Testing Library suites.",
      },
    ],
    workflow: [
      {
        title: "Model the data and the flow",
        description:
          "Start with the schema, the integration contract, and how data actually moves between systems before writing a line of API code.",
      },
      {
        title: "Build the API, then the interface",
        description:
          "Ship versioned REST endpoints with validation and clear error contracts, then build the React layer against them.",
      },
      {
        title: "Push the slow work off the request",
        description:
          "Hand long jobs to Celery workers, cache with Redis, paginate on the server, and optimize queries so the product stays fast under load.",
      },
      {
        title: "Test, containerize, and document",
        description:
          "Cover the behaviour with pytest and Jest, run it through Docker and Jenkins, and leave the API documented for the next developer.",
      },
    ],
  },

  journeySection: {
    eyebrow: "The road so far",
    headline: "From a commerce degree to owning an iPaaS platform end to end",
    subheadline:
      "Five years of road, in the order it actually happened. Every leg below is a real stop, with what I was handed and what I shipped.",
  },

  // Chronological on purpose: the road runs forwards. The resume PDF keeps the
  // conventional reverse-chronological order.
  journey: [
    {
      kind: "origin",
      marker: "2017",
      period: "2017 - 2021",
      title: "Bachelor of Commerce, Accounting",
      place: "Utkal University, Odisha",
      narrative:
        "The road does not start in a computer science department. I spent four years on ledgers and balance sheets, and everything I know about building software I picked up afterwards, at a keyboard.",
      points: [],
    },
    {
      kind: "training",
      marker: "2021",
      period: "2021 - 2022",
      title: "MERN Stack Web Development Training",
      place: "Masai School, India",
      narrative:
        "A full year of nothing but building \u2014 JavaScript, React, Node and Express, every day, until the stack stopped feeling like magic and started feeling like tools I could pick up.",
      points: [],
    },
    {
      kind: "role",
      marker: "2022",
      period: "April 2022 - August 2022",
      title: "Associate Software Developer",
      place: "Influx Worldwide",
      narrative:
        "First professional miles. Four months is a short stretch, but it is where I learned what production actually costs: a bug you ship is a bug somebody else has to live with.",
      points: [
        "Automated dynamic report generation based on user inputs, reducing manual effort and streamlining operational workflows.",
        "Identified and resolved critical production bugs, strengthening platform uptime.",
        "Optimized build configuration with Babel, improving bundle execution speed and maintainability.",
      ],
    },
    {
      kind: "role",
      marker: "2022",
      period: "August 2022 - July 2024",
      title: "Product Developer I",
      place: "DCKAP Technologies \u2014 DCKAP Integrator (iPaaS)",
      narrative:
        "I joined DCKAP to work on Integrator, a platform that moves data between ERPs, e-commerce storefronts and EDI partners for B2B distributors. I arrived writing React. I left this role owning features end to end \u2014 the Flask API, the schema underneath it, the Celery workers beside it, and the interface on top.",
      points: [
        "Built a unified Projects module end to end, covering Flask APIs, the database schema for shared and personal assets with access control, and the React interface on top.",
        "Developed automated credential mapping and bulk import/export of integration configurations, using Celery and Redis to process long-running jobs asynchronously.",
        "Engineered a reusable Snippets UI system and a standardized error-handling contract between the API and frontend layers, eliminating redundant logic across the platform.",
        "Implemented server-side pagination and optimized database queries to keep performance smooth on large datasets, and refactored legacy React class components into hooks.",
        "Established documentation standards for internal APIs and UI libraries, reducing new-hire onboarding time by around 40%.",
        "Introduced automated unit and integration tests with pytest, Jest, Vitest, and React Testing Library, increasing stability and mitigating production defects.",
      ],
    },
    {
      kind: "role",
      marker: "2024",
      period: "July 2024 - Present",
      title: "Product Developer II",
      place: "DCKAP Technologies \u2014 DCKAP Integrator (iPaaS)",
      current: true,
      narrative:
        "The promotion moved the work up a layer: versioning and deprecation across the whole platform, authentication for third-party connectors, and the pipelines that ship all of it. Employee of the Quarter in Q3 2025.",
      points: [
        "Designed and built a system versioning and deprecation management service, reducing technical debt through the controlled phase-out of legacy endpoints and dependencies.",
        "Boosted application performance by around 20% through modular splitting, lazy loading, and memoization on the frontend, alongside database query optimization.",
        "Implemented secure authentication and authorization flows using JWT for user sessions and third-party connector integrations.",
        "Containerized services with Docker and maintained Jenkins CI/CD pipelines for automated test runs and deployment to AWS.",
      ],
    },
    {
      kind: "ahead",
      marker: "Now",
      period: "2025 - 2027 (Expected)",
      title: "The road ahead",
      place: "Master of Computer Applications, AI and Machine Learning \u2014 Amity University (Online)",
      narrative:
        "Studying for an MCA in AI and Machine Learning alongside the day job, and spending spare cycles on LLM APIs, prompt engineering and RAG. That is the next stretch of road.",
      points: [],
    },
  ],

  achievementsSection: {
    eyebrow: "Picked up along the way",
    headline: "What I am taking with me",
    subheadline: "The things that came out of the drive, beyond the shipped features.",
  },

  achievements: [
    "Honored as Employee of the Quarter (Q3 2025) at DCKAP Technologies for consistent delivery and high-impact full-stack contributions.",
    "Promoted from Product Developer I to Product Developer II in July 2024.",
    "Mentored 2 junior developers on full-stack best practices, code reviews, and testing standards.",
    "Established documentation standards for internal APIs and UI libraries, reducing new-hire onboarding time by around 40%.",
  ],

  projectsSection: {
    eyebrow: "Detours",
    headline: "Side roads I took because the problem was interesting",
    subheadline:
      "Builds from outside the day job \u2014 the architecture, trade-offs, and engineering decisions behind each one.",
    label: "Detour",
    liveLabel: "Live site",
    repoLabel: "GitHub",
    detailLabel: "What it covers",
  },

  projects: [
    {
      name: "Neoathlon",
      type: "Endurance Training Platform",
      label: "Side venture",
      // Pre-launch: the site runs a beta waitlist, so nothing here claims
      // users, revenue or a shipped release.
      status: "In development \u00b7 beta waitlist",
      role: "Founding Engineer",
      outcome:
        "Building India's first immersive indoor training platform for cyclists and runners \u2014 virtual routes, structured sessions, and a community to train against, all from a living room.",
      description:
        "Neoathlon turns a room into an endurance arena. It pairs with Bluetooth smart trainers for immersive indoor riding, tracks outdoor rides through the mobile app, and wraps both in structured training plans, challenges and city leaderboards. Built for Indian cyclists and riding culture, on a free tier alongside paid Pro and hardware-rental plans.",
      tech: ["React", "Vite", "Mobile app", "Bluetooth smart trainers", "Subscription billing"],
      features: [
        "Immersive virtual routes for indoor riding",
        "Cycling and running modes",
        "Bluetooth smart-trainer pairing",
        "Outdoor ride tracking through the mobile app",
        "Structured plans with power curve and analytics",
        "Community challenges and city leaderboards",
        "Free, Pro and hardware-rental tiers",
      ],
      image: neoathlonPreview,
      imageAlt: "Neoathlon indoor training platform",
      live: "https://neoathlon.com",
    },
    {
      name: "JS Visualizer",
      type: "Developer Tool / Educational Platform",
      role: "Creator and Developer",
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
    eyebrow: "What is in the pack",
    headline: "Everything I picked up on the way here",
    subheadline:
      "The backend, frontend, database, testing, and deployment tooling I use to build and ship integration-heavy products \u2014 and the stop on the road where each part of it got packed.",
  },

  // Where each group joined the trip. Rendered as a note under the group name.
  skillGroupNotes: {
    "Languages": "Masai School, 2021 onwards",
    "Backend (Python)": "Packed at DCKAP, 2022",
    "Async & Caching": "Packed at DCKAP, 2022",
    "APIs & Integrations": "Packed at DCKAP, 2022",
    "Backend (Node)": "Packed at Masai School, 2021",
    "Frontend": "Packed at Masai School, 2021",
    "Styling & UI": "Picked up along the way",
    "Databases": "Masai School, then DCKAP",
    "Testing": "Packed at DCKAP, 2023",
    "Cloud & DevOps": "Packed at DCKAP, 2024",
    "Tooling": "Picked up along the way",
    "AI tools": "Loading for the road ahead",
  },

  skills: [
    { name: "Python", iconComponent: SiPython, iconColor: "#3776AB", group: "Languages" },
    { name: "JavaScript ES6+", icon: js, group: "Languages" },
    { name: "TypeScript", icon: typescript, group: "Languages" },
    { name: "SQL", iconComponent: FaDatabase, iconColor: "#336791", group: "Languages" },

    { name: "Flask", iconComponent: SiFlask, iconColor: "#17202b", group: "Backend (Python)" },
    { name: "Flask-RESTful", iconComponent: SiFlask, iconColor: "#17202b", group: "Backend (Python)" },
    { name: "SQLAlchemy", iconComponent: SiSqlalchemy, iconColor: "#D71F00", group: "Backend (Python)" },
    { name: "Alembic Migrations", iconComponent: TbArrowsExchange, iconColor: "#D71F00", group: "Backend (Python)" },
    { name: "Marshmallow / Pydantic", iconComponent: SiPython, iconColor: "#E92063", group: "Backend (Python)" },
    { name: "Gunicorn", iconComponent: SiGunicorn, iconColor: "#499848", group: "Backend (Python)" },

    { name: "Celery", iconComponent: SiCelery, iconColor: "#37814A", group: "Async & Caching" },
    { name: "Celery Beat", iconComponent: SiCelery, iconColor: "#37814A", group: "Async & Caching" },
    { name: "Redis", iconComponent: SiRedis, iconColor: "#DC382D", group: "Async & Caching" },

    { name: "REST API Design", iconComponent: TbApi, iconColor: "#17202b", group: "APIs & Integrations" },
    { name: "OpenAPI / Swagger", iconComponent: SiSwagger, iconColor: "#85EA2D", group: "APIs & Integrations" },
    { name: "JWT", iconComponent: SiJsonwebtokens, iconColor: "#17202b", group: "APIs & Integrations" },
    { name: "OAuth 2.0", iconComponent: SiAuth0, iconColor: "#EB5424", group: "APIs & Integrations" },
    { name: "Webhooks", iconComponent: TbWebhook, iconColor: "#C95D35", group: "APIs & Integrations" },
    { name: "ERP, E-commerce & EDI", iconComponent: TbPlugConnected, iconColor: "#327A47", group: "APIs & Integrations" },

    { name: "Node.js", icon: node, group: "Backend (Node)" },
    { name: "Express.js", icon: express, group: "Backend (Node)" },

    { name: "React.js", icon: react, group: "Frontend" },
    { name: "Next.js", icon: next, group: "Frontend" },
    { name: "Redux Toolkit", icon: redux, group: "Frontend" },
    { name: "Zustand", group: "Frontend" },
    { name: "HTML5", icon: html, group: "Frontend" },
    { name: "CSS3", icon: css, group: "Frontend" },

    { name: "SASS", iconComponent: SiSass, iconColor: "#CC6699", group: "Styling & UI" },
    { name: "Tailwind CSS", icon: tailwind, group: "Styling & UI" },
    { name: "shadcn/ui", iconComponent: SiShadcnui, iconColor: "#17202b", group: "Styling & UI" },
    { name: "Ant Design", icon: antd, group: "Styling & UI" },
    { name: "Bootstrap", iconComponent: SiBootstrap, iconColor: "#7952B3", group: "Styling & UI" },

    { name: "PostgreSQL", icon: psql, group: "Databases" },
    { name: "MySQL", icon: msql, group: "Databases" },
    { name: "MongoDB", icon: mongo, group: "Databases" },

    { name: "pytest", iconComponent: SiPytest, iconColor: "#0A9EDC", group: "Testing" },
    { name: "Jest", icon: jest, group: "Testing" },
    { name: "Vitest", iconComponent: SiVitest, iconColor: "#6E9F18", group: "Testing" },
    { name: "React Testing Library", icon: rtl, group: "Testing" },

    { name: "AWS (EC2, S3, RDS, Lambda)", iconComponent: FaAws, iconColor: "#FF9900", group: "Cloud & DevOps" },
    { name: "Docker", icon: docker, group: "Cloud & DevOps" },
    { name: "Jenkins", iconComponent: SiJenkins, iconColor: "#D24939", group: "Cloud & DevOps" },
    { name: "Nginx", iconComponent: SiNginx, iconColor: "#009639", group: "Cloud & DevOps" },
    { name: "GitHub", icon: github, group: "Cloud & DevOps" },
    { name: "GitLab", icon: glab, group: "Cloud & DevOps" },

    { name: "Postman", icon: postman, group: "Tooling" },
    { name: "Jira", icon: jira, group: "Tooling" },
    { name: "npm", icon: npm, group: "Tooling" },

    { name: "copilot", icon: copilot, group: "AI tools" },
    { name: "Chatgpt", icon: chatgpt, group: "AI tools" },
    { name: "Gemini", icon: gemini, group: "AI tools" },
  ],


  contact: {
    eyebrow: "Next stop",
    headline: "Where should the road go next?",
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
        label: "Bhubaneswar, Odisha",
        href: "https://goo.gl/maps/TDDTGna6qYtZFVT17",
        external: true,
      },
    ],
    noteTitle: "Good roads for me",
    note:
      "Full-stack engineering roles built around Python and Flask APIs with React or Next.js on the frontend — integration platforms, async and data-heavy systems, and teams that own their services end to end.",
  },
};
