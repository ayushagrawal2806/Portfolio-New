import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleReveal);
    // Initial check
    handleReveal();
    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
