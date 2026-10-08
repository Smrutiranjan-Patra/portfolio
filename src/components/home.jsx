import React, { useEffect, useState } from 'react';
import "./css/home.css";
import { portfolio } from "../data/portfolio";
import { RouteStop } from "./route.jsx";

const Home = ({ onResumeOpen }) => {
    const { hero } = portfolio;
    const [activeFocus, setActiveFocus] = useState(0);
    const focusItems = hero.focusItems || [];
    const currentFocus = focusItems[activeFocus] || {
        label: "",
        availability: hero.availability,
    };

    useEffect(() => {
        if (focusItems.length < 2) {
            return undefined;
        }

        const interval = setInterval(() => {
            setActiveFocus((index) => (index + 1) % focusItems.length);
        }, 2400);

        return () => clearInterval(interval);
    }, [focusItems.length]);

    return (
        <section id="home" className="hero section">
            <div id="personal">
                <div id="data">
                    <RouteStop mile={portfolio.stops.home.mile} label={portfolio.stops.home.label} />
                    <h1 className="name">{hero.headline}</h1>
                    <p className="hero-role">{hero.eyebrow} <span>{hero.location}</span></p>
                    <h2 className="role-line">
                        {hero.rolePrefix} <span id="typingtext">
                            <span className="focus-word" key={currentFocus.label}>{currentFocus.label}</span>
                        </span>
                    </h2>
                    <p className="descriptions">{hero.description}</p>
                    <div className="hero-actions">
                        {hero.actions.map((action) => {
                            if (action.href === "resume") {
                                return (
                                    <button
                                        key={action.label}
                                        type="button"
                                        className={`${action.variant}-action`}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            onResumeOpen();
                                        }}
                                    >
                                        {action.label}
                                    </button>
                                );
                            }

                            const href = action.href;
                            const externalProps = action.external
                                ? { target: "_blank", rel: "noreferrer" }
                                : {};

                            return (
                                <a
                                    className={`${action.variant}-action`}
                                    href={href}
                                    key={action.label}
                                    {...externalProps}
                                >
                                    {action.label}
                                </a>
                            );
                        })}
                    </div>
                    <div className="icons" aria-label="Social links">
                        {hero.socialLinks.map((link) => {
                            const externalProps = link.href.startsWith("http")
                                ? { target: "_blank", rel: "noreferrer" }
                                : {};

                            return <a href={link.href} key={link.label} {...externalProps}>{link.label}</a>;
                        })}
                    </div>
                </div>
                <div id="picture">
                    <div className="route-map" aria-label={hero.illustrationLabel}>
                        <p className="route-map-caption">{hero.routeMap.caption}</p>
                        <ol className="route-map-list">
                            {hero.routeMap.stops.map((stop) => (
                                <li className="route-map-stop" key={`${stop.year}-${stop.label}`}>
                                    <span className="route-map-dot" aria-hidden="true" />
                                    <span className="route-map-year">{stop.year}</span>
                                    <span className="route-map-body">
                                        <strong>{stop.label}</strong>
                                        <span>{stop.note}</span>
                                    </span>
                                </li>
                            ))}
                            <li className="route-map-stop route-map-stop--here">
                                <span className="route-map-dot" aria-hidden="true" />
                                <span className="route-map-year">Now</span>
                                <span className="route-map-body">
                                    <strong key={currentFocus.availability}>{currentFocus.availability}</strong>
                                    <span>{hero.routeMap.hereLabel}</span>
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className="hero-stats">
                        {hero.stats.map((stat) => (
                            <div key={stat.value}><strong>{stat.value}</strong><span>{stat.label}</span></div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    )
}

export { Home }
