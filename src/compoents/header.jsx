import React from 'react';
import "./css/header.css";

const Header = () => {
    return (
        <header className="site-header">
            <nav id="navigation" aria-label="Primary navigation">
                <a id="logo" href="#home" aria-label="Smrutiranjan home">
                    <span className="logo-mark">SP</span>
                    <span className="logo-text">Smrutiranjan</span>
                </a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#Resume">Skills</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
                <div id="resume-btn1">
                    <a href="https://drive.google.com/uc?export=download&id=105FYtsMijwfYrgpEOFkVlH7VtmVdLKmt" target="_blank" rel="noreferrer">Resume</a>
                </div>
            </nav>
        </header>
    )
}


export { Header }
