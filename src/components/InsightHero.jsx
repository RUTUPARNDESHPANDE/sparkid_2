import React from "react";
import { Link } from "react-router-dom";
import "../styles/InsightHero.css";
import image from "../Assets/insight-img/insighthero.png";

const insighthero = () => {
  return (
    <div className="insighthero-container">
      <div>
      <p className="insighthero-pagename"><a href="/">Home</a> | <span> <Link to="/insight">Insights</Link></span> </p> 
      </div>
      {/* <div className="franchisehero-content"> */}
        
        <div className="insighthero-sub-container">
           <div className="insighthero-content"> 
          <h1 className="insighthero-headline2">Unlock <span>Insights </span> That <br/> Empower Young <span> Minds!</span></h1>
        <p className="insighthero-subheadline">
        Explore a world of knowledge, success stories, and expert resources to guide your child’s educational journey.
        </p>

      </div>
      <div className="insighthero-image">
        <img src={image} alt="insightheroimg" />
      </div>
      </div> 
    </div>
  );
};

export default insighthero;