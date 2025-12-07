import React from "react";
import "../styles/home-abt.css";
import { Link } from "react-router-dom";
import Image from "../Assets/home-img/img.png";
import dots from "../Assets/home-img/dots.png";
import card1 from "../Assets/home-img/card1.png";
import card2 from "../Assets/home-img/card2.png";
import card3 from "../Assets/home-img/card3.png";
import bgofimage from "../Assets/home-img/bgofimage.png";


const AboutUs = () => {
  return (
    <section className="about-us-info">
     < div className="about-us-info-text">
         <h2>About us</h2>
         <h3>Cultivating a Culture</h3>
        <p>
        Join us on an extraordinary journey where children explore, discover, and grow, developing the
            essential skills needed to succeed in the 21st Century.
          </p>
         </div>
      <div className="about-us-info-content">
        <div className="about-us-info-section">
          {/* Image container */}
          <div className="info-image-container">
          <img src={bgofimage} alt="bg" className="info-bg-image" />
          <img src={dots} alt="bg" className="info-dots-image" />
            <img src={Image} alt="Children learning" className="info-main-image" />
            <div className="info-cards">
            {/* <div className="info-card-content"> */}
              <div className="info-card">
              <img src={card1} alt="Brain Development Icon" />
                <h3>Whole Brain Development</h3>
                <p>Proven brain development techniques that yield results.courses are designed to sharpen focus, enhance memory, and  boost confidence in childrens.</p>
              </div>
              <div className="info-card">
              <img src={card2} alt="Brain Development Icon" />
                <h3>Trusted Partnerships</h3>
                <p>Personalized teacher training and ongoing support, ensuring our franchise partners and educators excel in delivering quality education.</p>
              </div>
              <div className="info-card">
              <img src={card3} alt="Brain Development Icon" />
                <h3>Flexible Scheduling</h3>
                <p>With flexible class schedules and one-on-one sessions making quality education accessible anytime,  ensuring your child receives top-notch learning.</p>
              </div>
              
            </div>
          </div>

          {/* Content section */}
          <div className="info-content">
            <h2>Prepare your children for a bright tomorrow</h2>
            <h3>At Brave Sparkids Academy, we believe in the power of hands-on learning</h3>
            <p>
            Through Abacus, Vedic Maths, and more, we equip children with skills for a balanced, well-rounded brain development that lasts a lifetime.
            </p>
            <Link to="/about" className="info-know-more">Know More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;