import React from "react";
import { Link } from "react-router-dom";
import "../styles/readingcourse.css";
import pointIcon from "../Assets/courses-img/checkpoint.png";
import readingImage from "../Assets/courses-img/readingcourse.png";

const ReadingCourse = () => {
  return (
    <div className="reading-section">
      {/* Left Content Section */}
      <div className="reading-content">
        <h2 className="reading-heading">Reading</h2>
        <p className="reading-description">
          Our reading program helps young readers build essential skills like phonics, fluency, and comprehension. Each level encourages independent reading and critical thinking.
        </p>
        <ul className="reading-points">
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Expands vocabulary</span>
          </li>
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Strengthens comprehension and critical thinking</span>
          </li>
          <li>
            <img src={pointIcon} alt="point" loading="lazy" />
            <span>Encourages independent reading habits</span>
          </li>
        </ul>
        <Link to="/reading" className="reading-button">
          Know more &gt;
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="reading-image">
        <img src={readingImage} alt="Reading Course" loading="lazy" />
      </div>
    </div>
  );
};

export default ReadingCourse;
