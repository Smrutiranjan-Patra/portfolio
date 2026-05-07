import "./App.css";
import React from "react";

import { Header } from "./compoents/header";
import { Home } from "./compoents/home";
import { About } from "./compoents/about.jsx";
import { Project } from "./compoents/project";
import { Resume } from "./compoents/resume.jsx";
import { ContactUs } from "./compoents/contact";

function App() {
  return <div className="App">
    <Header />
    <main>
      <Home />
      <About />
      <Project />
      <Resume />
      <ContactUs />
    </main>
    <footer className="site-footer">Built by Smrutiranjan Patra</footer>
  </div>
}



export default App;
