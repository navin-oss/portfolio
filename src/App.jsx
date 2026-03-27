import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import GitHubStats from "./sections/GitHubStats";
import Blog from "./sections/Blog";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <GitHubStats />
        <Blog />
        <Testimonial />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
