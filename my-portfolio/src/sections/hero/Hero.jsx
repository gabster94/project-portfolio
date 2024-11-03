import { About } from "./about/About";
import { HeroImage } from "./heroImages/HeroImages";

import './Hero.css'

export const Hero = () => {
    return (
      <header className="hero-container">
        <div className="hero-text">
          <h3>Hi there, I'm</h3>
          <h1>Gabriella Iofe</h1>
          <h3>Creative Frontend Developer with a Background in Architecture & Teaching</h3>
        </div>
        <HeroImage />
        <About />
      </header>
    );
  };