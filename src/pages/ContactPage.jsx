import React from 'react';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import ContactUs from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import Branches from '../components/ContactBranches';
export const Contact = () => {
    return (
      <div>
        <ContactUs />
        <ContactForm />
        <Branches/>
      </div>
    );
  };
  
  export default Contact;