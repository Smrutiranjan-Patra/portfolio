import React, { useEffect, useState } from 'react';
import "./css/home.css";
import { portfolio } from "../data/portfolio";

const Home = () => {
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
                    <p className="eyebrow">{hero.eyebrow}</p>
                    <h1 className="name">{hero.headline}</h1>
                    <h2 className="role-line">
                        {hero.rolePrefix} <span id="typingtext">
                            <span className="focus-word" key={currentFocus.label}>{currentFocus.label}</span>
                        </span>
                    </h2>
                    <p className="descriptions">{hero.description}</p>
                    <div className="hero-actions">
                        {hero.actions.map((action) => {
                            const href = action.href === "resume" ? portfolio.resumeUrl : action.href;
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
                    <div className="vector-card" aria-label={hero.illustrationLabel}>
                        <svg className="developer-vector" viewBox="0 0 720 560" role="img" aria-labelledby="developerVectorTitle">
                            <title id="developerVectorTitle">{hero.illustrationTitle}</title>
                            <rect className="vector-bg" x="28" y="28" width="664" height="504" rx="28" />
                            <rect className="terminal-window" x="86" y="92" width="548" height="316" rx="18" />
                            <circle className="window-dot coral" cx="122" cy="128" r="9" />
                            <circle className="window-dot gold" cx="152" cy="128" r="9" />
                            <circle className="window-dot green" cx="182" cy="128" r="9" />
                            <path className="code-line accent-line" d="M126 188h168" />
                            <path className="code-line muted-line" d="M126 230h270" />
                            <path className="code-line muted-line short" d="M126 272h214" />
                            <path className="code-line accent-line" d="M126 314h306" />
                            <path className="bracket" d="M496 194l-54 58 54 58" />
                            <path className="bracket" d="M548 194l54 58-54 58" />
                            <rect className="server-card" x="138" y="438" width="150" height="54" rx="14" />
                            <rect className="server-card" x="318" y="438" width="150" height="54" rx="14" />
                            <rect className="server-card" x="498" y="438" width="84" height="54" rx="14" />
                            <path className="connector" d="M213 438v-34M393 438v-34M540 438v-34" />
                            <circle className="status-light" cx="168" cy="465" r="7" />
                            <circle className="status-light" cx="348" cy="465" r="7" />
                            <circle className="status-light" cx="524" cy="465" r="7" />
                        </svg>
                        <div className="availability">
                            <span></span>
                            <strong key={currentFocus.availability}>{currentFocus.availability}</strong>
                        </div>
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
