import React from 'react';
import "./css/header.css";
import { portfolio } from "../data/portfolio";
import { GiSunrise, GiSunset } from "react-icons/gi";

const Header = ({ theme, onThemeToggle }) => {
    const isDark = theme === "dark";

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

                <ul>
                    {portfolio.navigation.map((item) => (
                        <li key={item.href}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>

                <div className="btn-div">
                    <a href={portfolio.resumeUrl} id='resume-btn' target="_blank" rel="noreferrer">{portfolio.resumeLabel}</a>
                </div>
            </nav>
        </header>
    )
}


export { Header }
