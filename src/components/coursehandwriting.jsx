import React from "react";
import { Link } from "react-router-dom";
import "../styles/coursehandwriting.css";
import point from "../Assets/courses-img/checkpoint.png";
import handwritingImage from "../Assets/courses-img/coursehandwriting.png";

const AbacusCourse = () => {
  return (
    <div className="handwriting-section">

      {/* Left Content Section */}
      <div className="handwriting-content">
        <h2 className="handwriting-heading">Hand Writing</h2>
        <p className="handwriting-description">
        Handwriting is an essential skill that supports<br/> academic success and personal expression. Our <br/>handwriting program focuses on foundational skills,<br/>writing speed, and style.
        </p>
        <ul className="handwriting-points">
          <li>

            <span>Builds muscle memory for smooth<br/> writing</span>
            <img src={point} alt="point" />
          </li>
          <li>
            
            <span>Enhances legibility and speed</span>
            <img src={point} alt="point" />
          </li>
          <li>
            
            <span>Fosters creativity and confidence</span>
            <img src={point} alt="point" />
          </li>
        </ul>
        <Link to="/handwriting" className="handwriting-button">
          Know more &gt;
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="handwriting-image">
        <img src={handwritingImage} alt="handwriting" />
      </div>
    </div>
  );
};

export default AbacusCourse;