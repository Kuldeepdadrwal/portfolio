import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from './components/ScrollProgress';
import Education from './components/Education';
import Achievements from './components/Achievement';
import Test from './components/Test';

export default function App() {
  return (
    <div className="text-white mt-10">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Test />
      <Footer />
    </div>
  );
}


