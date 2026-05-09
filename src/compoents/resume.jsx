import React from "react";
import "./css/resume.css";
import { portfolio } from "../data/portfolio";

const Resume = () => {
    const { skills, skillsSection } = portfolio;

    return (
        <section className="resume section" id="Resume">
            <div className="section-heading">
                <p className="eyebrow">{skillsSection.eyebrow}</p>
                <h1 className="page-header">{skillsSection.headline}</h1>
                <p className="page-subheader3">{skillsSection.subheadline}</p>
            </div>

            <div className="bdetails">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <img src={skill.icon} alt={`${skill.name} logo`} />
                        <div>
                            <strong>{skill.name}</strong>
                            <span>{skill.group}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export { Resume }
