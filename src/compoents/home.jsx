import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./css/home.css";
import profile from './images/profile.png'

const Home = () => {
    return (
        <section id="home" className="hero section">
            <div id="personal">
                <div id="data">
                    <p className="eyebrow">Full-stack developer</p>
                    <h1 className="name">I build reliable web products from interface to API.</h1>
                    <h2 className="role-line">
                        Focused on <span id="typingtext">
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={52}
                                deleteSpeed={28}
                                delaySpeed={1200}
                                words={["React experiences", "Node.js services", "MongoDB data models", "clean product flows", "production-ready systems"]}
                            />
                        </span>
                    </h2>
                    <p className="descriptions">I am Smrutiranjan Patra, a MERN stack developer who enjoys turning business ideas into fast, maintainable applications with thoughtful UX, dependable APIs, and clear deployment paths.</p>
                    <div className="hero-actions">
                        <a className="primary-action" href="#project">View projects</a>
                        <a className="secondary-action" href="https://drive.google.com/uc?export=download&id=105FYtsMijwfYrgpEOFkVlH7VtmVdLKmt" target="_blank" rel="noreferrer">Download resume</a>
                    </div>
                    <div className="icons" aria-label="Social links">
                        <a href="https://github.com/Smrutiranjan-Patra" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="mailto:guessme.smruti@gmail.com">Email</a>
                    </div>
                </div>
                <div id="picture">
                    <div className="portrait-card">
                        <img src={profile} alt="Smrutiranjan Patra" />
                        <div className="availability">
                            <span></span>
                            Open to full-stack roles
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div><strong>MERN</strong><span>Primary stack</span></div>
                        <div><strong>REST</strong><span>API design</span></div>
                        <div><strong>UI</strong><span>Responsive apps</span></div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export { Home }
