import React from 'react';
import '../styles/ContactHero.css';
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contactus">
       <div>
        <p className="contactus-pagename"><a href="/">Home</a> |<span> <Link to="/contact">Contact us</Link></span> </p>
        </div>
      <div className="contactus-content">
        <h1 className="contactus-heading">
          <span className="contactus-highlight">Let’s Connect! </span>We’re Here to Help You Spark <span className="contactus-highlight">Brighter Futures</span>
        </h1>
        <p className="contactus-subheading">Have a Question? Let’s Start the Conversation!</p>
        <p className="contactus-description">
          Whether you're a parent, student, or aspiring franchisee. Reach out today, and let’s make learning
          extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;