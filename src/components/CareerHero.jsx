import React from "react";
import { Link } from "react-router-dom";
import "../styles/CareerHero.css"; 
import heroImage from "../Assets/career-img/careerhero.png";
import heroImage1 from "../Assets/career-img/careerhero1.png";
import heroImage2 from "../Assets/career-img/careerhero2.png";
import heroImage3 from "../Assets/career-img/careerhero3.png";
import heroImage4 from "../Assets/career-img/careerhero4.png";

const CareerHero = () => {
  return (
    <div className="careerhero-container">
      <div>
      <p className="careerhero-pagename"><a href="/">Home</a> | <span> <Link to="/careers">Careers</Link></span> </p> 
      </div>
      <div className="careerhero-sub-container">
        <div className="careerhero-content">
          <p className="careerhero-subheadline">Nurturing environment</p>
          <h1 className="careerhero-headline">
            Your Next Career<br />
            <span>Move Starts Here!</span>
          </h1>
          <p className="careerhero-description">
            Join our mission to inspire, educate the next generation. We're
            looking for passionate individuals to become part of our growing
            team.
          </p>
          <a href="#contact-us" className="careerhero-button">
            Contact us
          </a>
        </div>

        {/* Image */}
        <div className="careerhero-image">
  <div className="careerhero-central-image">
    <img src={heroImage} alt="Central Hero" />
  </div>
  <div className="careerhero-circle careerhero-circle-1">
    <img src={heroImage1} alt="Circle Hero 1" />
  </div>
  <div className="careerhero-circle careerhero-circle-2">
    <img src={heroImage2} alt="Circle Hero 2" />
  </div>
  <div className="careerhero-circle careerhero-circle-3">
    <img src={heroImage3} alt="Circle Hero 3" />
  </div>
  <div className="careerhero-circle careerhero-circle-4">
    <img src={heroImage4} alt="Circle Hero 4" />
  </div>
</div>


      </div>
    </div>
  );
};

export default CareerHero;