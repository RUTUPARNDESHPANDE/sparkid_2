import React from 'react';
import '../styles/mission.css'; // Updated CSS path
import centralImage from '../Assets/about-img/missionbg.png'; // Main background image
import smallImage from '../Assets/about-img/mission.png'; // Smaller overlapping image
import missionicon from '../Assets/about-img/missionicon.png';
import missionicon2 from '../Assets/about-img/missionicon2.png';
import mission1 from '../Assets/about-img/mission1.png';
import mission2 from '../Assets/about-img/mission2.png';
import mission3 from '../Assets/about-img/mission3.png';
import mission4 from '../Assets/about-img/mission4.png';
import mission5 from '../Assets/about-img/mission5.png';
import mission6 from '../Assets/about-img/mission6.png';

function Mission() {
  return (
    <div className="mission-wrapper">
      {/* Central Background Image */}
      <img src={centralImage} alt="Central Background" className="central-image" loading="lazy" />

      {/* Overlapping Text Section */}
      <div className="content-section">
        <h1>Our Mission</h1>
        <p>
          Our mission is to provide value-based, high-quality <br />
          education and training. We empower young <br />
          learners and aspiring teachers through innovative <br />
          teaching practices and continuous support.
        </p>

        {/* High-quality training section */}
        <div className="sub-section">
          <div className="icon">
            <img src={missionicon} alt="Training Icon" loading="lazy" />
          </div>
          <div className="text">
            <h3>High-quality training</h3>
            <p>
              Empowering young learners and aspiring <br />
              teachers with value-based, high-quality training.
            </p>
          </div>
        </div>

        {/* Beneficial partnerships section */}
        <div className="sub-section">
          <div className="icon">
            <img src={missionicon2} alt="Partnership Icon" loading="lazy" />
          </div>
          <div className="text">
            <h3>Beneficial partnerships</h3>
            <p>
              Offering consistent support and marketing <br />
              assistance to our franchise partners.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section with Surrounding Icons */}
      <div className="image-section">
        <img src={mission1} alt="Mission Icon 1" className="mission-icon icon1" loading="lazy" />
        <img src={mission2} alt="Mission Icon 2" className="mission-icon icon2" loading="lazy" />
        <img src={mission3} alt="Mission Icon 3" className="mission-icon icon3" loading="lazy" />
        <img src={mission4} alt="Mission Icon 4" className="mission-icon icon4" loading="lazy" />
        <img src={mission5} alt="Mission Icon 5" className="mission-icon icon5" loading="lazy" />
        <img src={mission6} alt="Mission Icon 6" className="mission-icon icon6" loading="lazy" />
        <img src={smallImage} alt="Small Overlapping" className="main-image" loading="lazy" />
      </div>
    </div>
  );
}

export default Mission;
