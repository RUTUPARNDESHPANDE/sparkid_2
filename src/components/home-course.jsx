import React, { useState } from "react";
import "../styles/home-course.css";

import courseimg1 from "../Assets/home-img/courseimg1.webp";
import courseimg2 from "../Assets/home-img/courseimg2.webp";
import courseimg3 from "../Assets/home-img/courseimg3.webp";
import courseage from "../Assets/home-img/course-age.webp";
import coursetime from "../Assets/home-img/course-time.webp";
import courselevel from "../Assets/home-img/course-level.webp";
import courserate from "../Assets/home-img/course-rate.webp";
import courseLearnMore from "../Assets/home-img/course-learnmore.webp";
import learnmorebulb from "../Assets/home-img/learnmorebulb.webp";
import { Link, useNavigate } from "react-router-dom";

const CourseCard = ({
  title,
  description,
  age,
  duration,
  levels,
  rating,
  image,
  courseId,
}) => {
  return (
    <div className="home-course-card">
      <img src={image} alt="Course" className="home-course-image" loading="lazy" />
      <div className="home-course-content">
        <div className="home-course-title-row">
          <span className="home-course-title">{title}</span>
          <div className="home-course-rating">
            <img src={courserate} alt="Rating" className="home-course-icon" loading="lazy" />
            {rating}
          </div>
        </div>
        <p className="home-course-description">{description}</p>
        <div className="home-course-info-container">
          <div className="home-course-column">
            <div className="home-course-info-row">
              <img src={courseage} alt="Age" className="home-course-icon" loading="lazy" />
              Age {age}
            </div>
            <div className="home-course-info-row">
              <img
                src={coursetime}
                alt="Duration"
                className="home-course-icon"
                loading="lazy"
              />
              {duration}
            </div>
          </div>
          <div className="home-course-column">
            <div className="home-course-info-row">
              <img
                src={courselevel}
                alt="Levels"
                className="home-course-icon"
                loading="lazy"
              />
              {levels} Levels
            </div>
          </div>
        </div>
      </div>
      <img
        src={courseLearnMore}
        alt="Learn More"
        className="home-course-learn-more"
        loading="lazy"
      />
      {/* <Link to={`/${courseId}`} className="home-learn-more-text">
        Learn more{" "}
        <img
          src={learnmorebulb}
          alt="Learn more bulb"
          className="home-learn-more-icon"
        />
      </Link> */}
    </div>
  );
};

const CourseList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const courseData = [
    {
      title: "Abacus",
      description: "Improve calculation speed and mental math skills.",
      age: "4+",
      duration: "12 months",
      levels: "8",
      rating: "4.9",
      image: courseimg1,
      courseId: "abacus",
    },
    {
      title: "Vedic Maths",
      description:
        "Learn faster and efficient ways of solving complex problems.",
      age: "12+",
      duration: "6 months",
      levels: "2",
      rating: "4.9",
      image: courseimg2,
      courseId: "vedic",
    },
    {
      title: "Rubik's Cube",
      description: "Enhance problem-solving and critical thinking skills.",
      age: "7+",
      duration: "4 months",
      levels: "2",
      rating: "4.9",
      image: courseimg3,
      courseId: "rubic",
    },
    {
      title: "Handwriting",
      description: "Boost strategic thinking and mental agility.",
      age: "10+",
      duration: "6 months",
      levels: "3",
      rating: "4.8",
      image: courseimg1,
      courseId: "handwriting",
    },
    {
      title: "Reading",
      description: "Learn the basics of programming with Python.",
      age: "12+",
      duration: "3 months",
      levels: "5",
      rating: "4.7",
      image: courseimg2,
      courseId: "reading",
    },
    {
      title: "Drawing",
      description: "Discover the world of robotics and automation.",
      age: "15+",
      duration: "8 months",
      levels: "4",
      rating: "4.9",
      image: courseimg3,
      courseId: "drawing",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < courseData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="home-card-info">
      <div className="home-card-info-text">
        <h2>Our Courses</h2>
        <h3>Whole-Brain Development</h3>
        <p>
          At Brave Sparkids Academy, we believe in nurturing the full potential
          of <br />
          each child through holistic approach to education.
        </p>
      </div>
      <div className="home-course-list">
        <h2
          className="home-course-list-heading"
          onClick={() => navigate("/courses")}
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
        </h2>

        <div className="home-course-card-slider-container">
          <div className="home-course-slider">
            {courseData
              .slice(currentIndex, currentIndex + 3)
              .map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
          </div>
          <div className="home-course-slider-buttons">
            <button
              className="home-course-slider-button-left"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <svg
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9023 1.44043L1.8125 12.5302L12.9023 23.62"
                  stroke="var(--bg-color)"
                  strokeWidth="2.21796"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="home-course-slider-button-right"
              onClick={nextSlide}
              disabled={currentIndex >= courseData.length - 3}
            >
              <svg
                width="15"
                height="25"
                viewBox="0 0 15 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.8125 1.44043L12.9023 12.5302L1.8125 23.62"
                  stroke="var(--bg-color)"
                  strokeWidth="2.21796"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
