import React from "react";
import "./css/project.css";
import HM from "./images/Screenshot (207).png";

const projects = [
  {
    name: "H&M Clothings",
    description: "A shopping interface focused on category browsing, product discovery, and a familiar retail experience.",
    tech: "HTML, CSS, JavaScript, Node.js",
    image: HM,
    imageAlt: "H&M clothing store project preview",
    live: "https://hmclothing-n5ej6cq09-vipchoudhary13.vercel.app/",
    repo: "https://github.com/Smrutiranjan-Patra/H2M-Clone",
  },
  {
    name: "Shopper Stop",
    description: "A MERN commerce clone with product pages, backend services, and database-backed shopping flows.",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
    image: "https://raw.githubusercontent.com/Smrutiranjan-Patra/shopper-stop-clone-public/main/images/home.png",
    imageAlt: "Shopper Stop project preview",
    live: "https://shopper-stop-clone.herokuapp.com/",
    repo: "https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public",
  },
  {
    name: "Quora",
    description: "A question-and-answer platform with React views, Redux state, API integration, and content workflows.",
    tech: "React, Redux, CSS, Chakra UI, Node.js, Express.js, MongoDB",
    image: "https://camo.githubusercontent.com/fa9d45e9b56a4643453d8b9d0930031de89bdfcfb3b12e29cff5950493ce81d5/68747470733a2f2f6d69726f2e6d656469756d2f6d61782f3730302f312a344a4545544c7651726e3457636833645179646969412e706e673f7261773d74727565",
    imageAlt: "Quora clone project preview",
    live: "https://quora-roan.vercel.app/",
    repo: "https://github.com/Smrutiranjan-Patra/quora",
  },
];

const Project = () => {
  return (
    <section className="container section" id="project">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1 className="page-headerpro">Selected full-stack builds</h1>
        <p className="page-subheader1">Case-study style snapshots of products, data flows, and interface work.</p>
      </div>
      <div className="project">
        {projects.map((project) => (
          <article className="project-box" key={project.name}>
            <a className="img-box" href={project.live} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.imageAlt} />
            </a>
            <div className="details">
              <span className="project-label">Featured build</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-details">{project.description}</p>
              <p className="tech">{project.tech}</p>
              <div className="project-actions">
                <a className="live-btn" href={project.live} target="_blank" rel="noreferrer">Live site</a>
                <a className="github-btn" href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Project };
