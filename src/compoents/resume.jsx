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

const Resume = () => {

    return (<div className="resume" id="Resume">
        <h1 className="page-header">Skills</h1>
        <h6 className="page-subheader3"> Tech Stack I Use</h6>
        <hr />

        <div className="bdetails">
            <ul>
                <li><img src={html} /></li>
                <li><img src={css} /></li>
                <li><img src={js} /></li>
                <li><img src={node} /></li>
                <li><img src={express} /></li>
                <li><img src={mongo} /></li>
            </ul>
            <ul>
                <li><img src={npm} /></li>
                <li><img src={react} /></li>
                <li><img src={redux} /></li>
                <li><img src={github} /></li>
                <li><img src={heroku} /></li>
            </ul>
        </div>
    </div>
    )
}

export { Resume } 