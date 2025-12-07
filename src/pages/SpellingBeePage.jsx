import React from "react";
import SpellingBeeHero from "../components/SpellingBeeHero";
import SpellingBeeOverview from "../components/SpellingBeeOverview";
import FranchiseFAQ from "../components/FranchiseFAQ";
//import HomeTestimonials from "../components/hometestimonial";
import Coursecard from '../components/newcardtest(1)';

const SpellingBeePage = () => {
    return (
        <div>
            <SpellingBeeHero />
            <SpellingBeeOverview />
            <Coursecard />
            {/* <HomeTestimonials /> */}
            <FranchiseFAQ />
        </div>
    );
};

export default SpellingBeePage;
