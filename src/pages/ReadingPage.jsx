import React from 'react';
//import Header from '../components/Header';
import AboutUs from '../components/ReadingHero';
import ReadingOverview from '../components/ReadingOverview';
//import Footer from '../components/Footer';
//import HomeTestimonials from '../components/hometestimonial';
import Coursecard from '../components/newcardtest(1)';
import FAQ from '../components/FranchiseFAQ';

export const ReadingPage = () => {
  return (
    <div>
      <AboutUs />
      <ReadingOverview />
      <FAQ />
      {/* <HomeTestimonials /> */}
      <Coursecard />
    </div>
  );
};

export default ReadingPage;