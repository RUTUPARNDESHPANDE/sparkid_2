import React from "react";
import "../styles/franchiseapplication.css";
import arrowImage from "../Assets/franchise-img/franchisearrow.png";

const steps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Submit your interest via our website or contact us directly.",
  },
  {
    number: "02",
    title: "Discussion",
    description: "Our team will connect with you to provide detailed information about the franchise model.",
  },
  {
    number: "03",
    title: "Application",
    description: "Complete the franchise application form and provide the required documents.",
  },
  {
    number: "04",
    title: "Approval",
    description: "Our team reviews and approves your application.",
  },
  {
    number: "05",
    title: "Training & Setup",
    description: "Attend training sessions and set up your center.",
  },
  {
    number: "06",
    title: "Launch Your Center",
    description: "Open your Sparkids Academy and start your journey.",
  },
];

const FranchiseProcess = () => {
  return (
    <div className="franchise-container">
      <h1 className="heading">Franchise Application Process</h1>
      <h3 className="subheading">Your Journey to Entrepreneurship Made Easy</h3>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={step.number}>
            <div className="step-box">
              <div className="step-number-line">
                <span className="step-number">{step.number}</span>
                <div className="thin-line"></div>
              </div>
              <p className="step-content">
                {step.title}: <span>{step.description}</span>
              </p>
            </div>
            {index !== steps.length - 1 && (
              <img
                src={arrowImage}
                alt=""
                className={`arrow-image arrow-${index % 2 === 0 ? "right" : "left"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseProcess;