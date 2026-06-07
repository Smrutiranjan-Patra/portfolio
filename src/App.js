import "./App.css";
import React, { useEffect, useState } from "react";

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
  const [showResumePreview, setShowResumePreview] = useState(false);
  const nextTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(nextTheme);
  };

  const openResumePreview = () => {
    setShowResumePreview(true);
  };

  const closeResumePreview = () => {
    setShowResumePreview(false);
  };

  useEffect(() => {
    document.body.style.overflow = showResumePreview ? "hidden" : "";
    document.body.style.touchAction = showResumePreview ? "none" : "";
    document.body.dataset.theme = theme;

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.removeAttribute("data-theme");
    };
  }, [showResumePreview, theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main .section"));
    const viewportHeight = window.innerHeight;
    let ticking = false;

    const updateTransforms = () => {
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const start = viewportHeight * 0.7;
        const end = -rect.height * 0.3;
        const ratio = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        const depth = ratio * 36;
        const elevation = ratio * -22;
        const scale = 1 + ratio * 0.02;
        section.style.transform = `translateZ(${depth}px) translateY(${elevation}px) scale(${scale})`;
        section.style.zIndex = `${1000 + Math.round(ratio * 100) + index}`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    updateTransforms();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateTransforms);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTransforms);
    };
  }, []);

  return <div className="App" data-theme={theme}>
    <Header theme={theme} onThemeToggle={toggleTheme} onResumeOpen={openResumePreview} />
    <main>
      <Home onResumeOpen={openResumePreview} />
      <About />
      <Experience />
      <Project />
      <Resume showPreview={showResumePreview} onPreviewClose={closeResumePreview} />
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
