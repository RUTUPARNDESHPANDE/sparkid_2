import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.png";
import "../styles/AbacusOverview.css";

const RubicOverview = () => {
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
            <h2 className="main-title">What is Rubik’s Cube Training?</h2>
            <p className="overview-description">
              Rubik’s Cube Training is a powerful brain-development program built around pattern
              recognition, logic, and strategic problem-solving.
              By learning cube algorithms, children enhance memory, focus, and visual-spatial intelligence.
              Every step of the solving process strengthens discipline, patience, and determination.
              The training nurtures a growth mindset, teaching students to approach challenges calmly and
              systematically.
              It evolves into a lifelong skill that boosts confidence, quick thinking, and academic success.
            </p>
            <h3 className="sub-title">
              Unlock Your Child’s Focus, Logic & Strategic Mindset
            </h3>
            <p className="overview-description">
              This training unlocks your child’s ability to think in steps, recognize patterns, and apply logic
              consistently.
              By learning cube algorithms, children naturally improve focus, memory, and visual–spatial
              reasoning.
              The process encourages patience and structured thinking, helping them tackle problems
              without frustration.
              Each completed solve boosts confidence and builds a disciplined approach to learning.
              These skills transfer directly to academics, supporting smarter thinking and better decision
              making.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Improved logical thinking
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Enhanced concentration and patience
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better memory and algorithm retention
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Faster problem-solving strategies
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Strong spatial awareness
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Hand–eye coordination
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Confidence to tackle complex puzzles
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
                <h3>1. The Architect (Foundation Level)</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 7 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 2 Month
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Foundation Learning
                  </p>
                  <p className="dropdown-description">
                    The Beginner level introduces children to the basics of cube structure, turning notations, and
                    color pattern understanding. Students learn the easiest and most child-friendly method to solve
                    the 3×3 cube step by step.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Understanding cube notation (R, L, U, D, F, B)
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Recognizing patterns & color alignment
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Solving the cube using the beginner 7-step method
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Developing patience & focus
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Visual demonstrations:</span> of each step
                  </p>
                  <p className="dropdown-course-info">
                    <span>Individual practice:</span> with guidance
                  </p>
                  <p className="dropdown-course-info">
                    <span>Breakdown of algorithms:</span> into simple patterns
                  </p>
                  <p className="dropdown-course-info">
                    <span>Worksheets & practice assignments:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Progress updates:</span> shared with parents
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
                <h3>2. The Strategist (Intermediate)</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> Completion of Foundation Level
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Pattern Recognition & Algorithm Building
                  </p>
                  <p className="dropdown-description">
                    At this level, students move beyond beginner methods and learn speed-enhancing techniques.
                    They start understanding more advanced algorithms to increase their solving accuracy and
                    reduce solving time.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Advanced algorithm memorization
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Recognition of cube states & cases
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Efficient solving with fewer moves
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved hand speed & finger tricks
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Stepwise algorithm teaching:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Repetitive drills:</span> for speed conditioning
                  </p>
                  <p className="dropdown-course-info">
                    <span>Timed practice sessions:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Pattern-based memory reinforcement:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Guidance:</span> for building personal solving rhythm
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
                <h3>3. The Virtuoso (Advance)</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> Completion of Intermediate Level
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Speed, Efficiency & Competition Prep
                  </p>
                  <p className="dropdown-description">
                    This level is designed for students who want to achieve competitive-level solving skills. Learners
                    practice speed techniques, timing systems, and advanced solving methods like CFOP (Cross, F2L,
                    OLL, PLL).
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> High-speed cube solving
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Finger tricks and move optimization
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Professional competition-style algorithms
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Time management during solves
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Confidence in public and contest performance
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>High-precision speed drills:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Professional speedcubing algorithm sets:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Timer-based training:</span> (digital/physical)
                  </p>
                  <p className="dropdown-course-info">
                    <span>Solve breakdown analysis:</span> & performance reviews
                  </p>
                  <p className="dropdown-course-info">
                    <span>Preparation:</span> for WCA-style competitions
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="details-content">
            <h2 className="main-title">The Science Behind Rubik’s Cube Training</h2>
            <p className="overview-description">
              Solving a Rubik’s Cube engages both hemispheres of the brain:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Left Hemisphere:</span> Logic, sequencing, pattern recognition, algorithmic thinking
              </li>
              <li>
                <span>Right Hemisphere:</span> Spatial awareness, creativity, visualization
              </li>
            </ul>
            <p className="overview-description">
              This balanced activation enhances overall cognitive development.
            </p>

            <h3 className="sub-title">
              Key Skills Enhanced Through Rubik’s Cube Training
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Pattern Recognition:</span> Children learn to recognize color patterns and transformation cycles.
                <br />
                <span>Result:</span> Strengthened analytical & reasoning skills.
              </li>
              <li>
                <span>Memory Retention:</span> Algorithms and sequences improve short-term and long-term memory.
                <br />
                <span>Result:</span> Better retention in academic subjects as well.
              </li>
              <li>
                <span>Spatial Intelligence:</span> Visualizing cube moves trains 3D thinking.
                <br />
                <span>Result:</span> Improved geometry and logical visualization.
              </li>
              <li>
                <span>Concentration & Patience:</span> Solving the cube requires focus and perseverance.
                <br />
                <span>Result:</span> Improved attention span and emotional regulation.
              </li>
              <li>
                <span>Hand–Eye Coordination:</span> Finger tricks enhance fine motor skills.
                <br />
                <span>Result:</span> Better precision and physical coordination.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "opportunities" && (
          <div className="opportunities-content">
            <h2 className="main-title">Opportunities</h2>
            <h4 className="dropdown-subtitle">1. Academic Improvement </h4>
            <ul className="dropdown-course-info">
              <li>
                Stronger logical and analytical thinking
              </li>
              <li>
                Better math reasoning skills
              </li>
              <li>
                Enhanced focus & memory helpful in exams
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
            <p className="dropdown-course-info">Students become eligible for competitions like:</p>
            <ul className="dropdown-course-info">
              <li>WCA (World Cube Association) Events</li>
              <li>School-level cube contests</li>
              <li>Inter-school puzzle competitions</li>
            </ul>
            <p className="dropdown-course-info">Participation builds confidence, discipline, and goal-oriented thinking.</p>

            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>Problem-solving</li>
              <li>Strategic thinking</li>
              <li>Mental endurance</li>
              <li>Creativity & innovation</li>
            </ul>
            <p className="dropdown-course-info">These skills support long-term career paths involving engineering, design, architecture, robotics, and analytical sciences.</p>

            <h4 className="dropdown-subtitle">4. Personal Growth </h4>
            <ul className="dropdown-course-info">
              <li>Improved patience and emotional resilience</li>
              <li>Boosted confidence through achievement</li>
              <li>Ability to tackle complex tasks with a calm mindset</li>
              <li>A fun hobby that strengthens the brain</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RubicOverview;
