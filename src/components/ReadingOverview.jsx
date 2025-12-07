import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.png"; // Importing the image

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
            <h2 className="main-title">What is the Reading Program?</h2>
            <p className="overview-description">
              Reading is the foundation of all learning. Our Reading Program is designed to help children move
              beyond simple decoding to deep comprehension and fluency. We use a structured phonics-based
              approach combined with interactive storytelling to make reading enjoyable. Whether your child is a
              beginner or looking to improve vocabulary and speed, this program builds the skills needed for
              academic success and a lifelong love for books.
            </p>
            <h3 className="sub-title">
              Unlock the World of Knowledge for Your Child
            </h3>
            <p className="overview-description">
              A child who reads well learns well.
              Reading is not just about saying words aloud; it’s about understanding ideas, expanding imagination,
              and building a rich vocabulary.
              Our program helps children overcome reading struggles, hesitation, and lack of interest.
              Through engaging stories and structured practice, we turn reluctant readers into confident book
              lovers.
              Strong reading skills open doors to better grades, clearer communication, and endless creativity.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Fluent and expressive reading
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Strong vocabulary and grammar usage
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved reading comprehension
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Correct pronunciation and diction
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Enhanced focus and imagination
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Confidence in public speaking/reading
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better academic performance in all subjects
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
                <h3>1. Phonics & Fluency (Foundation Level)</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 4 to 6 Years
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Sounds, Blending & Simple Words
                  </p>
                  <p className="dropdown-description">
                    This level introduces children to letter sounds (phonics) rather than just letter names. They learn
                    to blend sounds to form words and read simple sentences with confidence.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Letter-sound recognition
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Blending sounds to read words (CVC words)
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Sight word recognition
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Basic sentence reading
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Phonics games & songs:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Flashcards:</span> for sight words
                  </p>
                  <p className="dropdown-course-info">
                    <span>Storytelling sessions:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Reading aloud practice:</span>
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
                <h3>2. Comprehension & Vocabulary (Intermediate Level)</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 7 to 9 Years
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Understanding & Expression
                  </p>
                  <p className="dropdown-description">
                    Students move from learning to read to reading to learn. They focus on understanding the
                    meaning of texts, answering questions, and expanding their vocabulary.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Understanding story context and details
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Learning new vocabulary and usage
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Answering comprehension questions
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Expressive reading with intonation
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Interactive story discussions:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Vocabulary building exercises:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Role-playing characters:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Worksheets:</span> on comprehension
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
                <h3>3. Advanced Reading & Analysis (Advanced Level)</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 10 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Critical Thinking & Speed Reading
                  </p>
                  <p className="dropdown-description">
                    At this level, students engage with complex texts, articles, and novels. They learn to analyze
                    content, summarize ideas, and read at a faster pace without losing understanding.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Critical analysis of text
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Summarizing and paraphrasing skills
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Speed reading techniques
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Advanced vocabulary and grammar
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Book reviews and discussions:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Debates based on reading material:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Speed reading drills:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Creative writing:</span> linked to reading
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
              Reading is a whole-brain activity:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Visual Cortex:</span> Recognizes letters and words.
              </li>
              <li>
                <span>Broca’s Area:</span> Processes speech sounds and articulation.
              </li>
              <li>
                <span>Wernicke’s Area:</span> Decodes meaning and comprehension.
              </li>
            </ul>
            <p className="overview-description">
              Regular reading strengthens the connections between these areas, improving overall brain function
              and intelligence.
            </p>

            <h3 className="sub-title">
              Key Skills Enhanced Through Reading Training
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Cognitive Development:</span> Reading stimulates mental growth and new neural connections.
                <br />
                <span>Result:</span> Smarter thinking and better problem-solving.
              </li>
              <li>
                <span>Focus & Concentration:</span> Getting lost in a story trains the brain to focus for long periods.
                <br />
                <span>Result:</span> Improved attention span in class.
              </li>
              <li>
                <span>Empathy & Emotional Intelligence:</span> Reading stories helps children understand different perspectives.
                <br />
                <span>Result:</span> Better social skills and emotional maturity.
              </li>
              <li>
                <span>Language Mastery:</span> Constant exposure to good language improves speaking and writing.
                <br />
                <span>Result:</span> Excellent communication skills.
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
                Better understanding of all subjects (History, Science, etc.)
              </li>
              <li>
                Higher scores in language and literature exams
              </li>
              <li>
                Stronger essay writing skills
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Cognitive Growth </h4>
            <ul className="dropdown-course-info">
              <li>
                Enhanced memory and retention
              </li>
              <li>
                Improved critical thinking
              </li>
              <li>
                Faster information processing
              </li>
            </ul>
            <h4 className="dropdown-subtitle">3. Communication Skills </h4>
            <ul className="dropdown-course-info">
              <li>
                Articulate speaking abilities
              </li>
              <li>
                Rich vocabulary for expression
              </li>
              <li>
                Confidence in social interactions
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Lifelong Learning </h4>
            <ul className="dropdown-course-info">
              <li>
                A habit of self-education
              </li>
              <li>
                Access to global knowledge and ideas
              </li>
              <li>
                Stress relief and relaxation through books
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingOverview;
