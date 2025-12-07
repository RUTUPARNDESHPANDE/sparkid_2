import React from "react";
import "../styles/InsightAchievement.css";

const Achievements = () => {
  const data = [
        { title: "50+", description: "Franchises across Karnataka" },
    { title: "9,000+", description: "Students learning and thriving" },
{ title: "36+", description: "Students added every month (average)" },
    { title: "20+", description: "Client IPOs supported" },
    { title: "10+", description: "Years of experience" },
    { title: "3K+", description: "World-class tutors" },
  ];

  return (
    <div className="achievements-container">
      <h2>Our Achievements</h2>
      <p className="key-stats">Key stats</p>
      <div className="achievements-grid top-row">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="achievement-item">
            <h3 achievements-score>{item.title}</h3>
            <p achievements-details>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="achievements-grid bottom-row">
        {data.slice(2).map((item, index) => (
          <div key={index} className="achievement-item">
            <h3 achievements-score>{item.title}</h3>
            <p achievements-details>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
