import React, { useState } from 'react';
import '../styles/InsightGallery.css';

// Importing images
import sight1 from '../Assets/home-img/image1.webp';
import sight2 from '../Assets/home-img/image2.webp';
import sight3 from '../Assets/home-img/image3.webp';
import sight4 from '../Assets/home-img/image4.webp';
import sight5 from '../Assets/home-img/image5.webp';
import sight6 from '../Assets/home-img/image6.webp';
import sight7 from '../Assets/home-img/image7.webp';
import sight9 from '../Assets/home-img/image9.webp';

const Gallery = () => {
  // Upper and Lower Images
  const allUpperImages = [sight7, sight1, sight7, sight2, sight5, sight3, sight7];
  const allLowerImages = [sight7, sight6, sight9, sight4, sight9];

  const [upperImages, setUpperImages] = useState(allUpperImages);
  const [lowerImages, setLowerImages] = useState(allLowerImages);

  // State to track active button
  const [activeButton, setActiveButton] = useState('all');

  // Define filter categories
  const filters = {
    campus: {
      upper: [sight7, sight1, sight2, sight5],
      lower: [sight6, sight9],
    },
    instructors: {
      upper: [sight3, sight7, sight1],
      lower: [sight9, sight4],
    },
    classrooms: {
      upper: [sight1, sight5, sight7],
      lower: [sight6, sight4],
    },
    newsMedia: {
      upper: [sight2, sight3, sight5],
      lower: [sight7, sight9],
    },
  };

  const handleButtonClick = (category) => {
    setActiveButton(category); // Set the active button
    if (category === 'all') {
      setUpperImages(allUpperImages);
      setLowerImages(allLowerImages);
    } else {
      setUpperImages(filters[category]?.upper || []);
      setLowerImages(filters[category]?.lower || []);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="subheading">Our Gallery</h2>
        <h1 className="heading">Celebrating Our Star Performers</h1>
      </div>

      {/* Buttons */}
      <div className="gallery-buttons">
        <button
          className={activeButton === 'all' ? 'active' : ''}
          onClick={() => handleButtonClick('all')}
        >
          All Medias (8)
        </button>
        <button
          className={activeButton === 'campus' ? 'active' : ''}
          onClick={() => handleButtonClick('campus')}
        >
          Campus
        </button>
        <button
          className={activeButton === 'instructors' ? 'active' : ''}
          onClick={() => handleButtonClick('instructors')}
        >
          Instructors
        </button>
        <button
          className={activeButton === 'classrooms' ? 'active' : ''}
          onClick={() => handleButtonClick('classrooms')}
        >
          Classrooms
        </button>
        <button
          className={activeButton === 'newsMedia' ? 'active' : ''}
          onClick={() => handleButtonClick('newsMedia')}
        >
          News Media
        </button>
      </div>

      {/* Upper Grid */}
      <div className="flex-row upper-grid">
        {upperImages.map((src, index) => (
          <div
            key={index}
            className={`gallery-item ${index % 2 === 0 ? 'offset-up' : 'offset-down'}`}
          >
            <img src={src} alt={`Gallery item ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Lower Grid */}
      <div className="flex-row lower-grid">
        {lowerImages.map((src, index) => (
          <div
            key={index}
            className={`gallery-item ${index % 2 === 0 ? 'offset-up' : 'offset-down'}`}
          >
            <img src={src} alt={`Gallery item ${index + 8}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
