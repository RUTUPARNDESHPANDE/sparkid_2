import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.webp"; // Importing the image

const ReadingOverview = () => {
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
            <h2 className="main-title">Why Reading Is Essential</h2>
            <p className="overview-description">
              Reading is the cornerstone of all learning, impacting academic success in every subject.
              Our program strengthens phonics, comprehension, fluency, and expression through structured
              and interactive reading methods.
              Children learn to absorb information faster, visualize stories better, and understand text at
              deeper levels.
              Regular guided reading builds confidence in both independent learning and classroom
              participation.
              This program creates a lifelong love for reading, curiosity, and knowledge.
            </p>
            <h3 className="sub-title">
              Unlock Your Child's Fluency, Comprehension & Learning Ability
            </h3>
            <p className="overview-description">
              Unlock your child's reading confidence through a structured approach that builds phonics,
              fluency, and understanding.
              With guided practice, children learn to read smoothly, interpret text accurately, and express
              ideas clearly.
              These skills significantly improve performance in all academic subjects that rely on reading
              comprehension.
              Regular reading sessions enhance focus, memory, and independent learning habits.
              This foundation nurtures a lifelong interest in reading, knowledge, and curiosity.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Reading</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Reading fluency & speed
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Strong vocabulary and language understanding
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved comprehension & interpretation
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better memory retention
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Greater focus & attention span
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Confidence in academic reading
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved imagination & creativity
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Enhanced communication skills
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
                <h3>1. Akshara Arambha — Beginner Reading</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> Ages 4–6
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Phonics, Basic Reading & Letter Sounds
                  </p>
                  <p className="dropdown-description">
                    Young learners begin their reading journey through phonics, sound blending, and recognition of
                    sight words. They gradually move from letters to words and early sentences.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Understanding letter sounds & phonics
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Blending sounds to form words
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Reading simple sentences
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Recognizing sight words
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Phonics instruction:</span> Strengthening foundational reading sounds.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Sight-word practice:</span> Building instant recognition of common words.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Guided reading:</span> Slow-paced reading sessions to build fluency.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Story comprehension:</span> Using short stories to improve understanding.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Home-reading suggestions for practice.
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
                <h3>2. Patha Vegam — Fluency Level</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> Age 6+
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 4 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Speed, Expression, Vocabulary & Comprehension
                  </p>
                  <p className="dropdown-description">
                    Once children understand basic reading patterns, they move into fluency training—reading with
                    speed, clarity, and expression while also learning vocabulary and comprehension.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved reading speed & smoothness
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Better expression & tone
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Vocabulary enrichment
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Strong comprehension (main idea, theme, context)
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Reading for exams and understanding questions
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Fluency drills:</span> Exercises to improve reading speed and expression.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Comprehension practice:</span> Activities to develop deeper understanding.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Vocabulary building:</span> Introducing new words through stories.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Group reading:</span> Sessions that build confidence and clarity.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Reading routines recommended for home.
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
                <h3>3. Patha Vegam — Fluency Level</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> Age 6+
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 4 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Speed, Expression, Vocabulary & Comprehension
                  </p>
                  <p className="dropdown-description">
                    Once children understand basic reading patterns, they move into fluency training—reading with
                    speed, clarity, and expression while also learning vocabulary and comprehension.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved reading speed & smoothness
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Better expression & tone
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Vocabulary enrichment
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Strong comprehension (main idea, theme, context)
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Reading for exams and understanding questions
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Fluency drills:</span> Exercises to improve reading speed and expression.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Comprehension practice:</span> Activities to develop deeper understanding.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Vocabulary building:</span> Introducing new words through stories.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Group reading:</span> Sessions that build confidence and clarity.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Reading routines recommended for home.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="details-content">
            <h2 className="main-title">The Science Behind Reading Training</h2>
            <p className="overview-description">
              Reading activates multiple areas of the brain:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Visual Processing:</span> Recognizing letters and words
              </li>
              <li>
                <span>Phonological Awareness:</span> Connecting sounds to letters
              </li>
              <li>
                <span>Language Processing:</span> Understanding meaning
              </li>
              <li>
                <span>Memory & Retrieval:</span> Remembering words and concepts
              </li>
              <li>
                <span>Cognitive Skills:</span> Analyzing and interpreting text
              </li>
            </ul>
            <p className="overview-description">
              Strong reading skills improve academic success across subjects like science, math word
              problems, social studies, and languages.
            </p>

            <h3 className="sub-title">
              Key Skills Enhanced Through Reading
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Reading Fluency:</span>
                Reading smoothly and quickly improves comprehension.
                <br />
                <span>Result:</span> Better focus, faster learning, and improved academic performance.
              </li>
              <li>
                <span>Vocabulary Development:</span>
                Children learn new words naturally through reading.
                <br />
                <span>Result:</span> Stronger communication and writing skills.
              </li>
              <li>
                <span>Comprehension Skills:</span>
                Students learn to understand meaning, themes, and ideas.
                <br />
                <span>Result:</span> Better marks in language and comprehension-based exams.
              </li>
              <li>
                <span>Memory & Retention:</span>
                Story-based learning boosts long-term recall.
                <br />
                <span>Result:</span> Stronger performance in all academic areas.
              </li>
              <li>
                <span>Confidence in Reading Aloud:</span>
                Regular guided reading builds confidence.
                <br />
                <span>Result:</span> Better participation in class and improved speaking skills.
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
                Improves performance in all subjects
              </li>
              <li>
                Strengthens comprehension for exam passages
              </li>
              <li>
                Enhances writing, grammar, and vocabulary
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
            <p className="dropdown-course-info">Students gain confidence for:</p>
            <ul className="dropdown-course-info">
              <li>Storytelling competitions</li>
              <li>Reading challenges</li>
              <li>Language Olympiads</li>
            </ul>
            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>
                Clear communication
              </li>
              <li>
                Strong imagination & creativity
              </li>
              <li>
                Better focus and attention span
              </li>
              <li>
                Independent learning skills
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Future Readiness </h4>
            <ul className="dropdown-course-info">
              <li>
                Strong reading foundation supports careers in writing, communication, science, law, and
                technology
              </li>
              <li>
                Enhances the ability to understand complex texts and concepts
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingOverview;

