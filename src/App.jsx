import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import CustomCursor from "./components/CustomCursor";
import SectionLoader from "./components/SectionLoader";

// Lazy load sections below the fold
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const GitHubStats = lazy(() => import("./sections/GitHubStats"));
const Blog = lazy(() => import("./sections/Blog"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Projects />
          <Experiences />
          <GitHubStats />
          <Blog />
          <Testimonial />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

