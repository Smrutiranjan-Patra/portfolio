import React from 'react';
import "./css/social.css";
import { portfolio } from "../data/portfolio";


export const Social = () => {
    return (
        <div className="sideicons">
            {portfolio.hero.socialLinks.map((link) => (
                <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} key={link.label}>{link.label}</a>
            ))}
        </div>
    )
}
