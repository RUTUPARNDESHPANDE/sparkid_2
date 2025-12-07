
import React from "react";
import "../styles/franchiseInvestment.css";
import checkIcon from "../Assets/courses-img/checkpoint.png";

const InvestmentRequirements = () => {
  return (
    <div className="investment-requirements">
      <p className="investment-heading">Low Investment, High Returns</p>
      <h2 className="investment-subheading">Investment Requirements</h2>
      <p className="investment-description">
        Brave Sparkids Academy offers a cost-effective franchise model designed
        for profitability.
      </p>

      <div className="investment-details">
        {/* Initial Investment Includes */}
        <div className="investment-column">
          <h4>Initial Investment Includes</h4>
          <br/>
          <ul>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Setup Costs: Classroom space, basic<br/> infrastructure, and branding materials.</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Program Materials: Abacus kits,<br/> instructor manuals, and student<br/> resources.</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Marketing Support:Digital and print <br/>campaigns to launch your business.</span>
            </li>
          </ul>
        </div>

        {/* Ongoing Costs */}
        <div className="investment-column">
          <h4>Ongoing Costs</h4><br/>
          <ul>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Royalty Fee: A small percentage of monthly<br/> revenue.</span>
            </li>
            <li>
              <img src={checkIcon} alt="check" />
              <span>Operational Costs:Utilities, instructor<br/> salaries, and other center expenses.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestmentRequirements;
