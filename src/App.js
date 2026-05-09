import "./App.css";
import React, { useState } from "react";

import { Header } from "./compoents/header";
import { Home } from "./compoents/home";
import { About } from "./compoents/about.jsx";
import { Project } from "./compoents/project";
import { Resume } from "./compoents/resume.jsx";
import { ContactUs } from "./compoents/contact";
import { portfolio } from "./data/portfolio";

function App() {
  const [theme, setTheme] = useState("dark");
  const nextTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  return <div className="App" data-theme={theme}>
    <Header theme={theme} onThemeToggle={toggleTheme} />
    <main>
      <Home />
      <About />
      <Project />
      <Resume />
      <ContactUs />
    </main>
    <footer className="site-footer">{portfolio.footer}</footer>
  </div>
}



export default App;
