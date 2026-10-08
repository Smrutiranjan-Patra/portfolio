import React from "react";
import { portfolio } from "../data/portfolio";
import { RouteStop } from "./route.jsx";
import "./css/experience.css";

const Experience = () => {
    const {
        stops,
        journeySection,
        journey,
        achievementsSection,
        achievements,
    } = portfolio;

    return (
        <section id="experience" className="experience-section section">
            <div className="section-heading">
                <RouteStop mile={stops.experience.mile} label={stops.experience.label} />
                <h1 className="page-header">{journeySection.headline}</h1>
                <p className="page-subheader">{journeySection.subheadline}</p>
            </div>

            <ol className="journey">
                {journey.map((leg) => (
                    <li className={`journey-leg journey-leg--${leg.kind}`} key={`${leg.title}-${leg.period}`}>
                        <span className="journey-marker" aria-hidden="true">
                            <span className="journey-marker-year">{leg.marker}</span>
                        </span>

                        <article className="journey-card">
                            <header className="journey-head">
                                <span className="journey-period" data-year={leg.marker}>
                                    {leg.period}
                                    {leg.current && <span className="journey-now">Here now</span>}
                                </span>
                                <h2>{leg.title}</h2>
                                <p className="journey-place">{leg.place}</p>
                            </header>

                            <p className="journey-narrative">{leg.narrative}</p>

                            {leg.points.length > 0 && (
                                <ul className="journey-points">
                                    {leg.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    </li>
                ))}
            </ol>

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
        </section>
    );
};

export { Experience };
