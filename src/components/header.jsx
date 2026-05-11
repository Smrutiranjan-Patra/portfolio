import React, { useState } from 'react';
import "./css/header.css";
import { portfolio } from "../data/portfolio";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ theme, onThemeToggle }) => {
    const isDark = theme === "dark";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigationId = "primary-navigation";

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="site-header">
            <nav id="navigation" aria-label="Primary navigation">
                <a id="logo" href="#home" aria-label={`${portfolio.name} home`}>
                    <span className="logo-mark">{portfolio.initials}</span>
                    <span className="logo-text">{portfolio.shortName}</span>
                    <span onClick={onThemeToggle}>
                        {isDark
                            ? <GiSunrise className="theme-icon" />
                            : <GiSunset className="theme-icon" />}
                    </span>
                </a>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls={navigationId}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <ul id={navigationId} className={isMenuOpen ? "nav-links is-open" : "nav-links"}>
                    {portfolio.navigation.map((item) => (
                        <li key={item.href}><a href={item.href} onClick={closeMenu}>{item.label}</a></li>
                    ))}
                </ul>

                <div className="btn-div">
                    <a href={portfolio.resumeUrl} id='resume-btn' target="_blank" rel="noreferrer" onClick={closeMenu}>{portfolio.resumeLabel}</a>
                </div>
            </nav>
        </header>
    )
}


export { Header }
