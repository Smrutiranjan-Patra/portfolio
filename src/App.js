import "./App.css";
import React from "react";


import { Animation } from "./compoents/animation";
import { Header } from "./compoents/header";
import { Home } from "./compoents/home";
import { About } from "./compoents/about.jsx";
import { Project } from "./compoents/project";
import { Resume } from "./compoents/resume.jsx";
import { ContactUs } from "./compoents/contact";

function App() {
  return <div className="App">
    <Animation />
    <br id="bar1" />
    <Header />
    <br id="barhead" />
    <Home />
    <br id="bar2" />
    <About />
    <br id="bar3" />
    <Project />
    <br id="bar4" />
    <Resume />
    <br id="bar5" />
    <ContactUs />
  </div>
}



export default App;
