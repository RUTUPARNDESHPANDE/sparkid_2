
import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.png";
import "../styles/AbacusOverview.css";

const VedicOverview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null); // For dropdown in Levels tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="page-container">
      {/* Tab Navigation (outside the box) */}
      <div className="tab-header">
        {["Overview", "Levels", "Details", "Opportunities"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
              }`}
            onClick={() => handleTabClick(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Box with Shadow for Content */}
      <div className="content-card">
        {activeTab === "overview" && (
          <div className="overview-content">
            <h2 className="main-title">What is Vedic Math?</h2>
            <p className="overview-description">
              Vedic Math is an extraordinary ancient Indian mathematical system designed to make
              calculations faster, simpler, and more intuitive. Instead of relying on memorization, it teaches
              children smart mental strategies that instantly boost confidence. The techniques help learners
              solve even complex arithmetic with remarkable ease and accuracy. As children absorb these
              Sutras, they develop sharper logic, enhanced concentration, and a stronger number sense. The
              program ultimately transforms math from a stressful subject into an exciting, empowering
              experience.
            </p>
            <h3 className="sub-title">
              Unlock Your Child’s Hidden Mathematical Genius
            </h3>
            <p className="overview-description">
              Unlock your child’s confidence in a subject most children fear — math.
              Many parents worry when their child struggles with numbers, loses confidence, or starts
              believing “math is not for me.” Our Vedic Math program gently removes that fear by showing
              children how powerful and capable they truly are. With every new technique, they experience
              small victories that rebuild confidence from the inside out. This is more than a math class — it’s
              a transformation that helps them think faster, trust themselves, and perform better in every
              subject.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Strong foundation in arithmetic
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Lightning-fast calculation ability
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Logical reasoning & analytical thinking
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved concentration and memory
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Confidence in tackling complex problems
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Accuracy and speed in academic math
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better exam performance and problem-solving skills
              </li>
            </ul>
          </div>
        )}
        {activeTab === "levels" && (
          <div className="levels-content">
            {/* Level 1 */}
            <div className="course-dropdown-item">
              <div
                className="dropdown-header"
                onClick={() => toggleSection("level1")}
                style={{
                  color: expandedSection === "level1" ? "var(--primary-grey)" : "var(--primary-orange)",
                  fontWeight: "bold",
                }}
              >
                <h3>1. Sparkid Quantum Ganit – Foundation Level</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 5th to 10th Grade
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Basics of Vedic Sutras
                  </p>
                  <p className="dropdown-description">
                    This level introduces children to the core Vedic Math Sutras. Learners discover faster ways to
                    add, subtract, and multiply using simple patterns and mental techniques. The goal is to build
                    strong foundational confidence and eliminate fear of numbers.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Quick addition & subtraction strategies
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Multiplication without relying on memorized tables
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Simple and fast division tricks
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Strong mental arithmetic foundation
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Hands-on practice:</span> through real-life examples
                  </p>
                  <p className="dropdown-course-info">
                    <span>Story-based explanation:</span> of Sutras
                  </p>
                  <p className="dropdown-course-info">
                    <span>Worksheets:</span> for daily reinforcement
                  </p>
                  <p className="dropdown-course-info">
                    <span>Live demonstrations:</span> and guided practice
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> for home practice support
                  </p>
                </div>
              )}
            </div>

            {/* Level 2 */}
            <div className="course-dropdown-item">
              <div
                className="dropdown-header"
                onClick={() => toggleSection("level2")}
                style={{
                  color: expandedSection === "level2" ? "var(--primary-grey)" : "var(--primary-orange)",
                  fontWeight: "bold",
                }}
              >
                <h3>2. Sparkid Quantum Ganit – Intermediate Level</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 5th to 10th Grade
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 6 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Multi-digit calculations & advanced Sutras
                  </p>
                  <p className="dropdown-description">
                    Students begin applying advanced Vedic techniques to solve big-number problems in just a few
                    steps. They also learn creative ways to find squares, cubes, and roots using visualization and
                    pattern logic.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Solving large multiplications in seconds
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Tricks for division, fractions, and decimals
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Fast calculation of squares, cubes & square roots
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Increased speed and accuracy for school-level math
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Step-by-step application:</span> of advanced Sutras
                  </p>
                  <p className="dropdown-course-info">
                    <span>Interactive classroom practice:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Mental visualization exercises:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Speed-based challenges:</span> for confidence
                  </p>
                  <p className="dropdown-course-info">
                    <span>Workbook-based structured learning:</span>
                  </p>
                </div>
              )}
            </div>

            {/* Level 3 */}
            <div className="course-dropdown-item">
              <div
                className="dropdown-header"
                onClick={() => toggleSection("level3")}
                style={{
                  color: expandedSection === "level3" ? "var(--primary-grey)" : "var(--primary-orange)",
                  fontWeight: "bold",
                }}
              >
                <h3>3. Sparkid Quantum Ganit – Advanced Level</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 5th to 10th Grade
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 6 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Higher-order math concepts & exam preparation
                  </p>
                  <p className="dropdown-description">
                    At this level, students master the most advanced applications of Vedic Math. They learn
                    shortcuts for algebraic expressions, geometry-based logic, and complex arithmetic needed for
                    competitive exams.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Fast solving techniques for algebra and geometry
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Methods to solve advanced competitive exam questions
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> High-speed mental calculation under time pressure
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Greater confidence in higher mathematics
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Practice:</span> with competitive exam-style questions
                  </p>
                  <p className="dropdown-course-info">
                    <span>Time-bound:</span> problem-solving sessions
                  </p>
                  <p className="dropdown-course-info">
                    <span>Advanced visual logic exercises:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Mentorship:</span> for accuracy & speed development
                  </p>
                  <p className="dropdown-course-info">
                    <span>Regular assessment:</span> with feedback
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="details-content">
            <h2 className="main-title">The Science Behind Vedic Math Training</h2>
            <p className="overview-description">
              Vedic Math techniques activate both sides of the brain:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Left Brain:</span> logical reasoning & structured problem-solving
              </li>
              <li>
                <span>Right Brain:</span> visualization & creative mental shortcuts
              </li>
            </ul>
            <p className="overview-description">
              This dual activation helps children process numbers faster and retain concepts longer.
            </p>

            <h3 className="sub-title">
              Key Cognitive Skills Enhanced
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Speed & Accuracy:</span> Children learn the fastest ways to perform operations, reducing dependency on calculators.
                <br />
                <span>Result:</span> Improved exam performance and confidence.
              </li>
              <li>
                <span>Logical Reasoning:</span> Sutras teach pattern-based thinking instead of memorization.
                <br />
                <span>Result:</span> Better problem-solving in mathematics and science.
              </li>
              <li>
                <span>Memory Power:</span> Consistent practice strengthens retention of concepts and methods.
                <br />
                <span>Result:</span> Enhanced academic performance across subjects.
              </li>
              <li>
                <span>Mental Agility:</span> Students learn to think flexibly and respond faster during timed tests.
                <br />
                <span>Result:</span> Better performance in competitive exams.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "opportunities" && (
          <div className="opportunities-content">
            <h2 className="main-title">Opportunities</h2>
            <h4 className="dropdown-subtitle">1. Academic Excellence </h4>
            <ul className="dropdown-course-info">
              <li>
                Stronger understanding of school math
              </li>
              <li>
                Higher marks in exams through fast solving
              </li>
              <li>
                Ability to tackle complex problems with ease
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
            <p className="dropdown-course-info">Perfect foundation for competitive exams such as:</p>
            <ul className="dropdown-course-info">
              <li>Olympiads</li>
              <li>NTSE</li>
              <li>SAT Quant</li>
              <li>IIT-JEE (early preparation)</li>
              <li>Math talent tests</li>
            </ul>
            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>Logical thinking</li>
              <li>Pattern recognition</li>
              <li>Decision making</li>
              <li>Rapid problem-solving</li>
            </ul>
            <p className="dropdown-course-info">These skills help in careers such as engineering, finance, data analytics, and technology.</p>
            <h4 className="dropdown-subtitle">4. Real-World Advantages </h4>
            <ul className="dropdown-course-info">
              <li>Confidence in mental calculations</li>
              <li>Better academic preparedness</li>
              <li>Strong base for future professional exams</li>
              <li>A lifelong love for mathematics</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VedicOverview;
