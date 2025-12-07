import React, { useState, useEffect } from "react";
import "../styles/ContactBranches.css";
import media1 from "../Assets/contact-img/media1.webp";
import media2 from "../Assets/contact-img/media2.webp";
import media3 from "../Assets/contact-img/media3.webp";

const BranchCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const branches = [
    {
      title: "Sparkids Abacus Learning Point, Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.839444,75.711194&output=embed",
      description: "Description",
    },
    {
      title: "Chinmay Lok Sparkids Abacus Learning Point, Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.839444,75.711194&output=embed",
      description: "Description",
    },
    {
      title: "Samruddhi Sparkids Abacus Learning Point Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.817917,75.740889&output=embed",
      description: "Description",
    },
    {
      title: "Chinmay Lok Sparkids Abacus Learning Point, Vijayapur (2nd Branch)",
      mapSrc: "https://www.google.com/maps?q=16.823944,75.727167&output=embed",
      description: "Description",
    },
    {
      title: "Haripriya Sparkids Abacus Learning Point Vijayapur",
      mapSrc: "https://www.google.com/maps?q=16.826583,75.728722&output=embed",
      description: "Description",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 431) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < branches.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="branch-carousel">
      <h2 className="branches-heading">All available branches</h2>
      <div className="branch-slider-container">
        <div className="branch-slider">
          {branches
            .slice(currentIndex, currentIndex + slidesToShow)
            .map((branch, index) => (
              <div key={currentIndex + index} className="branch-card">
                <h3>{branch.title}</h3>
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`${branch.title} Map`}
                ></iframe>
                <p>{branch.description}</p>
              </div>
            ))}
        </div>
        <div className="branch-slider-buttons">
          <button
            className="branch-slider-button-left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9023 1.44043L1.8125 12.5302L12.9023 23.62"
                stroke="var(--bg-color)"
                strokeWidth="2.21796"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="branch-slider-button-right"
            onClick={nextSlide}
            disabled={currentIndex >= branches.length - slidesToShow}
          >
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8125 1.44043L12.9023 12.5302L1.8125 23.62"
                stroke="var(--bg-color)"
                strokeWidth="2.21796"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="contact-social-section">
        <h2 className="contact-social-section-heading">
          Follow Us for Updates and Inspiring Stories!
        </h2>
        <div className="contact-social-icons">
          <a href="#facebook" className="social-link">
            <div className="icon-container">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
          </a>
          <a href="#linkedin" className="social-link">
            <div className="icon-container">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="#instagram" className="social-link">
            <div className="icon-container">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="media-section">
        <h2 className="media-section-heading ">Watch our social media posts</h2>
        <p className="media-section-redirect">
          <a href="#instagram">redirect Instagram &gt;</a>
        </p>
        <div className="media-gallery">
        <img src={media1} alt="post1" />
        <img src={media2} alt="post2" />
        <img src={media3} alt="post3" />
        <img src={media2} alt="post4" />
                 </div>
        <p className="contact-footer-text">
          Every great mind was once a curious child. Let’s spark that curiosity together!
        </p>
      </div>
    </div>
  );
};

export default BranchCarousel;