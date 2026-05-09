import React from 'react';
import "./css/header.css";
import { portfolio } from "../data/portfolio";

const Header = ({ theme, onThemeToggle }) => {
    const isDark = theme === "dark";

    return (
        <header className="site-header">
            <nav id="navigation" aria-label="Primary navigation">
                <a id="logo" href="#home" aria-label={`${portfolio.name} home`}>
                    <span className="logo-mark">{portfolio.initials}</span>
                    <span className="logo-text">{portfolio.shortName}</span>
                </a>
                <ul>
                    {portfolio.navigation.map((item) => (
                        <li key={item.href}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        type="button"
                        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                        aria-pressed={!isDark}
                        onClick={onThemeToggle}
                    >
                        <span className="toggle-track" aria-hidden="true">
                            <span className="toggle-thumb"></span>
                        </span>
                        <span>{isDark ? portfolio.themeSwitch.lightLabel : portfolio.themeSwitch.darkLabel}</span>
                    </button>
                </div>
                <div id="resume-btn1">
                    <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer">{portfolio.resumeLabel}</a>
                </div>
            </nav>
        </header>
    )
}


export { Header }
