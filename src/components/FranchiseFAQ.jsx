import React, { useState } from "react";
import "../styles/FranchiseFAQ.css"; // Ensure the correct path to the CSS file

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the ideal age to start learning Abacus?",
      answer:
        "The Abacus program is designed for children as young as 4 years old (LKG) and goes up to 10th grade. The 'Little Star Abacus' program is perfect for younger kids (LKG to 2nd grade), while older children (3rd to 10th grade) can enroll in the 'Brain Charger' and advanced levels based on their eligibility.",
    },
    {
      question: "How does the Abacus program benefit children in academics?",
      answer:
        "The Abacus program improves concentration, visualization, and arithmetic skills, which have a positive impact on overall academic performance.",
    },
    {
      question: "Do students need to purchase an Abacus tool to practice?",
      answer:
        "Yes, students are required to purchase an Abacus tool for effective practice at home and during lessons.",
    },
    {
      question: "How long does it take to complete the Abacus program?",
      answer:
        "The duration of the program depends on the level and progress of the student but typically ranges between 2 to 3 years.",
    },
  ];

  // Toggles the current FAQ index; if it's already open, close it
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      {/* Heading */}
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            {/* Question Section */}
            <div
              onClick={() => handleToggle(index)} // Toggle the answer visibility
              className="faq-question"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span> {/* Icon changes based on open state */}
            </div>

            {/* Answer Section */}
            {/* Render the answer only if the current index is open */}
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;