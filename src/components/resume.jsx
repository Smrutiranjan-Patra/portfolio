import React from "react";
import "./css/resume.css";
import { portfolio } from "../data/portfolio";

const Resume = () => {
    const { skills, skillsSection } = portfolio;
    const skillGroups = skills.reduce((groups, skill) => {
        if (!groups[skill.group]) {
            groups[skill.group] = [];
        }

        groups[skill.group].push(skill);
        return groups;
    }, {});

    return (
        <section className="resume section" id="Resume">
            <div className="section-heading">
                <p className="eyebrow">{skillsSection.eyebrow}</p>
                <h1 className="page-header">{skillsSection.headline}</h1>
                <p className="page-subheader3">{skillsSection.subheadline}</p>
            </div>

            <div className="skill-groups">
                {Object.entries(skillGroups).map(([group, groupSkills]) => (
                    <article className="skill-group" key={group}>
                        <div className="skill-group-heading">
                            <span>{String(groupSkills.length).padStart(2, "0")}</span>
                            <h2>{group}</h2>
                        </div>
                        <div className="bdetails">
                            {groupSkills.map((skill) => (
                                <div className="skill-card" key={skill.name}>
                                    <div className="skill-icon" aria-hidden="true">
                                        {skill.icon ? (
                                            <img src={skill.icon} alt="" />
                                        ) : (
                                            <span className="skill-initial">{skill.name.slice(0, 2)}</span>
                                        )}
                                    </div>
                                    <strong>{skill.name}</strong>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export { Resume }
