import React from "react";
import { Link } from "react-router-dom";
import "../styles/courseVedic.css";
import point from "../Assets/courses-img/checkpoint.png";
import vedicImage from "../Assets/courses-img/coursevedic.png";

const vedicCourse = () => {
  return (
    <div className="vedic-section">
      {/* Left Content Section */}
      <div className="vedic-content">
        <h2 className="vedic-heading">Vedic Maths</h2>
        <p className="vedic-description">
        Vedic Mathematics, rooted in ancient Indian sutras, offers an efficient approach to complex arithmetic and algebra.
        </p>
        <ul className="vedic-points">
          <li>
            <span>Enhances calculation speed and <br/>accuracy</span>
            <img src={point} alt="point" />
          </li>
          <li>
            <span>Useful for competitive exams</span>
            <img src={point} alt="point" />
          </li>
          <li>
            <span>Solve complex calculations mentally</span>
            <img src={point} alt="point" />
          </li>
        </ul>
        <Link to="/vedic" className="vedic-button">
          Know more &gt;
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="vedic-image">
        <img src={vedicImage} alt="vedic Course" />
      </div>
    </div>
  );
};

export default vedicCourse;