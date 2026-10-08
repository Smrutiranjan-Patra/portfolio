import React from "react";
import "./css/project.css";
import { portfolio } from "../data/portfolio";
import { RouteStop } from "./route.jsx";

const Project = () => {
  const { projects, projectsSection } = portfolio;

  return (
    <section className="container section" id="project">
      <div className="section-heading">
        <RouteStop mile={portfolio.stops.project.mile} label={portfolio.stops.project.label} />
        <h1 className="page-headerpro">{projectsSection.headline}</h1>
        <p className="page-subheader1">{projectsSection.subheadline}</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <a
              className="project-media"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={project.image} alt="" loading="lazy" />
              <span className="project-chips">
                <span className="project-chip project-chip--label">
                  {project.label || projectsSection.label}
                </span>
                {project.status && (
                  <span className="project-chip project-chip--status">{project.status}</span>
                )}
              </span>
            </a>

            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-meta">
                <span>{project.role}</span>
                <span>{project.type}</span>
              </p>
              <p className="project-details">{project.outcome || project.description}</p>

              <div className="project-feature-list">
                <span className="project-feature-title">{projectsSection.detailLabel}</span>
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
                <a className="live-btn" href={project.live} target="_blank" rel="noreferrer">
                  {project.liveLabel || projectsSection.liveLabel}
                  <span className="sr-only"> for {project.name}</span>
                </a>
                {project.repo && (
                  <a className="github-btn" href={project.repo} target="_blank" rel="noreferrer">
                    {projectsSection.repoLabel}
                    <span className="sr-only"> for {project.name}</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Project };
