import React from "react";
import "../styles/commoncourse.css";
import { Link } from "react-router-dom";
import coursehandwriting from "../Assets/courses-img/coursehandwriting.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";

const HandwritingHero = () => {
  return (
    <div className="maincourse-container">
      <div className="maincourse-content">
        <p className="pagename"><a href="/">Home</a> | <Link to="/courses"> Course </Link>|<span><Link to="/handwriting"> Handwriting</Link></span> </p>
        <div className="maincourse-section">
      {/* Left Content Section */}
      <div className="maincourse-content">
        <h2 className="maincourse-heading">Handwriting</h2>
        
        <ul className="maincourse-points">
          <p className="maincourse-points-wholelist">
            <div className="maincourse-points-list">
            <img src={courselevel} alt="point" />
            <span>Level :</span>  3 Levels | 5-Basics
            </div>
          <br/>
          <div className="maincourse-points-list">
            <img src={courseage} alt="point" />
           
            <span> Age : </span> 4 years +
            </div>
          <br/>
          <div className="maincourse-points-list">
            <img src={coursetime} alt="point" />
           <span>Duration</span> 12 Months
           </div>
           <br/><br/><div className="maincourse-subcontent"> 
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
        <img src={coursehandwriting} alt="handwriting Course" />
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default HandwritingHero;