import React from "react";
import { Link } from "react-router-dom";
import "../styles/spellingbeecourse.css";
import pointIcon from "../Assets/courses-img/checkpoint.webp";
import spellingImage from "../Assets/home-img/courseimg6.webp";

const SpellingBeeCourse = () => {
  return (
    <div className="spelling-section">
      {/* Left Image Section */}
      <div className="spelling-image">
        <img src={spellingImage} alt="Spelling Bee Course" loading="lazy" />
      </div>

      {/* Right Content Section */}
      <div className="spelling-content">
        <h2 className="spelling-heading">Spelling Bee</h2>
        <p className="spelling-description">
          Build strong vocabulary and spelling skills through interactive learning. Our Spelling Bee program helps children master word patterns, improve memory, and boost confidence in written communication.
        </p>
        <ul className="spelling-points">
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Enhances vocabulary and word recognition</span>
          </li>
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Improves spelling accuracy and memory</span>
          </li>
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Boosts confidence in written communication</span>
          </li>
        </ul>
        <Link to="/spellingbee" className="spelling-button">
          Know more &gt;
        </Link>
      </div>
    </div>
  );
};

export default SpellingBeeCourse;

