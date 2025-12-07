import React from "react";
import Slider from "react-slick";
import courseimg1 from "../Assets/home-img/courseimg1.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";
import courserate from "../Assets/home-img/course-rate.png";
import courseLearnMore from "../Assets/home-img/course-learnmore.png";
import learnmorebulb from "../Assets/home-img/learnmorebulb.png";
import CourseCard from "./CourseCard"; // Your CourseCard component

const CourseList = () => {
  const courseData = [
    {
      title: "Abacus",
      description: (<>Improve calculation speed and <br /> mental math skills.</>),
      age: "4+",
      duration: "12 months",
      levels: "8",
      rating: "4.9",
      image: courseimg1,
    },
    {
      title: "Vedic Maths",
      description: (<>Learn faster and efficient ways <br /> of solving complex problems.</>),
      age: "12+",
      duration: "6 months",
      levels: "2",
      rating: "4.9",
      image: courseimg1,
    },
    {
      title: "Rubik's Cube",
      description: (<>Enhance problem-solving and <br /> critical thinking skills.</>),
      age: "7+",
      duration: "4 months",
      levels: "2",
      rating: "4.9",
      image: courseimg1,
    },
    {
      title: "Handwriting Improvement",
      description: (<>Improve handwriting skills and <br /> build confidence.</>),
      age: "6+",
      duration: "3 months",
      levels: "1",
      rating: "4.8",
      image: courseimg1,
    },
    {
      title: "Speed Reading",
      description: (<>Enhance reading speed and <br /> comprehension.</>),
      age: "10+",
      duration: "5 months",
      levels: "1",
      rating: "4.7",
      image: courseimg1,
    },
    {
      title: "Creative Writing",
      description: (<>Develop storytelling and <br /> writing skills.</>),
      age: "8+",
      duration: "6 months",
      levels: "1",
      rating: "4.9",
      image: courseimg1,
    },
  ];

  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per click
    arrows: true, // Show next/prev arrows
  };

  const containerStyle = {
    padding: "40px",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Courses</h2>
      <Slider {...sliderSettings}>
        {courseData.map((course, index) => (
          <div key={index}>
            <CourseCard {...course} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseList;
