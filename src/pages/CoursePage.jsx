import React from 'react';
//import Header from '../components/Header';
import Courseabacus from '../components/abacuscourse';
import RubikCourse from '../components/rubikcourse';
import ReadingCourse from '../components/readingcourse';
import QuestionSection from '../components/Question';
//import Footer from '../components/Footer';
import Coursehandwriting from '../components/coursehandwriting';
import CourseHero from '../components/courseHero';
import CourseVedic from '../components/courseVedic';
import '../App.css'

const CoursePage = () => {
  return (
    <div>
      <CourseHero />
      <Courseabacus />
      <CourseVedic />
      <RubikCourse />
      <Coursehandwriting />
      <ReadingCourse />
      <QuestionSection />
    </div>
  );
};

export default CoursePage;
