import aboutImage from "../compoents/images/side.jpg";
import hAndMPreview from "../compoents/images/Screenshot (207).png";
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
import heroku from "../compoents/images/heroku.png";

export const portfolio = {
  name: "Smrutiranjan Patra",
  shortName: "Smrutiranjan",
  initials: "SP",
  role: "Full-stack developer",
  resumeLabel: "Resume",
  resumeUrl: "https://drive.google.com/uc?export=download&id=105FYtsMijwfYrgpEOFkVlH7VtmVdLKmt",
  footer: "Built by Smrutiranjan Patra",
  themeSwitch: {
    lightLabel: "Light",
    darkLabel: "Dark",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Skills", href: "#Resume" },
    { label: "Contact", href: "#Contact" },
  ],

  hero: {
    eyebrow: "Full-stack developer",
    headline: "I build reliable web products from interface to API.",
    rolePrefix: "Focused on",
    rotatingWords: [
      "React experiences",
      "Node.js services",
      "MongoDB data models",
      "clean product flows",
      "production-ready systems",
    ],
    description:
      "I am Smrutiranjan Patra, a MERN stack developer who enjoys turning business ideas into fast, maintainable applications with thoughtful UX, dependable APIs, and clear deployment paths.",
    actions: [
      { label: "View projects", href: "#project", variant: "primary" },
      { label: "Download resume", href: "resume", variant: "secondary", external: true },
    ],
    socialLinks: [
      { label: "GitHub", href: "https://github.com/Smrutiranjan-Patra" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/" },
      { label: "Email", href: "mailto:guessme.smruti@gmail.com" },
    ],
    availability: "Open to full-stack roles",
    illustrationLabel: "Full-stack developer workspace illustration",
    illustrationTitle: "Developer building a full-stack application",
    stats: [
      { value: "MERN", label: "Primary stack" },
      { value: "REST", label: "API design" },
      { value: "UI", label: "Responsive apps" },
    ],
  },

  about: {
    eyebrow: "About",
    headline: "Developer with a product-first backend mindset.",
    subheadline: "I care about the parts users touch and the systems that keep them working.",
    image: aboutImage,
    imageAlt: "Developer workspace",
    description:
      "I design and build full-stack web applications with React, Node.js, Express, MongoDB, and Redux. My sweet spot is translating a product requirement into a complete flow: a usable interface, predictable state, secure API routes, and data models that are easy to evolve.",
    highlights: [
      {
        number: "01",
        title: "Frontend systems",
        description:
          "Responsive React screens, reusable components, clean state, and interfaces that feel natural to use.",
      },
      {
        number: "02",
        title: "Backend APIs",
        description:
          "REST endpoints, Express services, authentication flows, validation, and database-backed features.",
      },
      {
        number: "03",
        title: "Delivery mindset",
        description:
          "Git-based collaboration, deployment awareness, and practical decisions that keep projects shippable.",
      },
    ],
  },

  projectsSection: {
    eyebrow: "Projects",
    headline: "Selected full-stack builds",
    subheadline: "Case-study style snapshots of products, data flows, and interface work.",
    label: "Featured build",
    liveLabel: "Live site",
    repoLabel: "GitHub",
  },

  projects: [
    {
      name: "H&M Clothings",
      description:
        "A shopping interface focused on category browsing, product discovery, and a familiar retail experience.",
      tech: "HTML, CSS, JavaScript, Node.js",
      image: hAndMPreview,
      imageAlt: "H&M clothing store project preview",
      live: "https://hmclothing-n5ej6cq09-vipchoudhary13.vercel.app/",
      repo: "https://github.com/Smrutiranjan-Patra/H2M-Clone",
    },
    {
      name: "Shopper Stop",
      description:
        "A MERN commerce clone with product pages, backend services, and database-backed shopping flows.",
      tech: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
      image: "https://raw.githubusercontent.com/Smrutiranjan-Patra/shopper-stop-clone-public/main/images/home.png",
      imageAlt: "Shopper Stop project preview",
      live: "https://shopper-stop-clone.herokuapp.com/",
      repo: "https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public",
    },
    {
      name: "Quora",
      description:
        "A question-and-answer platform with React views, Redux state, API integration, and content workflows.",
      tech: "React, Redux, CSS, Chakra UI, Node.js, Express.js, MongoDB",
      image:
        "https://camo.githubusercontent.com/fa9d45e9b56a4643453d8b9d0930031de89bdfcfb3b12e29cff5950493ce81d5/68747470733a2f2f6d69726f2e6d656469756d2f6d61782f3730302f312a344a4545544c7651726e3457636833645179646969412e706e673f7261773d74727565",
      imageAlt: "Quora clone project preview",
      live: "https://quora-roan.vercel.app/",
      repo: "https://github.com/Smrutiranjan-Patra/quora",
    },
  ],

  skillsSection: {
    eyebrow: "Skills",
    headline: "Stack for building and shipping",
    subheadline: "Frontend polish, backend structure, data persistence, and deployment workflow.",
  },

  skills: [
    { name: "HTML5", icon: html, group: "Interface" },
    { name: "CSS3", icon: css, group: "Interface" },
    { name: "JavaScript", icon: js, group: "Language" },
    { name: "React", icon: react, group: "Frontend" },
    { name: "Redux", icon: redux, group: "State" },
    { name: "Node.js", icon: node, group: "Backend" },
    { name: "Express", icon: express, group: "Backend" },
    { name: "MongoDB", icon: mongo, group: "Database" },
    { name: "npm", icon: npm, group: "Tooling" },
    { name: "GitHub", icon: github, group: "Workflow" },
    { name: "Heroku", icon: heroku, group: "Deploy" },
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
      "Full-stack roles, MERN applications, API integrations, and product-facing React work.",
  },
};
