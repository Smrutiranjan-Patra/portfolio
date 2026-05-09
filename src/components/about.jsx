import React from 'react';
import "./css/about.css";
import { portfolio } from "../data/portfolio";

const About = () => {
    const { about } = portfolio;

    return (
        <section id="about" className="section">
            <div className="section-heading">
                <p className="eyebrow">{about.eyebrow}</p>
                <h1 className="page-header">{about.headline}</h1>
                <p className="page-subheader">{about.subheadline}</p>
            </div>
            <div className="about-snapshot">
                <div className="about-story">
                    <span className="about-kicker">{portfolio.role}</span>
                    <p className="description">{about.description}</p>
                </div>
                <div className="metric-grid" aria-label="Career metrics">
                    {about.metrics.map((metric) => (
                        <div className="metric-card" key={metric.label}>
                            <strong>{metric.value}</strong>
                            <span>{metric.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="highlight-grid">
                {about.highlights.map((highlight) => (
                    <article key={highlight.number}>
                        <span>{highlight.number}</span>
                        <h2>{highlight.title}</h2>
                        <p>{highlight.description}</p>
                    </article>
                ))}
            </div>

            <div className="workflow-panel">
                {about.workflow.map((step, index) => (
                    <article key={step.title}>
                        <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
                        <div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export { About }
