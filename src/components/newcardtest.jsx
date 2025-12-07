import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/newcardtest.css";
import { Link } from "react-router-dom";
import courseAge from "../Assets/home-img/course-age.webp";
import courseLevel from "../Assets/home-img/course-level.webp";
import courseTime from "../Assets/home-img/course-time.webp";
import courseLearnMore from "../Assets/home-img/course-learnmore.webp";
import vedicMathsImage from "../Assets/home-img/courseimg2.webp";
import abacusImage from "../Assets/home-img/courseimg1.webp";
import rubiksCubeImage from "../Assets/home-img/courseimg3.webp";
import handwritingImage from "../Assets/home-img/courseimg4.webp";
import readingImage from "../Assets/home-img/courseimg5.webp";
import spellingBeeImage from "../Assets/home-img/courseimg6.webp";

const BoxLayoutCard = ({ image, title, rating, description, age, levels, time,courseId }) => (
  <div className="product-box">
    <img src={image} alt={title} className="product-image" loading="lazy" />
    <div className="description-box">
      <h3>
        {title} <span>{rating}</span>
      </h3>
      <p>{description}</p>
      <div className="course-info">
        <span className="info-item">
          <img src={courseAge} alt="Age" className="icon" loading="lazy" /> {age}
        </span>
        <span className="info-item">
          <img src={courseLevel} alt="Levels" className="icon" loading="lazy" /> {levels}
        </span>
        <span className="info-item">
          <img src={courseTime} alt="Time" className="icon" loading="lazy" /> {time}
        </span>
        <span className="info-item1">
          <img className="learn-more" src={courseLearnMore} alt="Learn More" loading="lazy" />
          <Link to={`/${courseId}`} className="home-learn-more-text1">Learn more{" "}</Link>

        </span>
      </div>
    </div>
  </div>
);

const CardsContainer = () => {
  const cardsData = [
    {
      image: abacusImage,
      title: "Abacus",
      rating: "4.9",
      description: "Improve calculation speed and mental math skills",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
      courseId: "abacus",
    },
    {
      image: vedicMathsImage,
      title: "Vedic Maths",
      rating: "4.9",
      description: "Learn faster and efficient ways of solving complex problems",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
      courseId: "vedic",
    },
    {
      image: rubiksCubeImage,
      title: "Rubik's Cube",
      rating: "4.9",
      description: "Enhance problem-solving and critical thinking",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
      courseId: "rubic",
    },
    {
      image: handwritingImage,
      title: "Handwriting",
      rating: "4.9",
      description: "Master beautiful handwriting techniques",
      age: "Age 4+",
      levels: "3 Levels",
      time: "9 Months",
      courseId: "handwriting",
    },
    {
      image: readingImage,
      title: "Reading",
      rating: "4.9",
      description: "Strengthen language and reading comprehension skills",
      age: "Age 3+",
      levels: "2 Levels",
      time: "6 Months",
      courseId: "reading",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    
    <div className="cards-slider-container">
      <div className="home-card-info-text">
        <h2>Our Courses</h2>
        <h3>Whole-Brain Development</h3>
        <p>
          At Brave Sparkids Academy, we believe in nurturing the full potential
          of <br />
          each child through holistic approach to education.
        </p>
      </div>
      {/* <h2
          className="home-course-list-heading"
          onClick={() => (window.location.href = "/courses")}
        >
          Explore all
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94869 16.2172L15.3837 2.78222M15.3837 2.78222L13.9695 14.0959M15.3837 2.78222L4.07001 4.19643"
              stroke="var(--primary-orange)"
              strokeWidth="3.14286"
              strokeLinecap="round"
            />
          </svg>
        </h2> */}
      <Carousel responsive={responsive} showDots={true}>
        {cardsData.map((card, index) => (
          <BoxLayoutCard
            key={index}
            image={card.image}
            title={card.title}
            rating={card.rating}
            description={card.description}
            age={card.age}
            levels={card.levels}
            time={card.time}
            courseId={card.courseId}
          />
        ))}
      </Carousel>
    </div>
  
  );
};

export default CardsContainer;
