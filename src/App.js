import "./App.css";
import React, { useState } from "react";

import { Header } from "./components/header.jsx";
import { Home } from "./components/home.jsx";
import { About } from "./components/about.jsx";
import { Experience } from "./components/experience.jsx";
import { Project } from "./components/project.jsx";
import { Resume } from "./components/resume.jsx";
import { ContactUs } from "./components/contact.jsx";
import { portfolio } from "./data/portfolio";

function App() {

  const currentYear = new Date().getFullYear();

  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  return <div className="App" data-theme={theme}>
    <Header theme={theme} onThemeToggle={toggleTheme} />
    <main>
      <Home />
      <About />
      <Experience />
      <Project />
      <Resume />
      <ContactUs />
    </main>
    <footer className="site-footer">
      <div>
        {portfolio.footer}
      </div>
      <div>
        {`Copyright © ${currentYear} Smrutiranjan Patra`}
      </div>
    </footer>
  </div>
}



export default App;
