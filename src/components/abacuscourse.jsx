import React from "react";
import { Link } from "react-router-dom";
import "../styles/abacuscourse.css";
import point from "../Assets/courses-img/checkpoint.png";
import abacusImage from "../Assets/courses-img/abacuscourse.png";

const AbacusCourse = () => {
  return (
    <div className="abacus-section">
      {/* Left Content Section */}
      <div className="abacus-content">
        <h2 className="abacus-heading">Abacus</h2>
        <p className="abacus-description">
          Unlock the full potential of your child's <br/>Mathematical abilities with our <br/>comprehensive Abacus Course.
        </p>
        <ul className="abacus-points">
          <li>
            <img src={point} alt="point" />
            <span>Designed to enhance focus</span>
          </li>
          <li>
            <img src={point} alt="point" />
            <span>Faster problem-solving skills and <br/>mental agility</span>
          </li>
          <li>
            <img src={point} alt="point" />
            <span>Visualization & Concentration</span>
          </li>
        </ul>
        <Link to="/abacus" className="abacus-button">
          Know more &gt;
        </Link>
      </div>
      {/* Right Image Section */}
      <div className="abacus-image">
        <img src={abacusImage} alt="Abacus Course" />
      </div>
    </div>
  );
};

export default AbacusCourse;
