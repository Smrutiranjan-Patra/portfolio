import React from 'react';
import "./css/about.css";
import sideimg from "./images/side.jpg";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="section-heading">
                <p className="eyebrow">About</p>
                <h1 className="page-header">Developer with a product-first backend mindset.</h1>
                <p className="page-subheader">I care about the parts users touch and the systems that keep them working.</p>
            </div>
            <div className="main">
                <div className="image">
                    <img src={sideimg} alt="Developer workspace" />
                </div>
                <div className="text">
                    <p className="description">I design and build full-stack web applications with React, Node.js, Express, MongoDB, and Redux. My sweet spot is translating a product requirement into a complete flow: a usable interface, predictable state, secure API routes, and data models that are easy to evolve.</p>
                    <div className="highlight-grid">
                        <div>
                            <span>01</span>
                            <h2>Frontend systems</h2>
                            <p>Responsive React screens, reusable components, clean state, and interfaces that feel natural to use.</p>
                        </div>
                        <div>
                            <span>02</span>
                            <h2>Backend APIs</h2>
                            <p>REST endpoints, Express services, authentication flows, validation, and database-backed features.</p>
                        </div>
                        <div>
                            <span>03</span>
                            <h2>Delivery mindset</h2>
                            <p>Git-based collaboration, deployment awareness, and practical decisions that keep projects shippable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { About }
