import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";
import FranchiseProcess from "../components/franchiseapplication";
import FranchiseOurstory from "../components/FranchiseOurstory";
import FranchiseSuccess from "../components/FranchiseSuccess";
import FranchiseSupport from "../components/FranchiseSupport";
import FAQ from "../components/FranchiseFAQ";
import QuestionSection from "../components/Question";

const FranchisePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the "#" from the hash
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <Franchisehero />
      <FranchiseOurstory />
      <FranchiseInvestment />
      <FranchiseSupport />
      <FranchiseProcess />
      <div id="faq">
        <FAQ />
      </div>
      <FranchiseSuccess />
      <QuestionSection />
    </div>
  );
};

export default FranchisePage;
