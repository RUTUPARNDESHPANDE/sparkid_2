import React from "react";
import "../styles/CareerCulture.css";
import checkIcon from "../Assets/courses-img/checkpoint.png";

const CareerCulture = () => {
  return (
    <div className="career-culture">
      <h2 className="career-culture-heading">Career Culture</h2>
      <h3 className="career-culture-subheading">A Place Where Passion Meets Purpose</h3>
      <p className="career-culture-description">
        At Brave Sparkids Academy, we believe in creating a nurturing environment for both our students and our team.
      </p>

      <div className="career-culture-content">
        {/* What Sets Us Apart */}
        <div className="career-culture-column">
          <h4>What Sets Us Apart:</h4>
          <ul>
            <li>
              <img src={checkIcon} alt="check" />
              <span>
                <strong>Collaboration & Creativity:</strong> We encourage innovative ideas and value teamwork.
              </span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>
                <strong>Growth Opportunities:</strong> Regular training sessions and upskilling opportunities to help you advance in your career.
              </span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>
                <strong>Work-Life Balance:</strong> Flexible work hours and a supportive environment to ensure personal and professional harmony.
              </span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>
                <strong>Diverse Team:</strong> Join a team that celebrates diversity and promotes inclusivity.
              </span>
            </li>
          </ul>
        </div>

        {/* Perks & Benefits */}
        <div className="career-culture-column">
          <h4>Perks & Benefits:</h4>
          <ul>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Competitive salary and performance incentives.</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Paid time off and health benefits (specifics based on role and location).</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Recognition programs to celebrate your achievements.</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Opportunities to work with bright young minds and make a difference.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCulture;
