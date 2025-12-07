import React from "react";
import "../styles/aboutusvision.css"; 
import visionbg from "../Assets/about-img/visionbg.png";
import vision1 from "../Assets/about-img/vision1.png";
import vision2 from "../Assets/about-img/vision2.png";
import vision3 from "../Assets/about-img/vision3.png";
const MissionVision = () => {
  return (
    <div className="f-our-vision-container">
      <div className="f-our-vision-image">
        {/* <div className="f-our-vision-image-container"> */}
        <img src={visionbg} alt="Our Vision bg" className="visionbg" />
        <img src={vision1} alt="Our Vision 1" className="vision1" />
        <img src={vision2} alt="Our Vision 2" className="vision2" />
        <img src={vision3} alt="Our Vision 3" className="vision3" />

    {/* </div> */}
      </div>
      <div className="f-our-vision-content">
        <h2 className="f-vision-title">Our Vision</h2>
        <p className="f-vision-description">
          To ignite the potential of students and aspiring educators, especially
          from rural  areas, helping them achieve success on a global scale.
        </p>
        <p className="f-vision-subtext">
          We aim to be a leader in educational and employment training, bringing
          about positive change through quality education.
        </p>
      </div>
    </div>
  );
};

export default MissionVision;