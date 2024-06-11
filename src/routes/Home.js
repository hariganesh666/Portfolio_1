import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/about";
import Projects from "../components/project/Projects";
import Resume from "../components/resume/Resume";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
