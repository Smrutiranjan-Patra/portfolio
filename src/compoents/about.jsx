import React from 'react';
import "./css/about.css";
import sideimg from "./images/side.jpg";

const About = () => {
    return (
        <div id="about">
            <h1 className="page-header">About</h1>
            <h6 className="page-subheader">Why Choose Me?</h6>
            <hr id="abouthr" />
            <div className="main">
                <div className="image">
                    <img src={sideimg} alt="" />
                </div>
                <div className="text">
                    <p className="description">Full stack web developer with background knowledge of MERN stacks with redux,
                        along with a knack of
                        building, testing and deploying applications with utmost efficiency. Willing to be an asset for an
                        organization.</p>
                    <h2>Here are a Few Highlights: </h2>
                    <ul>
                        <li>Interactive Front End as per the design</li>
                        <li>Full Stack web development</li>
                        <li>Building REST API</li>
                        <li>Managing database</li>
                        <li>Frontend Designing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { About }