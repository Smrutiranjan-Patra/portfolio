import React from 'react';
import "./css/project.css";
import HM from "./images/Screenshot (207).png";


const Project = () => {
    return (
        <div className="container" id="project">
            <h1 className="page-header">Projects</h1>
            <hr />
            <h className="page-subheader1"> Some of my projects</h>
            <div className="project">
                <div className="project-box">
                    <div className="img-box">
                        <a href="https://hmclothing-n5ej6cq09-vipchoudhary13.vercel.app/">
                            <img src={HM} alt="" />
                        </a>
                    </div>
                    <div className="details">
                        <h3 className="project-name">H&M Clothings</h3>
                        <p className="project-details">An online shopping website.</p>
                        <p className="tech">HTML | CSS | JavaScript | Node js</p>
                        <button className="github-btn"><a href="https://github.com/Smrutiranjan-Patra/H2M-Clone"
                            target="_blank">Github</a></button>
                    </div>
                </div>
                <div className="project-box">
                    <div className="img-box">
                        <a href="https://shopper-stop-clone.herokuapp.com/"
                            target="_blank">
                            <img src="https://raw.githubusercontent.com/Smrutiranjan-Patra/shopper-stop-clone-public/main/images/home.png"
                                alt="" />
                        </a>
                    </div>
                    <div className="details">
                        <h3 className="project-name">ShopperStop</h3>
                        <p className="project-details">Shoppers Stop is an Indian apparel store chain.</p>
                        <p className="tech">HTML | CSS | JavaScript | Node js | Express js | MongoDB</p>
                        <button className="github-btn"><a href="https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public"
                            target="_blank">Github</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Project }