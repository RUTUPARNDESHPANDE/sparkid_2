import React from 'react';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import CareerHero from '../components/CareerHero';
import CareerCulture from '../components/CareerCulture';
import CareerApplication from '../components/CareerApplication';
import FAQ from '../components/FranchiseFAQ';
import CareerJob from '../components/CareerJob';
export const CareersPage = () => {
    return (
      <div>
        <CareerHero />
        <CareerJob />
        <CareerCulture />
        <CareerApplication/>
        <FAQ />
      </div>
    );
  };
  
  export default CareersPage;