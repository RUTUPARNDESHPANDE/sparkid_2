import React from 'react';
//import Header from '../components/Header';
import AbacusHero from '../components/AbacusHero';
import AbacusOverview from '../components/AbacusOverview';
//import Footer from '../components/Footer';
//import HomeTestimonials from '../components/hometestimonial';
import Coursecard from '../components/newcardtest(1)';
import FAQ from '../components/FranchiseFAQ';

export const AbacusPage = () => {
  return (
    <div>
      <AbacusHero />
      <AbacusOverview />
      <FAQ />
      {/* <HomeTestimonials /> */}
      <Coursecard />
    </div>
  );
};

export default AbacusPage;