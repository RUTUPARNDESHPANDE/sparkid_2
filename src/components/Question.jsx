import React, { useState } from "react";
import "../styles/question.css";


import questionbg from "../Assets/about-img/questionbg.webp";
import bgImage from "../Assets/about-img/quesmem.webp";
import bgImage2 from "../Assets/about-img/quesmem2.webp";
import bgImage3 from "../Assets/about-img/quesmem3.webp";
import bgImage4 from "../Assets/about-img/quesmem4.webp";
import bgImage5 from "../Assets/about-img/quesmem5.webp";
import bgImage6 from "../Assets/about-img/quesmem6.webp";

// Using Google Sheets instead of backend API
import { submitPhoneNumber } from "../utils/googleSheets";
import { GOOGLE_SHEETS_CONFIG } from "../config/googleSheets";

const QuestionSection = () => {
  const [contact, setcontact] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleContactClick = async () => {
    const phonex = /^[0-9]+$/;
    if (!phonex.test(contact)) {
      setResponseMessage("Please enter a valid phone number.");
      return;
    }

    try {
      const result = await submitPhoneNumber(
        GOOGLE_SHEETS_CONFIG.questionForm,
        contact
      );

      if (result.success) {
        setResponseMessage("We will contact you shortly!");
        setTimeout(() => setResponseMessage(""), 3000);
        setcontact("");
      } else {
        setResponseMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="abt-question-section">
      <img src={questionbg} alt="Question background" className="abt-question-bg" />

      <div className="abt-content">
        <div className="abt-bg-overlay">
          <h3 className="abt-heading">Do you still have any questions?</h3>
          <p className="abt-subheading">
            Don't hesitate to leave us your phone number. We will <br /> contact you to
            discuss any questions you may have.
          </p>

          <div className="contact-form">
            <input
              type="text"
              className="phone-input"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
            />
            <button className="contact-button" onClick={handleContactClick}>
              Contact
            </button>
          </div>

          {responseMessage && (
            <p className="response-message">{responseMessage}</p>
          )}
        </div>

        {/* Decorative Images */}
        <div className="abt-decorative-images">
          <img src={bgImage} alt="Decorative 1" className="abt-decorative-image" />
          <img src={bgImage2} alt="Decorative 2" className="abt-decorative-image" />
          <img src={bgImage3} alt="Decorative 3" className="abt-decorative-image" />
          <img src={bgImage4} alt="Decorative 4" className="abt-decorative-image" />
          <img src={bgImage5} alt="Decorative 5" className="abt-decorative-image" />
          <img src={bgImage6} alt="Decorative 6" className="abt-decorative-image" />
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
