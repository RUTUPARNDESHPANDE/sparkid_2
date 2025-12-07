import React from 'react';
//import Header from '../components/Header';
import AboutUs from '../components/HandwritingHero';
import HandwritingOverview from '../components/HandwritingOverview';
//import Footer from '../components/Footer';
//import HomeTestimonials from '../components/hometestimonial';
import Coursecard from '../components/newcardtest(1)';
import FAQ from '../components/FranchiseFAQ';

export const HandwritingPage = () => {
  return (
    <div>
      <AboutUs />
      <HandwritingOverview />
      <FAQ />
      {/* <HomeTestimonials /> */}
      <Coursecard />
    </div>
  );
};

export default HandwritingPage;