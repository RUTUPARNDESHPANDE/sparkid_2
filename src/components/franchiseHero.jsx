import React from "react";
import { Link } from "react-router-dom";
import "../styles/franchiseHero.css";
import image from "../Assets/franchise-img/franchisehero.png";

const franchisehero = () => {
  return (
    <div className="franchisehero-container">
      <div>
      <p className="franchisehero-pagename"><a href="/">Home</a> | <span> <Link to="/franchise">Franchise</Link></span> </p> 
      </div>
      {/* <div className="franchisehero-content"> */}
        
        <div className="franchisehero-sub-container">
           <div className="franchisehero-content"> 
        <h1 className="franchisehero-headline1">
          Build a Bright future</h1>
          <h1 className="franchisehero-headline2"> <br/><span> Partner with </span><br/>Brave Sparkids<br/>Academy <span>Today!</span>
        </h1>
        <p className="franchisehero-subheadline">
          Be part of a proven, profitable, and impactful franchise model.
        </p>
        <br/>
        <Link to="/contact" className="franchisehero-button">
           Contact Us
        </Link>
      </div>
      <div className="franchisehero-image">
        <img src={image} alt="franchiseimg" />
      </div>
      </div> 
    </div>
  );
};

export default franchisehero;