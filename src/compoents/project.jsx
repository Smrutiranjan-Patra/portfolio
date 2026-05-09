import React from "react";
import "./css/project.css";
import { portfolio } from "../data/portfolio";

const Project = () => {
  const { projects, projectsSection } = portfolio;

  return (
    <section className="container section" id="project">
      <div className="section-heading">
        <p className="eyebrow">{projectsSection.eyebrow}</p>
        <h1 className="page-headerpro">{projectsSection.headline}</h1>
        <p className="page-subheader1">{projectsSection.subheadline}</p>
      </div>
      <div className="project">
        {projects.map((project) => (
          <article className="project-box" key={project.name}>
            <div className="project-preview">
              <a className="img-box" href={project.live} target="_blank" rel="noreferrer">
                <img src={project.image} alt={project.imageAlt} />
              </a>
              <div className="project-quick-facts">
                <span>{project.type}</span>
                <strong>{project.role}</strong>
              </div>
            </div>
            <div className="details">
              <span className="project-label">{projectsSection.label}</span>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-details">{project.outcome || project.description}</p>
              <div className="project-feature-list">
                <span>{projectsSection.detailLabel}</span>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="live-btn" href={project.live} target="_blank" rel="noreferrer">{projectsSection.liveLabel}</a>
                <a className="github-btn" href={project.repo} target="_blank" rel="noreferrer">{projectsSection.repoLabel}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Project };
