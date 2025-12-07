import React from 'react';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import Insighthero from '../components/InsightHero';
import Gallery from '../components/InsightGallery';
import Achievement from '../components/InsightAchievement';
import Carousel from '../components/InsightJourney';
import StudentsAchievements from '../components/Insightstudent';
export const Insight = () => {
    return (
      <div>
        <Insighthero />
        <Gallery/>
        <Achievement />
        <Carousel />
        <StudentsAchievements />
      </div>
    );
  };
  
  export default Insight;