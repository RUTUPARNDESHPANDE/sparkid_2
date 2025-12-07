import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.png"; // Importing the image

const HandwritingOverview = () => {
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
            <h2 className="main-title">What is Handwriting Improvement?</h2>
            <p className="overview-description">
              Handwriting is more than just putting words on paper—it is a reflection of clarity, discipline, and
              confidence. Our Handwriting Improvement Program is scientifically designed to fix poor grip,
              irregular spacing, and illegible strokes. We focus on fine motor skills, posture, and pen control to
              help students write effortlessly. Whether it’s print or cursive, a beautiful handwriting style boosts
              academic performance and leaves a lasting positive impression.
            </p>
            <h3 className="sub-title">
              Transform Your Child’s Writing & Confidence
            </h3>
            <p className="overview-description">
              Does your child struggle with messy writing, slow speed, or hand pain?
              Our program transforms their writing from illegible to beautiful in just a few weeks.
              We don’t just teach them to copy letters; we retrain their muscle memory for proper grip and
              movement.
              Clear handwriting leads to better grades, as teachers can read answers without effort.
              Beyond school, the discipline of writing neatly builds patience, focus, and self-esteem.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Legible and neat handwriting
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Proper pen/pencil grip correction
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Consistent letter sizing and spacing
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Faster writing speed without fatigue
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved fine motor skills
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better presentation in exams
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Boosted self-confidence
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
                <h3>1. Print Style (Foundation Level)</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 5 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Letter Formation & Clarity
                  </p>
                  <p className="dropdown-description">
                    This level focuses on the basics of clear, separate letter formation (Print Script). It is ideal for
                    younger children or those who need to correct fundamental legibility issues.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Correct stroke direction for alphabets
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Uniform size and shape of letters
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Proper spacing between words
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Straight-line alignment
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Pattern tracing exercises:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Grip correction techniques:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Four-line notebook practice:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Daily worksheets:</span> for reinforcement
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
                <h3>2. Cursive Style (Intermediate Level)</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 7 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Flow & Connectivity
                  </p>
                  <p className="dropdown-description">
                    Students learn the art of joining letters smoothly. Cursive writing improves writing speed and
                    helps in maintaining a continuous thought process while writing.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Smooth connections between letters
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Consistent slant and rhythm
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Writing without lifting the pen frequently
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Elegant and professional look
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Stroke connectivity drills:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Paragraph writing practice:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Speed control exercises:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Regular assessment:</span> of neatness
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
                <h3>3. Speed Writing (Advanced Level)</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 10 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 2 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Speed with Legibility
                  </p>
                  <p className="dropdown-description">
                    This level is for students who have good handwriting but struggle to finish exams on time. We
                    train them to write fast without compromising on clarity.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Increasing words per minute (WPM)
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Maintaining legibility under pressure
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Reducing hand fatigue during long exams
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Efficient note-taking skills
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Timed writing challenges:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Muscle relaxation techniques:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Dictation practice:</span>
                  </p>
                  <p className="dropdown-course-info">
                    <span>Exam simulation drills:</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div className="details-content">
            <h2 className="main-title">The Science Behind Handwriting Training</h2>
            <p className="overview-description">
              Handwriting is a complex cognitive process that links the hand and brain:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Fine Motor Activation:</span> Strengthens neural pathways controlling finger movements.
              </li>
              <li>
                <span>Reticular Activating System (RAS):</span> Writing by hand improves focus and information retention compared to typing.
              </li>
            </ul>
            <p className="overview-description">
              Good handwriting reduces cognitive load, allowing the brain to focus on content rather than the
              act of writing.
            </p>

            <h3 className="sub-title">
              Key Skills Enhanced Through Handwriting Training
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Focus & Discipline:</span> The practice of neat writing instills patience and attention to detail.
                <br />
                <span>Result:</span> Reduced careless errors in schoolwork.
              </li>
              <li>
                <span>Memory Retention:</span> Studies show that writing notes by hand improves learning and recall.
                <br />
                <span>Result:</span> Better exam preparation and grades.
              </li>
              <li>
                <span>Creativity & Expression:</span> A fluid writing style encourages free flow of thoughts.
                <br />
                <span>Result:</span> Improved essay and creative writing skills.
              </li>
              <li>
                <span>Confidence:</span> Neat work receives praise and positive reinforcement.
                <br />
                <span>Result:</span> Higher self-esteem in academic settings.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "opportunities" && (
          <div className="opportunities-content">
            <h2 className="main-title">Opportunities</h2>
            <h4 className="dropdown-subtitle">1. Academic Success </h4>
            <ul className="dropdown-course-info">
              <li>
                Higher marks for presentation and legibility
              </li>
              <li>
                Ability to complete exams on time
              </li>
              <li>
                Better teacher appreciation
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Personal Development </h4>
            <ul className="dropdown-course-info">
              <li>
                Improved patience and focus
              </li>
              <li>
                Sense of pride in one’s work
              </li>
              <li>
                Development of a unique personal signature style
              </li>
            </ul>
            <h4 className="dropdown-subtitle">3. Professional Advantages </h4>
            <ul className="dropdown-course-info">
              <li>
                Clear communication in written forms
              </li>
              <li>
                First impression impact in applications/forms
              </li>
              <li>
                Enhanced note-taking in meetings
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Creative Expression </h4>
            <ul className="dropdown-course-info">
              <li>
                Calligraphy and artistic lettering
              </li>
              <li>
                Journaling and personalized stationery
              </li>
              <li>
                Handwritten letters and cards
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandwritingOverview;
