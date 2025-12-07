import React from 'react';
//import Header from '../components/Header';
import Mission from '../components/mission';
import QuestionSection from '../components/Question';
//import Footer from '../components/Footer';
import OurStory from '../components/Ourstory';
import Team from '../components/Team';
import Culture from '../components/AboutusCulture';
import AboutHero from '../components/AboutusHero';
import MissionVision from '../components/Aboutusvision'; 

export const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <Mission />
      {/* <Team/> */}
      <Culture/>
      <QuestionSection />
    </div>
  );
};

export default AboutPage;
