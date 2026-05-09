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
            <div className="main">
                <div className="image">
                    <img src={about.image} alt={about.imageAlt} />
                </div>
                <div className="text">
                    <p className="description">{about.description}</p>
                    <div className="highlight-grid">
                        {about.highlights.map((highlight) => (
                            <div key={highlight.number}>
                                <span>{highlight.number}</span>
                                <h2>{highlight.title}</h2>
                                <p>{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export { About }
