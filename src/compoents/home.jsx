import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import "./css/home.css";

const Home = () => {
    return (
        <div id="personal">
            <div className="tab-img">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHSwLOCMB956g/profile-displayphoto-shrink_200_200/0/1639149244258?e=1646870400&v=beta&t=7Shlo1wClvPbTdi122nwf5eN7LThqohWzL33561lrxI"
                    alt="" />
            </div>
            <div id="data">
                <div className="icons">
                    <a href="https://twitter.com/Smrutir04608196"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/Smrutiranjan-Patra"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/smrutiranjan-patra-07385b1bb/"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <h1 className="name">Hello I'M, <span id="self">Smrutiranjan</span></h1>
                <h2 className="name"> I'm a {' '}
                    <span id="typingtext">
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={5}
                            delayedSpeed={1000}
                            words={["Developer", "Designer", "Programmer", "Ethusiastic Coder", "Problem Solver"]}
                        />
                    </span>
                </h2>
                <p className="descriptions"> I've spent my time seeking and learning new technologies and forms of digital
                    expression. This has led
                    to me working on some amazing world-class projects, worked at some amazing places, and worked with some
                    great people.
                </p>
            </div >
            <div id="picture">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHSwLOCMB956g/profile-displayphoto-shrink_200_200/0/1639149244258?e=1646870400&v=beta&t=7Shlo1wClvPbTdi122nwf5eN7LThqohWzL33561lrxI"
                    alt="" />
            </div>
        </div >
    )
}

export { Home }

