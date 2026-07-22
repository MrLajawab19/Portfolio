import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/ThemeProvider";
import BackgroundEffects from "@/components/BackgroundEffects";
import MatrixRain from "@/components/MatrixRain";
import CursorGlow from "@/components/CursorGlow";
import BootSequence from "@/components/BootSequence";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import useLenisScroll from "@/hooks/useLenisScroll";

function Portfolio() {
  useLenisScroll();

  return (
    <div className="relative min-h-screen bg-emergent-bg text-emergent-text overflow-hidden">
      {/* Background effects */}
      {/* <BackgroundEffects /> */}
      <MatrixRain />
      <CursorGlow />
      
      <BootSequence />

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <EditorialMarquee />
          <About />
          <Projects />
          <TechStack />
          <Stats />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
