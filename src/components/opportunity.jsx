import React from "react";
import { Link } from "react-router-dom";
import opport1 from "../Assets/home-img/opport1.webp";
import opport2 from "../Assets/home-img/opport2.webp";
import opport3 from "../Assets/home-img/opport3.webp";
import "../styles/opportunity.css";

const Opportunity = () => {
  return (
    
    <section className="opportunity-head">
      <h3>Franchise Opportunities</h3>
      <h1>Franchise With Brave</h1>
      <div className="opportunity-section">
      {/* Text Content */}
      
      <div className="opportunity-text-container">
        {/* <h3>Franchise Opportunities</h3>
        <h1>Franchise With Brave</h1> */}
        <p>
          Our franchise model empowers <br/>passionate educators to start and <br/>grow
          their own successful businesses.
        </p>
        <span><br/>
          At Brave Sparkids Academy, we <br/>believe in the power of hands <br/>on
          learning.</span>
          <br/>
        
        <Link to ="/franchise" className="opportunity-cta-button">
          Know More
        </Link>
      </div>

      {/* Image Content */}
      <div className="opportunity-image-container">
        {/* Top Image with Overlay */}
        <div className="opportunity-top-image">
          <div className="opportunity-info-card">
            <h4>Revolutionize Education</h4>
            <p>
              Educational Programs are carefully crafted to stimulate
              intellectual and creative growth.
            </p>
          </div>
        </div>

        {/* Middle Images */}
        <div className="opportunity-middle-images">
          <img src={opport2} className="no-hover" alt="Middle educational opportunity" loading="lazy" />
          <div className="opportunity-middle2">
            <img src={opport1} alt="Another educational opportunity" loading="lazy" />
        </div></div>

        {/* Bottom Image */}
        <div className="opportunity-bottom-image">
          <img src={opport3} alt="Hands-on learning" loading="lazy" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Opportunity;
