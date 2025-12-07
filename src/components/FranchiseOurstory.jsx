import React from "react";
import "../styles/franchiseourstory.css";
import story1 from "../Assets/franchise-img/franchisestory1.png"; // Add your icon paths
import story2 from "../Assets/franchise-img/franchisestory2.png";
import story3 from "../Assets/franchise-img/franchisestory3.png";
import story4 from "../Assets/franchise-img/franchisestory4.png";

const timelineData = [
  {
    year: "Diverse Courses",
    content: (
      <p><br/>
       Our programs covers curated<br/> programs. Ensuring diverse<br/>
        learning opportunities for<br/> children of all ages.
      </p>
    ),
    icon: story1,
  },
  {
    year: "Expert Instructors",
    content:  (
      <p><br/>
      Gain access to our pool of<br/> experienced instructors 
      and<br/> detailed resources to<><br /></> ensure the highest quality
       education<br/> delivery.
    </p>
    ),
    icon: story2,
  },
  {
    year: "Continuous Support",
    content: (
      <p><br/>
      From marketing to operations,<br/> we provide ongoing support to<br/>
       help you build a successful <br/>franchise.
      </p>
    ),
    icon: story3,
  },
  {
    year: "Reliable",
    content:( 
      <p><br/>
        Our franchise model is tried <br/>and tested, ensuring consistent <br/>
        results and profitability for all<br/> our partners.
        </p>),
    icon: story4,
  },
];

const Franchiseourstory = () => {
  return (
    <section>   
      <div className="franchise-ourstory">
     <div classname="franchise-ourstory-conatiner"> 
    <div className="franchise-ourstory-text">
      <h2>Our Story</h2>
      <h3>Transformative Learning </h3>
      <p>
      Since 2015 we founded , Brave Sparkids Academy started with a vision to bring quality education.<br/>
       Our programs are designed to unlock the full potential of children by helding time-honored teaching methods.
      </p>
      </div>
            <div className="franchise-timeline">
        {timelineData.map((item) => (
            <div className="franchise-timeline-card" key={item.year}>
              <div className="franchise-timeline-card-icon">
            <img src={item.icon} alt={`Icon for ${item.year}`} className="franchise-timeline-icon" />
            </div>
            <div className="franchise-timeline-card-content">
            <h3>{item.year}</h3>
            <p>{item.content}</p>
            </div>
            </div>
        ))}
        </div>
</div>
</div>
</section>
  );
};

export default Franchiseourstory;
