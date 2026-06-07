import React from "react";
import ReactDOM from "react-dom";
import "./css/resume.css";
import { portfolio } from "../data/portfolio";

const Resume = ({ showPreview, onPreviewClose }) => {
    const { skills, skillsSection, resumeUrl } = portfolio;
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

            {showPreview && ReactDOM.createPortal(
                <div className="resume-drawer open">
                    <div className="resume-drawer-backdrop" onClick={onPreviewClose} />
                    <div className="resume-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="resumeDrawerTitle">
                        <div className="resume-drawer-header">
                            <div>
                                <h2 id="resumeDrawerTitle">Resume preview</h2>
                                <p>Review the PDF inline and download a copy if needed.</p>
                            </div>
                            <button type="button" className="resume-drawer-close" onClick={onPreviewClose}>
                                Close
                            </button>
                        </div>
                        <div className="resume-drawer-content">
                            <iframe
                                src={resumeUrl}
                                title="Resume preview"
                                loading="lazy"
                            />
                        </div>
                        <div className="resume-drawer-actions">
                            <a className="download-resume-btn" href={resumeUrl} download="Smrutiranjan_Patra_Resume.pdf">
                                Download resume
                            </a>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            <div className="skill-groups">
                {Object.entries(skillGroups).map(([group, groupSkills]) => (
                    <article className="skill-group" key={group}>
                        <div className="skill-group-heading">
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
