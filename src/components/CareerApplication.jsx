import React from "react";
import "../styles/CareerApplication.css"; 
import arrowImage from "../Assets/franchise-img/franchisearrow.png";

const steps = [
  {
    number: "01",
    title: "Explore Opportunities",
    description:
      "Discover roles that align with your skills and passion through our Career's page.",
  },
  {
    number: "02",
    title: "Submit Your Application",
    description:
      "Send us your resume and cover letter, showcasing your unique talents and achievements.",
  },
  {
    number: "03",
    title: "Initial Screening",
    description:
      "Our team carefully evaluates your application to ensure it matches the role requirements.",
  },
  {
    number: "04",
    title: "Personal Interaction",
    description:
      "Meet with our team in an engaging interview to discuss your vision, expertise, and enthusiasm for teaching.",
  },
  {
    number: "05",
    title: "Showcase Your Skills",
    description:
      "Participate in a short demo session or task to highlight your ability to connect with students effectively.",
  },
  {
    number: "06",
    title: "Welcome Onboard!",
    description:
      "Once selected, receive training and join the Sparkids family to inspire young learners and grow with us.",
  },
];

const CareerApplication = () => {
  return (
    <div className="career-container">
      <h1 className="heading">Career Application Process</h1>
      <h3 className="subheading">Your journey to inspire young minds begins here. Join Sparkids Academy and 
        make a difference in <br/>the lives of future leaders</h3>
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

export default CareerApplication;
