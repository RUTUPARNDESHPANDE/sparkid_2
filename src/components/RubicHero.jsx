import React from "react";
import "../styles/commoncourse.css";
import { Link } from "react-router-dom";
import courserubic from "../Assets/courses-img/rubikcourse.webp";
import courseage from "../Assets/home-img/course-age.webp";
import coursetime from "../Assets/home-img/course-time.webp";
import courselevel from "../Assets/home-img/course-level.webp";

const RubicHero = () => {
  return (
    <div className="maincourse-container">
      <p className="pagename"><a href="/">Home</a> | <Link to="/courses"> Course </Link>|<span><Link to="/rubic"> Rubik</Link></span> </p>
      <div className="maincourse-section">
        {/* Left Content Section */}
        <div className="maincourse-content">
          <h2 className="maincourse-heading">Rubik's Cube</h2>
          
          <ul className="maincourse-points">
            <p className="maincourse-points-wholelist">
              <div className="maincourse-points-list">
                <img src={courselevel} alt="point" />
                <span>Level :</span>  2 Levels 
              </div>
              <br/>
              <div className="maincourse-points-list">
                <img src={courseage} alt="point" />
                <span> Age : </span> 7 years +
              </div>
              <br/>
              <div className="maincourse-points-list">
                <img src={coursetime} alt="point" />
                <span>Duration</span> 4 Months | Weekend Program
              </div>
              <br/><br/>
              <div className="maincourse-subcontent"> 
                <li>Review : ⭐⭐⭐⭐⭐ 4.9</li>
                <li>Held Across <span> 20+</span>Franchises</li> 
                <li> Actively<span> 3000 +</span> students learning</li>
              </div> 
            </p>
          </ul>
          <a href="#know-more" className="maincourse-button">
            Enroll Now
          </a>
        </div>

        {/* Right Image Section */}
        <div className="maincourse-image">
          <img src={courserubic} alt="Rubik's Cube Course" />
        </div>
      </div>
    </div>
  );
};

export default RubicHero;