import React from 'react';
//import Header from '../components/Header';
import VedicHero from '../components/VedicHero';
import AbacusOverview from '../components/VedicOverview';
//import Footer from '../components/Footer';
//import HomeTestimonials from '../components/hometestimonial';
import Coursecard from '../components/newcardtest(1)';
import FAQ from '../components/FranchiseFAQ';

export const VedicPage = () => {
  return (
    <div>
      <VedicHero />
      <AbacusOverview />
      <FAQ />
      {/* <HomeTestimonials /> */}
      <Coursecard />
    </div>
  );
};

export default VedicPage;