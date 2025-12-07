
import { Link } from "react-router-dom";
import React from 'react';
import brainleft from '../Assets/home-img/brain-img/brainleft.webp';
import brainright from '../Assets/home-img/brain-img/brainright.webp';
import bulb from '../Assets/home-img/brain-img/bulb.webp';
import pencil from '../Assets/home-img/brain-img/pencil.webp';
import puzzle from '../Assets/home-img/brain-img/puzzle.webp';
import puzzle2 from '../Assets/home-img/brain-img/puzzle2.webp';
import symbol from '../Assets/home-img/brain-img/symbol.webp';
import gear from '../Assets/home-img/brain-img/gear.webp';
import '../styles/hero.css';
import watermark from '../Assets/home-img/watermark.webp';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Empower your <br />
          <span>Child's Mind</span>
        </h1>
        <p className="hero-subtitle">With Brave Sparkids Academy</p>
        <p className="hero-description">
          Unlock your child's potential with programs designed <br /> to
          sharpen skills, foster creativity, and <br /> nurture lifelong success.
        </p>

        <div className="hero-buttons">
          <Link to="/courses" className="explore-btn">Explore Courses</Link>
          <Link to="/franchise" className="opportunity-btn glow">Get Franchise</Link>
        </div>
        <div className="hero-stats">
          <div className="stats-text">
            <h1>9000+ Students <br /><span className="highlight"> have started their studies </span> </h1>
          </div>
        </div>
        <div className="opportunity-note">
          <h1>
            More than <span className="note-highlight">50+</span> opportunities <br /> partner with us
          </h1>
        </div>

      </div>
      <div className="hero-image">
        {/* Brain Image and Icons */}
        <div className="brain-layout">
          <img src={gear} alt="gear Icon" className="brain-icon gear" />
          {/* Icons placed around the brain */}
          <img src={puzzle} alt="Puzzle Icon" className="brain-icon puzzle1" />
          <img src={bulb} alt="Bulb Icon" className="brain-icon bulb" />
          <img src={symbol} alt="Pencil Icon" className="brain-icon symbol" />
          <img src={puzzle2} alt="Puzzle Icon 2" className="brain-icon puzzle2" />
          <img src={pencil} alt="Pencil Icon 2" className="brain-icon pencil" />
          <img src={brainleft} alt="Left Brain" className="brain-left" />
          <img src={brainright} alt="Right Brain" className="brain-right" />
        </div>
        {/* Image Section */}
        <div className="image-partner">
          <img src={watermark} alt="Partner" className="partner-image" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
