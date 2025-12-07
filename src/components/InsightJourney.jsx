import React, { useState } from "react";
import "../styles/InsightJourney.css";
import testimonialImage from "../Assets/insight-img/insightjourney.webp";

const cardsData = [
  { id: 1, title: "Ananya", subtitle: "Abacus", description: "Meet Ananya: From Struggling With Numbers to Winning Abacus Competitions." },
  { id: 2, title: "Ramesh", subtitle: "Franchise", description: "How Mr. Ramesh Built a Thriving Education Business with SPARKids." },
  { id: 3, title: "Vujjval", subtitle: "Vedic Maths", description: "Meet Ananya: From Struggling With Numbers to Winning Abacus Competitions." },
  { id: 4, title: "Ananya2", subtitle: "Abacus", description: "Meet Ananya: From Struggling With Numbers to Winning Abacus Competitions." },
  { id: 5, title: "Ramesh3", subtitle: "Franchise", description: "How Mr. Ramesh Built a Thriving Education Business with SPARKids." },
  { id: 6, title: "Vujjval4", subtitle: "Vedic Maths", description: "Meet Ananya: From Struggling With Numbers to Winning Abacus Competitions." },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cardsData.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="insightjourney">
      <div className="insightjourney-header">
        <h2><span className="insightjourney-header-span">Transformative Journeys </span>with Brave <br/>SparkKids Academy</h2>
        <button className="insightjourney-more-articles">More Articles →</button>
      </div>
      <button
          className="insightjourney-arrow-button insightjourney-left-arrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          ◀
        </button>
      <div className="insightjourney-carousel-container">
       
        <div className="insightjourney-carousel">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className="insightjourney-card"
              style={{
                display: index >= currentIndex && index < currentIndex + 3 ? "block" : "none",
              }}
            >
              <img src={testimonialImage} alt="Testimonial" className="insightjourney-image" />
              <div className="insightjourney-card-content">
              <div className="insightjourney-card-header">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
              </div>
              <p>{card.description}</p>
              <div className="insightjourney-read-article">
              <button type="button" className="insightjourney-read-article-link">Read article <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.086 11.1564L12.136 7.20643C11.9538 7.01783 11.853 6.76523 11.8553 6.50303C11.8576 6.24083 11.9628 5.99002 12.1482 5.80461C12.3336 5.6192 12.5844 5.51403 12.8466 5.51176C13.1088 5.50948 13.3614 5.61027 13.55 5.79243L19.207 11.4494C19.3002 11.5421 19.3741 11.6522 19.4246 11.7736C19.4751 11.8949 19.501 12.025 19.501 12.1564C19.501 12.2878 19.4751 12.418 19.4246 12.5393C19.3741 12.6606 19.3002 12.7708 19.207 12.8634L13.55 18.5204C13.4578 18.6159 13.3474 18.6921 13.2254 18.7445C13.1034 18.7969 12.9722 18.8245 12.8394 18.8257C12.7066 18.8268 12.5749 18.8015 12.452 18.7513C12.3291 18.701 12.2175 18.6267 12.1236 18.5328C12.0297 18.4389 11.9555 18.3273 11.9052 18.2044C11.8549 18.0815 11.8296 17.9498 11.8307 17.817C11.8319 17.6842 11.8595 17.553 11.9119 17.431C11.9643 17.309 12.0405 17.1987 12.136 17.1064L16.086 13.1564H6.5C6.23478 13.1564 5.98043 13.0511 5.79289 12.8635C5.60536 12.676 5.5 12.4216 5.5 12.1564C5.5 11.8912 5.60536 11.6369 5.79289 11.4493C5.98043 11.2618 6.23478 11.1564 6.5 11.1564H16.086Z" fill="var(--primary-orange)"/>
</svg>
</button>
            </div>
            </div>

            </div>
          ))}
        </div>
       
      </div>
      <button
          className="insightjourney-arrow-button insightjourney-right-arrow"
          onClick={handleNext}
          disabled={currentIndex === cardsData.length - 3}
        >
          ▶
        </button>
        <div className="insightjourney-bg">
        <svg width="1440" height="134" viewBox="0 0 1440 134" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 96.3344V134H1440V0L1386 12.7034L1044 6.14679L722 38.5199L394 27.0459L49 66.7951L0 96.3344Z" fill="var(--primary-grey)"/>
</svg>
</div>

    </section>
  );
};

export default Carousel;