import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./css/home.css";
import profile from './images/profile.png'

const Home = () => {
    return (
        <div id="personal">
            <div className="tab-img">
                <img src={profile} alt="" />
            </div>
            <div id="data">
                <div className="icons">
                    <a href="https://twitter.com/Smrutir04608196"><i className="fab fa-twitter" id="twitter"></i></a>
                    <a href="https://github.com/Smrutiranjan-Patra"><i className="fab fa-github" id="github"></i></a>
                    <a href="https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/">
                        <i className="fab fa-linkedin-in" id="linkedin"></i></a>
                </div>
                <h1 className="name">Hello I'M, Smrutiranjan</h1>
                <h2 className="name"> I'm a <span id="typingtext">
                    <Typewriter
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delayedSpeed={1000}
                        words={["Developer", "Designer", "Programmer", "Ethusiastic Coder", "Problem Solver"]}
                    />
                </span>
                </h2>
                <p className="descriptions"> I've spent my time seeking and learning new technologies and forms of digital expression.
                    This has led me to work on some amazing world-class projects, worked at some amazing places, and I have worked with some
                    great people.
                </p>
            </div >
            <div id="picture">
                <img src={profile} alt="" />
            </div>
        </div >
    )

}


export { Home }

