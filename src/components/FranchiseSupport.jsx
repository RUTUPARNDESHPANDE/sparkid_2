import React from "react";
import "../styles/franchisesupport.css"; 
import girlImage from "../Assets/franchise-img/franchisesupport.png";
import point from "../Assets/courses-img/checkpoint.png";
const FranchiseSupport = () => {
  return (
    <section className="support">
     < div className="support-text">
     
         <h2>Guiding You Every Step Of the Way</h2>
         <h3>Support and Training</h3>
        <p>
        At Brave Sparkids Academy, we ensure our franchisees have the tools and knowledge to<br/> succeed.
          </p>
         </div>
      
      <div className="support-sub">
         <div className="support-sub-section">
     {/* Right Image Section */}
     <div className="support-sub-image">
       <img src={girlImage} alt="girl" />
     </div>
   </div>
        
     {/* Left Content Section */}
     <div className="support-sub-content">
       <h2 className="support-sub-heading">What we Offer</h2>
       
       <ul className="support-sub-points">
         <li>
         <img src={point} alt="point" />
          <p> <span>Comprehensive Training :</span>Detailed sessions<br/> on program delivery, student management,<br/> and marketing. </p>
          
         </li>
         <li>
         <img src={point} alt="point" />
          <p><span>Marketing Assistance :</span> Tailored strategies to<br/> promote your center, including social media<br/> and offline campaigns.</p>
           
         </li>
         <li>
         <img src={point} alt="point" />
           <p><span>Curriculum Updates :</span> Regularly updated <br/> teaching materials to keep up with the latest<br/> educational standards.</p>
           
         </li>
         <li>
         <img src={point} alt="point" />
           <p><span>Operational Support :</span> Guidance on managing <br/>daily activities, ensuring seamless operations.</p>
           
         </li>

       </ul>
    
     </div>
</div>
     
    </section>
  );
};

export default FranchiseSupport;
