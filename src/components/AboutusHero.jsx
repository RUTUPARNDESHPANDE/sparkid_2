import React from "react";
import { Link } from "react-router-dom";
import "../styles/aboutushero.css"; 
import image from "../Assets/about-img/aboutushero.png"; 

const AboutHero = () => {
  return (
    <div className="about-us-container">
      {/* <div className="about-us-content"> */}
        <div>
        <p className="about-us-pagename"><a href="/">Home</a> |<span> <Link to="/aboutus">About us</Link></span> </p>
        </div>
        <div className="aboutus-sub-container">
        <div className="about-us-content">
        <h1 className="headline">
          Inspiring Young Minds for a <br/><span>Brighter Tomorrow</span>
        </h1>
        <p className="subheadline">
          Empowering the Next Generation with Knowledge, Skills, and Confidence
        </p>
        <p className="description">
          Unlock your child’s potential with programs designed to sharpen skills,
          foster creativity, and nurture lifelong success.
        </p>
      </div>
      <div className="about-us-image">
        <img src={image} alt="About Us" />
      </div>
      </div>

    </div>
  );
};

export default AboutHero;