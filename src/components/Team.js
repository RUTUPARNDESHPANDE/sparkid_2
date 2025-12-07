import React from "react";
import "../styles/team.css";
import team1 from "../Assets/about-img/team1.webp";
import team2 from "../Assets/about-img/team2.webp";
import team3 from "../Assets/about-img/team3.webp";
import team4 from "../Assets/about-img/team4.webp";
import facebook from "../Assets/about-img/facebook.webp";
import twitter from "../Assets/about-img/twitter.webp";
import instagram from "../Assets/about-img/instagram.webp";
import linkedin from "../Assets/about-img/linkedIN.webp";

const teamMembers = [
  {
    name: "Brian Clark",
    position: "CEO & Founder",
    image: team1,
    socialLinks: [
      { platform: "facebook", icon: facebook, url: "#" },
      { platform: "twitter", icon: twitter, url: "#" },
      { platform: "instagram", icon: instagram, url: "#" },
      { platform: "linkedin", icon: linkedin, url: "#" },
    ],
  },
  {
    name: "Stephanie Powell",
    position: "VP of Finance",
    image: team2,
    socialLinks: [
      { platform: "facebook", icon: facebook, url: "#" },
      { platform: "twitter", icon: twitter, url: "#" },
      { platform: "instagram", icon: instagram, url: "#" },
      { platform: "linkedin", icon: linkedin, url: "#" },
    ],
  },
  {
    name: "Emily Miller",
    position: "VP of HR",
    image: team3,
    socialLinks: [
      { platform: "facebook", icon: facebook, url: "#" },
      { platform: "twitter", icon: twitter, url: "#" },
      { platform: "instagram", icon: instagram, url: "#" },
      { platform: "linkedin", icon: linkedin, url: "#" },
    ],
  },
  {
    name: "Stephanie Powell",
    position: "VP of Finance",
    image: team4,
    socialLinks: [
      { platform: "facebook", icon: facebook, url: "#" },
      { platform: "twitter", icon: twitter, url: "#" },
      { platform: "instagram", icon: instagram, url: "#" },
      { platform: "linkedin", icon: linkedin, url: "#" },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-section">
    <h2 className="team-title">Meet our Team</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          {/* Left Side: Image */}
          <div className="team-card-image">
            <img src={member.image} alt={member.name} className="team-image" />
          </div>
          {/* Right Side: Details */}
          <div className="team-card-details">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
            <div className="team-social-icons">
              {member.socialLinks.map((link, idx) => (
                <a href={link.url} key={idx} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.icon}
                    alt={link.platform}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
export default Team;
