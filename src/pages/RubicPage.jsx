import React from 'react';
//import Header from '../components/Header';
import RubicHero from '../components/RubicHero';
import AbacusOverview from '../components/RubicOverview';
//import Footer from '../components/Footer';
//import HomeTestimonials from '../components/hometestimonial';
import Coursecard from '../components/newcardtest(1)';
import FAQ from '../components/FranchiseFAQ';

export const RubicPage = () => {
  return (
    <div>
      <RubicHero />
      <AbacusOverview />
      <FAQ />
      {/* <HomeTestimonials /> */}
      <Coursecard />
    </div>
  );
};

export default RubicPage;