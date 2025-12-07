import React, { useState } from 'react';
import '../styles/sight.css';
import { useNavigate } from "react-router-dom";
import sight1 from '../Assets/home-img/image1.webp';
import sight2 from '../Assets/home-img/image2.webp';
import sight3 from '../Assets/home-img/image3.webp';
import sight4 from '../Assets/home-img/image4.webp';
import sight5 from '../Assets/home-img/image5.webp';
import sight6 from '../Assets/home-img/image6.webp';
import sight7 from '../Assets/home-img/image7.webp';
import sight8 from '../Assets/home-img/image8.webp';
import sight9 from '../Assets/home-img/image9.webp';
import sight10 from '../Assets/home-img/image10.webp';

const Sights = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('/insight'); // Navigate to insight page
  };

  return (
    <div className="insights-section">
      {/* Left Content Section */}
      <div className="insights-content">
        <h3 className="insights-heading">Insights</h3>
        <h1 className="insights-title">Why <br />Brave Sparkids Academy?</h1>
        <p className="insights-description">
          At Brave Sparkkids Academy, we believe<br /> every child deserves the opportunity to<br /> shine.
        </p>
        <ul className="insights-list">
          <li>Engaging and innovative learning methods.</li>
          <li>Certified trainers with years of experience.</li>
          <li>Supportive and nurturing environment.</li>
        </ul>
        <button className="insights-button" onClick={() => navigate('/insight')}>
          Explore Gallery
        </button>
      </div>

      {/* Right Images Section */}
      <div className="images-grid">
        {[sight1, sight2, sight3, sight4, sight5, sight6, sight7, sight8, sight9, sight10].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Sights;
