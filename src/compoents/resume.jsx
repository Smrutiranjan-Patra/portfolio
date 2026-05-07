import React from "react";
import "./css/resume.css";
import html from "./images/html-5.png";
import css from "./images/css3.png";
import js from "./images/javascript.png";
import node from "./images/node-js.png";
import express from "./images/express.png";
import npm from "./images/npm.png";
import mongo from "./images/mongodb.png";
import react from "./images/react.png";
import redux from "./images/redux.png";
import github from "./images/github.png";
import heroku from "./images/heroku.png";

const skills = [
    { name: "HTML5", icon: html, group: "Interface" },
    { name: "CSS3", icon: css, group: "Interface" },
    { name: "JavaScript", icon: js, group: "Language" },
    { name: "React", icon: react, group: "Frontend" },
    { name: "Redux", icon: redux, group: "State" },
    { name: "Node.js", icon: node, group: "Backend" },
    { name: "Express", icon: express, group: "Backend" },
    { name: "MongoDB", icon: mongo, group: "Database" },
    { name: "npm", icon: npm, group: "Tooling" },
    { name: "GitHub", icon: github, group: "Workflow" },
    { name: "Heroku", icon: heroku, group: "Deploy" },
];

const Resume = () => {
    return (
        <section className="resume section" id="Resume">
            <div className="section-heading">
                <p className="eyebrow">Skills</p>
                <h1 className="page-header">Stack for building and shipping</h1>
                <p className="page-subheader3">Frontend polish, backend structure, data persistence, and deployment workflow.</p>
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
