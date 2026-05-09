import React from "react";
import { portfolio } from "../data/portfolio";
import "./css/experience.css";

const Experience = () => {
    const {
        experienceSection,
        experience,
        achievementsSection,
        achievements,
        educationSection,
        education,
    } = portfolio;

    return (
        <section id="experience" className="experience-section section">
            <div className="section-heading">
                <p className="eyebrow">{experienceSection.eyebrow}</p>
                <h1 className="page-header">{experienceSection.headline}</h1>
                <p className="page-subheader">{experienceSection.subheadline}</p>
            </div>

            <div className="experience-grid">
                {experience.map((item) => (
                    <article className="experience-card" key={`${item.company}-${item.role}`}>
                        <div className="experience-meta">
                            <span>{item.period}</span>
                            <h2>{item.role}</h2>
                            <p>{item.company}</p>
                        </div>
                        <ul>
                            {item.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <div className="impact-layout">
                <div>
                    <p className="eyebrow">{achievementsSection.eyebrow}</p>
                    <h2>{achievementsSection.headline}</h2>
                    <p>{achievementsSection.subheadline}</p>
                </div>
                <div className="impact-list">
                    {achievements.map((achievement) => (
                        <div key={achievement}>{achievement}</div>
                    ))}
                </div>
            </div>

            <div className="education-layout">
                <div>
                    <p className="eyebrow">{educationSection.eyebrow}</p>
                    <h2>{educationSection.headline}</h2>
                    <p>{educationSection.subheadline}</p>
                </div>
                <div className="education-list">
                    {education.map((item) => (
                        <article key={`${item.title}-${item.period}`}>
                            <h3>{item.title}</h3>
                            <p>{item.place}</p>
                            <span>{item.period}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Experience };
