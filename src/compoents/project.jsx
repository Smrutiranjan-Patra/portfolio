import React from "react";
import "./css/project.css";
import HM from "./images/Screenshot (207).png";

const Project = () => {
  return (
    <div className="container" id="project">
      <h1 className="page-headerpro">Projects</h1>
      <h2 className="page-subheader1"> Some of my projects</h2>
      <hr id="projecthr" />
      <div className="project">
        <div className="project-box">
          <div className="img-box">
            <a
              href="https://hmclothing-n5ej6cq09-vipchoudhary13.vercel.app/"
              target="_blank"
            >
              <img src={HM} alt="" />
            </a>
          </div>
          <div className="details">
            <h3 className="project-name">H&M Clothings</h3>
            <p className="project-details">An online shopping website.</p>
            <p className="tech">HTML | CSS | JavaScript | Node js</p>
            <button className="github-btn">
              <a
                href="https://github.com/Smrutiranjan-Patra/H2M-Clone"
                target="_blank"
              >
                Github
              </a>
            </button>
          </div>
        </div>
        <div className="project-box">
          <div className="img-box">
            <a href="https://shopper-stop-clone.herokuapp.com/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/Smrutiranjan-Patra/shopper-stop-clone-public/main/images/home.png"
                alt=""
              />
            </a>
          </div>
          <div className="details">
            <h3 className="project-name">Shopper Stop</h3>
            <p className="project-details">
              Shoppers Stop is an Indian apparel store chain.
            </p>
            <p className="tech">
              HTML | CSS | JavaScript | Node js | Express js | MongoDB
            </p>

            <button className="github-btn">
              <a
                href="https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public"
                target="_blank"
              >
                Github
              </a>
            </button>
          </div>
        </div>
        <div className="project-box">
          <div className="img-box">
            <a href="https://shopper-stop-clone.herokuapp.com/" target="_blank">
              <img
                src="https://camo.githubusercontent.com/fa9d45e9b56a4643453d8b9d0930031de89bdfcfb3b12e29cff5950493ce81d5/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a344a4545544c7651726e3457636833645179646969412e706e673f7261773d74727565"
                alt=""
              />
            </a>
          </div>
          <div className="details">
            <h3 className="project-name">Quora</h3>
            <p className="project-details">
              Quora a platform to ask questions and connect with people who contribute unique insights and quality answers.
            </p>
            <p className="tech">
              React | Redux | | CSS | Chakra UI | Node js | Express js | MongoDB
            </p>

            <button className="github-btn">
              <a
                href="https://github.com/Smrutiranjan-Patra/quora" target="_blank" >
                Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Project };
