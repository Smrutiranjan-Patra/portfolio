import React from 'react';
import "./css/header.css";
import { useState } from "react";

<script src="https://kit.fontawesome.com/880dea3907.js" crossorigin="anonymous"></script>



const Header = () => {

    const [visible, setVisible] = useState(false);

    const [width, SetWidth] = useState(window.innerWidth);

    const toggle = () => {
        setVisible(!visible);
    }

    return (
        <header>
            <div id="navigation">
                <div id="logo">
                    <p>
                        <span className="code">&#x0003C;</span>
                        <span className="first">S</span>
                        <span className="last">mrutiranjan</span>
                        <span className="code">&#x0002F;&#x0003E;</span>
                    </p>
                </div>
                <div id="resume-btn1">
                    <a href="https://drive.google.com/file/d/12DQWhxr2c37QKJOyq8Xs8Kq5dbMdV_wU/view" target="_blank">Resume</a>
                </div>
                <ul>
                    <li><a href="#bar1">Home</a></li>
                    <li><a href="#bar2">About</a></li>
                    <li><a href="#bar3">Projects</a></li>
                    <li><a href="#bar4">Skills</a></li>
                    <li><a href="#bar5">Contact</a></li>
                    <li><a href="https://drive.google.com/file/d/12DQWhxr2c37QKJOyq8Xs8Kq5dbMdV_wU/view" target="_blank">Resume</a></li>
                </ul>

            </div>
        </header>
    )
}


export { Header }