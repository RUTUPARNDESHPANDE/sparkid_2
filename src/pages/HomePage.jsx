import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import Header from '../components/Header';
import Hero from '../components/Hero';
//import Footer from '../components/Footer';
import Opportunity from '../components/opportunity';
// import Sight from '../components/sight';
import Educator from '../components/educator';
// import Course from '../components/home-course';
//import HomeTestimonials from '../components/hometestimonial';
import HomeAbout from '../components/home-abt';
// import VedicMathsCard from '../components/newcardtest';
import Coursecard from '../components/newcardtest(1)';
// import NewHeader from "../components/Header1";
// import NewHero from "../components/Hero1";

export const HomePage = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, [location]);
  
  return (
    <div>
      {/* <NewHeader />
      <NewHero /> */}
      <Hero />
      <HomeAbout />
      {/* <Course /> */}
      {/* <VedicMathsCard /> */}
      <Coursecard />
      <Opportunity />
      <Educator />
      {/* <Sight /> */}
      {/* <div id="testimonials">
      <HomeTestimonials />
      </div> */}
    </div>
  );
};

export default HomePage;
