import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/commoncourse.css"; 
import coursevedic from "../Assets/courses-img/coursevedic.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";

const VedicHero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Throttle resize events
      timeoutId = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 150);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const getImageStyles = () => {
    if (screenWidth >= 768) {
      return { width: "419px", height: "542px" };
    } else if (screenWidth >= 426 && screenWidth < 768) {
      return { width: "313px", height: "387px" };
    } else if (screenWidth >= 375 && screenWidth <= 425) {
      return { width: "303px", height: "355px" };
    } else if (screenWidth >= 321 && screenWidth <= 375) {
      return { width: "293px", height: "345px" };
    } else {
      return { width: "150px", height: "200px" };
    }
  };

  return (
    <div className="maincourse-container">
      <div className="maincourse-content">
        <p className="pagename">
          <a href="/">Home</a> | <Link to="/courses"> Course </Link> | 
          <span><Link to="/vedic"> Vedic Maths</Link></span>
        </p>
        <div className="maincourse-section">
          {/* Left Content Section */}
          <div className="maincourse-content">
            <h2 className="maincourse-heading">Vedic Maths</h2>
            <ul className="maincourse-points">
              <p className="maincourse-points-wholelist">
                <div className="maincourse-points-list">
                  <img src={courselevel} alt="point" loading="lazy" />
                  <span>Level :</span> 2 Levels
                </div>
                <br />
                <div className="maincourse-points-list">
                  <img src={courseage} alt="point" loading="lazy" />
                  <span> Age : </span> 12 years +
                </div>
                <br />
                <div className="maincourse-points-list">
                  <img src={coursetime} alt="point" loading="lazy" />
                  <span>Duration</span> 6 Months
                </div>
                <br /><br />
                <div className="maincourse-subcontent">
                  <li>Review : ⭐⭐⭐⭐⭐ 4.9</li>
                  <li>Held Across <span>20+</span> Franchises</li>
                  <li>Actively <span>3000+</span> students learning</li>
                </div>
              </p>
            </ul>
            <a href="#know-more" className="maincourse-button">
              Enroll Now
            </a>
          </div>

          {/* Right Image Section */}
          <div className="maincourse-image">
            <img
              src={coursevedic}
              alt="vedic Course"
              loading="lazy"
              style={{
                ...getImageStyles(),
                marginTop: "0px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicHero;
