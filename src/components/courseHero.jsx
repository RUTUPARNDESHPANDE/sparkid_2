import React from "react";
import { Link } from "react-router-dom";
import "../styles/courseHero.css"; 
import image from "../Assets/courses-img/coursehero.png"; 

const coursehero = () => {
  return (
    <div className="coursehero-container">
      <div> 
      <p className="coursehero-pagename"><a href="/">Home</a> | <span> <Link to="/courses">Courses</Link></span> </p> 
      </div>
      <div className="coursehero-sub-container">
      <div className="coursehero-content">
        
        <h1 className="coursehero-headline1">
          Empowering</h1>
          <h1 className="coursehero-headline2"> <br/><span> Tomorrow's <br/> Leaders,</span>Today!
        </h1>
        <p className="coursehero-subheadline">
          Transformative courses that go beyond  traditional learning.
        </p>
        <p className="coursehero-description">
          Our programs cater to young minds from all walks of life.
        </p>
      </div>
      <div className="coursehero-image">
        <img src={image} alt="About Us" />
      </div>
    </div>
    </div>
  );
};

export default coursehero;