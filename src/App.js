import "./App.css";
import React, { useEffect, useState } from "react";

import { Header } from "./components/header.jsx";
import { Home } from "./components/home.jsx";
import { About } from "./components/about.jsx";
import { Experience } from "./components/experience.jsx";
import { Project } from "./components/project.jsx";
import { Resume } from "./components/resume.jsx";
import { ContactUs } from "./components/contact.jsx";
import { RouteRail } from "./components/route.jsx";
import { RoadCanvas } from "./components/roadCanvas.jsx";
import { Mascot } from "./components/mascot.jsx";
import { supports3d } from "./three/capabilities";
import { portfolio } from "./data/portfolio";

function App() {
  const currentYear = new Date().getFullYear();
  const [theme, setTheme] = useState("light");
  // Decided once, on the client, before first paint of the canvas. If this is
  // false nothing 3D is imported at all and the 2D roadtrip stands on its own.
  const [enable3d] = useState(() => supports3d());
  const [showResumePreview, setShowResumePreview] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
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
    document.body.dataset.scene = enable3d ? "3d" : "flat";

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.removeAttribute("data-theme");
    };
  }, [showResumePreview, theme, enable3d]);

  useEffect(() => {
    let previous = window.scrollY;
    let ticking = false;

    const evaluate = () => {
      ticking = false;
      const current = window.scrollY;
      const delta = current - previous;

      // Ignore sub-pixel jitter and rubber-banding at the very top.
      if (Math.abs(delta) < 6) {
        return;
      }

      if (current < 120) {
        setNavHidden(false);
      } else if (delta > 0) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      previous = current;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(evaluate);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main .section"));
    const viewportHeight = window.innerHeight;
    let ticking = false;

    const main = document.querySelector("main");
    const progress = document.querySelector("[data-route-progress]");

    const updateRoute = () => {
      if (!main || !progress) {
        return;
      }

      // Fill up to the middle of the viewport: the marker you are level with
      // reads as "reached".
      const mainTop = main.offsetTop;
      const driven = window.scrollY + window.innerHeight * 0.5 - mainTop;
      const ratio = Math.min(Math.max(driven / main.offsetHeight, 0), 1);
      progress.style.height = `${ratio * 100}%`;
    };

    const updateTransforms = () => {
      updateRoute();
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const start = viewportHeight * 0.7;
        const end = -rect.height * 0.3;
        const ratio = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        // Translate only. Scaling or translateZ grows the section box, which makes
        // tall sections bleed over the next section's heading.
        const elevation = enable3d ? 0 : ratio * -14;
        section.style.transform = `translateY(${elevation}px)`;
        section.style.zIndex = `${1000 + index}`;
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
  }, [enable3d]);

  return <div className="App" data-theme={theme} data-3d={enable3d ? "on" : "off"}>
    {enable3d && <RoadCanvas theme={theme} />}
    <Header
      theme={theme}
      onThemeToggle={toggleTheme}
      onResumeOpen={openResumePreview}
      hidden={navHidden && !showResumePreview}
    />
    <main>
      {!enable3d && <RouteRail />}
      <Home onResumeOpen={openResumePreview} />
      <About />
      <Experience />
      <Project />
      <Resume showPreview={showResumePreview} onPreviewClose={closeResumePreview} />
      <ContactUs />
    </main>
    <Mascot hidden={showResumePreview} />
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
