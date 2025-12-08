import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/newcardtest(1).css";
import courseAge from "../Assets/home-img/course-age.webp";
import courseLevel from "../Assets/home-img/course-level.webp";
import courseTime from "../Assets/home-img/course-time.webp";
import courseLearnMore from "../Assets/home-img/course-learnmore.webp";
import vedicMathsImage from "../Assets/home-img/courseimg2.webp";
import handwritingImage from "../Assets/home-img/courseimg4.webp";
import rubiksCubeImage from "../Assets/home-img/courseimg3.webp";
import readingImage from "../Assets/home-img/courseimg5.webp";
import spellingBeeImage from "../Assets/home-img/courseimg6.webp";
import abacusImage from "../Assets/home-img/courseimg1.webp";

const BoxLayoutCard1 = () => {
  const cardContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: abacusImage,
      title: "Abacus",
      rating: "4.9",
      description: "Improve calculation speed and mental math skills",
      age: "4+",
      levels: "8 Levels",
      duration: "12 Months",
      path: "/abacus",
    },
    {
      image: vedicMathsImage,
      title: "Vedic Maths",
      rating: "4.9",
      description: "Learn faster and efficient ways of solving complex problems",
      age: "12+",
      levels: "2 Levels",
      duration: "6 Months",
      path: "/vedic",
    },
    {
      image: rubiksCubeImage,
      title: "Rubik's Cube",
      rating: "4.9",
      description: "Enhance problem-solving and critical thinking",
      age: "7+",
      levels: "2 Levels",
      duration: "6 Months",
      path: "/rubic",
    },
    {
      image: handwritingImage,
      title: "Handwriting",
      rating: "4.9",
      description: "Master beautiful handwriting techniques",
      age: "4+",
      levels: "3 Levels",
      duration: "9 Months",
      path: "/handwriting",
    },
    {
      image: readingImage,
      title: "Reading",
      rating: "4.9",
      description: "Strengthen language and reading comprehension skills",
      age: "3+",
      levels: "2 Levels",
      duration: "6 Months",
      path: "/reading",
    },
    {
      image: spellingBeeImage,
      title: "Spelling Bee",
      rating: "4.9",
      description: "Strengthen language and reading comprehension skills",
      age: "3+",
      levels: "2 Levels",
      duration: "6 Months",
      path: "/spellingbee",
    },
  ];

  const scroll = (direction) => {
    const container = cardContainerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild.offsetWidth + 55;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    const newScrollLeft = container.scrollLeft + scrollAmount;

    // Calculate new index based on scroll position
    const newIndex = Math.round(newScrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!container) return;
      const cardWidth = container.firstElementChild?.offsetWidth + 55;
      if (cardWidth) {
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setCurrentIndex(Math.max(0, Math.min(newIndex, cards.length - 1)));
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [cards.length]);

  return (
    <div className="card-wrapper">
      <div className="home-card-info-text">
        <h2>Our Courses</h2>
        <h3>Whole-Brain Development</h3>
        <p>
          At Brave Sparkids Academy, we believe in nurturing the full potential
          of <br />
          each child through holistic approach to education.
        </p>
      </div>
      <div className="Card cube-container" ref={cardContainerRef}>
        {cards.map((card, index) => {
          return (
            <div
              className="product-box1 cube-card"
              key={index}
            >
              <img src={card.image} alt={card.title} className="product-image" />
              <div className="description-box1">
                <h3>
                  {card.title} <span>{card.rating}</span>
                </h3>
                <p>{card.description}</p>
                <div className="course-info">
                  <span className="info-item2">
                    <img src={courseAge} alt="Age" className="icon" /> Age {card.age}
                  </span>
                  <span className="info-item2">
                    <img src={courseLevel} alt="Levels" className="icon" /> {card.levels}
                  </span>
                  <span className="info-item2">
                    <img src={courseTime} alt="Time" className="icon" /> {card.duration}
                  </span>
                  <span className="info-item1">
                    <Link to={card.path} className="learn-more-link">
                      <img className="learn-more" src={courseLearnMore} alt="Learn More" />
                      <h2>Learn More</h2>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="navigation-buttons">
        <button className="prev" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <button className="next" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div >
  );
};

export default BoxLayoutCard1;
