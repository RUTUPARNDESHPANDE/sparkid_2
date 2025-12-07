import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.webp";
import "../styles/AbacusOverview.css";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null); 

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
            className={`tab-button ${
              activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
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
            <h2 className="main-title">What is Abacus ?</h2>
            <p className="overview-description">
              Abacus is a Latin word that has its origins in the Greek words
              <i> abax</i> or <i>abakion</i> (meaning "table" or "tablet"),
              which in turn, possibly originated from the Semitic word{" "}
              <i>abaq</i>, meaning "sand". The abacus is one of many types of
              counting devices that are used to count large numbers.
            </p>
            <h3 className="sub-title">
              Unlock Your Child's Brain Potential with Abacus Learning!
            </h3>
            <p className="overview-description">
              Unleash the limitless potential of your child’s mind with our
              Abacus program! Specially designed for children aged 4 to 15.
            </p>
            <p className="overview-description">
              This course isn’t just about calculations; it’s a journey of
              holistic brain development. The Abacus program stimulates both
              sides of the brain, helping children improve cognitive abilities
              through visualization, memory, and concentration. Each level
              progressively builds upon skills, from simple calculations to
              advanced memory techniques.
            </p>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Designed to enhance focus
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Faster problem-solving
                skills and mental agility
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Visualization &
                Concentration
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Memory Retention & Recall
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Photographic Memory
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Speed & Accuracy
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Listening Skills
              </li>
            </ul>
          </div>
        )}
        {activeTab === "levels" && (
  <div className="levels-content">
    {/* Little Star Abacus */}
    <div className="course-dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("littleStar")}
        style={{
          color: expandedSection === "littleStar" ? "var(--primary-grey)" : "var(--primary-orange)",
          fontWeight: "bold",
        }}
      >
        <h3>1. Little Star Abacus</h3>
        <span>{expandedSection === "littleStar" ? "-" : "+"}</span>
      </div>
      {expandedSection === "littleStar" && (
        <div className="dropdown-content">
          <p className="dropdown-course-info">
            <span>Eligibility:</span> LKG to 2nd Grade
          </p>
          <p className="dropdown-course-info">
            <span>Duration:</span> 3 Months
          </p>
          <p className="dropdown-course-info">
            <span>Focus:</span> Foundation Learning
          </p>
          <p className="dropdown-description">
            The Little Star program is designed to introduce young learners
            (ages 4\u20137) to the basics of using the Abacus. It focuses on
            building number sense and hand-eye coordination, laying a strong
            foundation for mental arithmetic.
          </p>
          <h4 className="dropdown-subtitle">Key Skills Developed</h4>
          <ul className="benefits-list">
            <li>
              <img src={point} alt="Checkpoint" /> Recognizing and representing
              numbers from 1 to 100.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Performing basic addition
              and subtraction using the Abacus.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Enhancing concentration and
              fine motor skills through bead manipulation.
            </li>
          </ul>
          <h4 className="dropdown-subtitle">Learning Methodology</h4>
          <p className="dropdown-course-info">
              <span>Hands-On Practice :</span> Frequent
              use of physical abacus tools.
            </p>
            <p className="dropdown-course-info">
            <span>Interactive Techniques : </span>
              Stories, games, and visuals to make learning fun.
            </p>
            <p className="dropdown-course-info">
            <span>Parent Engagement :</span> Regular
              updates to parents on progress and tips for practicing at home.
            </p>
          
        </div>
      )}
    </div>

    {/* The Brain Charger */}

<div className="course-dropdown-item">
  <div
    className="dropdown-header"
    onClick={() => toggleSection("brainCharger")}
    style={{
      color: expandedSection === "brainCharger" ? "var(--primary-grey)" : "var(--primary-orange)",
      fontWeight: "bold",
    }}
  >
    <h3>2. The Brain Charger</h3>
    <span>{expandedSection === "brainCharger" ? "-" : "+"}</span>
  </div>
  {expandedSection === "brainCharger" && (
    <div className="dropdown-content">
      <p className="dropdown-course-info">
        <span>Eligibility:</span> 3rd to 10th Grade | Completion of the Little Star Program
      </p>
      <p className="dropdown-course-info">
        <span>Duration:</span> 12.5 Months (5 Levels of 2.5 Months Each)
      </p>
      <p className="dropdown-course-info">
        <span>Focus:</span> Intermediate Learning
      </p>
      <p className="dropdown-description">
        This program transitions students from foundational skills to advanced arithmetic calculations using the Abacus. With five progressive levels, the Brain Charger program is designed to refine cognitive abilities and enhance mental arithmetic.
      </p>
      <div className="levels-details">
      <h4 className="level-detail"><span>Level 1:</span> Beginner</h4>
      <ul>
        <li>Learning double-digit addition and subtraction.</li>
        <li>Introduction to basic multiplication techniques.</li>
      </ul>

      <h4 className="level-detail"><span>Level 2:</span> Intermediate</h4>
      <ul>
        <li>Transition from physical abacus to mental visualization of beads.</li>
        <li>Multiplication up to two-digit numbers.</li>
      </ul>

      <h4 className="level-detail"><span>Level 3:</span> Advanced Beginner</h4>
      <ul>
        <li>Addition and subtraction with three-digit numbers.</li>
        <li>Faster mental calculations with guided visualization.</li>
      </ul>

      <h4 className="level-detail"><span>Level 4:</span> Advanced Intermediate</h4>
      <ul>
        <li>Division concepts introduced.</li>
        <li>Speed tests to enhance calculation accuracy.</li>
      </ul>

      <h4 className="level-detail"><span>Level 5:</span> Expert</h4>
      <ul>
        <li>Mastery of multi-step problem-solving.</li>
        <li>Complex calculations involving decimals and fractions.</li>
      </ul>
    </div>

      <h4 className="dropdown-subtitle">Key Skills Developed</h4>
      <ul className="benefits-list">
        <li>
          <img src={point} alt="Checkpoint" /> Enhanced mental visualization of numbers.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Faster calculations (up to 50% improvement in speed).
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Stronger analytical and logical reasoning.
        </li>
      </ul>
              <h4 className="dropdown-subtitle">Learning Methodology</h4>
        <p className="dropdown-course-info">
          <span>Practice Sheets:</span> Weekly exercises for consistent learning.
        </p>
        <p className="dropdown-course-info">
          <span>Skill Competitions:</span> Periodic challenges to build confidence and speed.
        </p>
        <p className="dropdown-course-info">
          <span>Interactive Techniques:</span> Stories, games, and visuals to make learning fun.
        </p>
        <p className="dropdown-course-info">
          <span>Parent Engagement:</span> Regular updates to parents on progress and tips for practicing at home.
        </p>

    </div>
  )}
</div>


    {/* Advanced Level */}
    {activeTab === "levels" && (
          <div className="levels-content">
            {/* Advanced Level */}
            <div className="course-dropdown-item">
              <div
                className="dropdown-header"
                onClick={() => toggleSection("advancedLevel")}
                style={{
                  color: expandedSection === "advancedLevel" ? "var(--primary-grey)" : "var(--primary-orange)",
                  fontWeight: "bold",
                }}
              >
                <h3>3. Advanced Level</h3>
                <span>{expandedSection === "advancedLevel" ? "-" : "+"}</span>
              </div>
              {expandedSection === "advancedLevel" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 3rd to 10th Grade | Completion of the Brain Charger Program
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 4 Months (2 Levels of 2 Months Each)
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Advanced Learning
                  </p>
                  <p className="dropdown-description">
                    This level focuses on mastering Abacus techniques and pushing students to their full potential in mental arithmetic. Designed for those ready to take on advanced challenges, this program strengthens speed, accuracy, and problem-solving.
                  </p>
                  <h4 className="level-detail"><span>Level 1:</span> Advanced Level 1</h4>
                  <ul>
                    <li>Rapid mental calculations for large numbers.</li>
                    <li>Techniques for solving problems without visualizing the abacus beads.</li>
                  </ul>
                  <h4 className="level-detail"><span>Level 2:</span> Advanced Level 1</h4>
                  <ul>
                    <li>Application of advanced techniques to solve real-world problems.</li>
                    <li>Speed drills to enhance mental processing.</li>
                  </ul>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Mental agility for solving complex arithmetic problems in seconds.
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved focus and memory retention.
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Preparation for competitive exams and math contests.
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Speed Drills:</span> Weekly challenges to improve speed and accuracy.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Performance Reports:</span> Comprehensive feedback on progress and areas to improve.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Skill Competitions:</span> Periodic challenges to build confidence and speed.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Interactive Techniques:</span> Stories, games, and visuals to make learning fun.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent Engagement:</span> Regular updates to parents on progress and tips for practicing at home.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

    {/* Grand Level */}
    <div className="course-dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("grandLevel")}
        style={{
          color: expandedSection === "grandLevel" ? "var(--primary-grey)" : "var(--primary-orange)",
          fontWeight: "bold",
        }}
      >
        <h3>4. Grand Level</h3>
        <span>{expandedSection === "grandLevel" ? "-" : "+"}</span>
      </div>
      {expandedSection === "grandLevel" && (
    <div className="dropdown-content">
      <p className="dropdown-course-info">
        <span>Eligibility:</span> 3rd to 10th Grade | Completion of the Advanced Level Program
      </p>
      <p className="dropdown-course-info">
        <span>Duration:</span> 45 Days
      </p>
      <p className="dropdown-course-info">
        <span>Focus:</span> Advanced Learning
      </p>
      <p className="dropdown-description">
        The Grand Level is the pinnacle of the Abacus course, designed to test and showcase the mastery of mental math skills. It’s a high-intensity program where students refine their techniques to perfection and prepare for competitive platforms.
      </p>
      <h4 className="dropdown-subtitle">Key Highlights</h4>
      <ul>
        <li>
          Advanced mental arithmetic drills at the competitive level.
        </li>
        <li>
          Techniques to calculate large and complex numbers with precision.
        </li>
        <li>
          Focus on time management and stress-free problem-solving.
        </li>
      </ul>
      <h4 className="dropdown-subtitle">Key Skills Developed</h4>
      <ul className="benefits-list">
        <li>
          <img src={point} alt="Checkpoint" /> Mental agility for solving complex arithmetic problems in seconds.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Improved focus and memory retention.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Preparation for competitive exams and math contests.
        </li>
      </ul>
      <h4 className="dropdown-subtitle">Learning Methodology</h4>
      <p className="dropdown-course-info">
        <span>Mastery of Abacus Techniques:</span> Perfecting mental math for real-world and competitive applications.
      </p>
      <p className="dropdown-course-info">
        <span>Time Efficiency:</span> Solving problems with unparalleled speed.
      </p>
      <p className="dropdown-course-info">
        <span>Confidence:</span> Gaining the ability to tackle any mathematical challenge.
      </p>
      <p className="dropdown-course-info">
        <span>Interactive Techniques:</span> Stories, games, and visuals to make learning fun.
      </p>
      <p className="dropdown-course-info">
        <span>Parent Engagement:</span> Regular updates to parents on progress and tips for practicing at home.
      </p>
      <h4 className="dropdown-subtitle">Special Additions for This Level</h4>
      <ul>
        <li>
          Participation in Math Olympiads and mental arithmetic championships.
        </li>
        <li>
          Certification of Completion, recognizing the student as an Abacus Master.
        </li>
      </ul>
    </div>
  )}
    </div>
  </div>
)}

        {activeTab === "details" && (
  <div className="details-content">
    <h2 className="main-title">The Science Behind Abacus Training</h2>
    <p className="overview-description">
      The Abacus program is not just about numbers—it's a scientifically backed
      method designed to enhance cognitive abilities and brain functions. The act
      of bead manipulation stimulates both the left and right hemispheres of the
      brain, fostering neuroplasticity and creating strong neural connections.
      Here's how it works:
    </p>

    <h3 className="sub-title">Brain Activation</h3>
    <ul className="dropdown-course-info">
      <li>
        <span>Left Hemisphere:</span> Handles logical thinking, analytical
        reasoning, and sequential problem-solving, which are essential in
        arithmetic.
      </li>
      <li>
        <span>Right Hemisphere:</span> Focuses on creativity, visualization,
        and holistic thinking, activated by imagining bead movements mentally.
      </li>
    </ul>
    <p className="overview-description">
      The combination of these two functions during Abacus training leads to
      balanced and heightened cognitive abilities.
    </p>

    <h3 className="sub-title">
      Key Skills Enhanced Through Abacus Training
    </h3>
    <ul className="key-skills-list">
      <li>
        <span>Visualization:</span> Students learn to visualize the abacus
        beads in their mind, strengthening mental imagery and creative thinking.
        <br />
        <span>Result:</span> They can solve complex calculations without
        physically using the abacus.
      </li>
      <li>
        <span>Memory & Recall:</span> Repeated practice sharpens short-term
        and long-term memory, often leading to photographic memory.
        <br />
        <span>Result:</span> Students excel in academic subjects and recall
        information with ease.
      </li>
      <li>
        <span>Listening Skills:</span> Group exercises and oral tests
        improve auditory processing, helping students respond quickly and
        accurately.
        <br />
        <span>Result:</span> Improved communication and better academic
        performance in oral-based assessments.
      </li>
      <li>
        <span>Speed & Accuracy:</span> The progressive levels focus on
        improving calculation speed while maintaining precision.
        <br />
        <span>Result:</span> Students develop confidence and a competitive
        edge in academics and beyond.
      </li>
    </ul>
  </div>
)}

{activeTab === "opportunities" && (
          <div className="opportunities-content">
            <h2 className="main-title">Long-Term Benefits for Students</h2>
            <h4 className="dropdown-subtitle">1. Academic Excellence </h4>
            <ul className="dropdown-course-info">
              <li>
              Abacus training enhances mathematical abilities, directly improving performance in math and science subjects.
              </li>
              <li>
              Sharpened memory, focus, and speed give students an edge in other subjects as well, like languages and general studies.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
            <ul className="dropdown-course-info">
              <li>
              Prepares students for prestigious mental math competitions, such as: <br />
              Abacus Olympiads
                <br/>International Mental Arithmetic Championships
              </li>
              <li>
              Participation in these contests boosts confidence, resilience, and the spirit of healthy competition.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>
              The program focuses on skills that extend beyond academics and into every aspect of life, including:
              </li>
              <li>
              Sharpened memory, focus, and speed give students an edge in other subjects as well, like languages and general studies.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Career Preparation </h4>
            <ul className="dropdown-course-info">
              <li>
              Students gain transferable skills that are valuable for future careers, particularly in fields requiring analytical thinking,
               such as engineering, finance, and technology.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
