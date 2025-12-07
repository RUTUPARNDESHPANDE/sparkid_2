import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.webp"; // Importing the image

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
            <h2 className="main-title">What is Handwriting?</h2>
            <p className="overview-description">
              Handwriting is more than penmanship — it is an essential skill that shapes a child's clarity of
              thought, expression, and academic performance.
              Our program uses scientific techniques to improve neatness, letter formation, and writing
              speed.
              Children develop stronger fine-motor control, better posture, and refined hand–eye
              coordination.
              With guided practice, they gain confidence in exams where speed and presentation matter.
              This program builds a lifelong foundation for beautiful writing and effective written
              communication.
            </p>
            <h3 className="sub-title">
              Unlock Your Child's Clarity, Neatness & Written Expression
            </h3>
            <p className="overview-description">
              Unlock your child's ability to write clearly and confidently with structured handwriting
              techniques.
              The program strengthens fine-motor control and teaches proper letter formation, spacing, and
              consistency.
              Children gradually improve writing speed while maintaining neatness and legibility.
              This results in cleaner notebooks, better exam presentation, and higher confidence in written
              work.
              The skills gained create a lifelong foundation for effective and professional written
              communication.
            </p>
            <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Neat and legible writing
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Proper letter formation & spacing
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Improved pencil grip and pressure control
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Better hand–eye coordination
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Strong fine motor development
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Increased writing speed
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Clean presentation and workbook neatness
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Boosted confidence in academic performance
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
                <h3>1. Lexi-Base (Foundation Level)</h3>
                <span>{expandedSection === "level1" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level1" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 5 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 2 Month
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Letter Formation & Motor Skill Development
                  </p>
                  <p className="dropdown-description">
                    The Basic level introduces children to proper letter shapes, strokes, and spacing. They practice
                    uppercase and lowercase letters, simple words, and correct posture.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Correct letter formation
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Proper spacing between letters & words
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Pencil grip correction
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Line alignment & writing direction
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Stroke mastery:</span> Practice of basic strokes for steady and neat writing.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Letter formation:</span> Guided shaping of individual letters with correct spacing.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Motor-skill worksheets:</span> Activities that strengthen fine-motor control.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Live correction:</span> Immediate feedback to fix writing habits early.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Tips for posture and pencil grip improvement at home.
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
                <h3>2. Lexi-Flow Improvement Level</h3>
                <span>{expandedSection === "level2" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level2" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 7 years and above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 3 Months
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Flow, Connectivity & Style
                  </p>
                  <p className="dropdown-description">
                    Cursive writing helps students develop faster and smoother writing skills. Children learn to
                    connect letters, maintain rhythm, and develop elegant handwriting patterns.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Smooth letter connectivity
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved writing flow & rhythm
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Better hand movement control
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Faster writing with neatness
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Consistency practice:</span> Exercises to develop uniform and neat writing.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Speed training:</span> Structured sheets to increase writing pace.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Word formation practice:</span> Activities to improve spacing and alignment.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Model-based demonstrations:</span> Step-by-step guidance for print/cursive clarity.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Recommendations for daily writing reinforcement.
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
                <h3>3. Lexi-Advance Advance level</h3>
                <span>{expandedSection === "level3" ? "-" : "+"}</span>
              </div>
              {expandedSection === "level3" && (
                <div className="dropdown-content">
                  <p className="dropdown-course-info">
                    <span>Eligibility:</span> 10 Years & Above
                  </p>
                  <p className="dropdown-course-info">
                    <span>Duration:</span> 2 Month
                  </p>
                  <p className="dropdown-course-info">
                    <span>Focus:</span> Speed, Precision & Presentation
                  </p>
                  <p className="dropdown-description">
                    This level trains students to write faster without losing legibility. It focuses heavily on writing
                    stamina, clean presentation, and structured workbook habits.
                  </p>
                  <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                  <ul className="benefits-list">
                    <li>
                      <img src={point} alt="Checkpoint" /> Improved writing speed
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Better spacing & alignment
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Clean and attractive page presentation
                    </li>
                    <li>
                      <img src={point} alt="Checkpoint" /> Faster classwork and homework completion
                    </li>
                  </ul>
                  <h4 className="dropdown-subtitle">Learning Methodology</h4>
                  <p className="dropdown-course-info">
                    <span>Speed-building worksheets:</span> Practice sheets for exam-oriented writing speed.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Style refinement:</span> Guidance to develop clean, mature handwriting.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Paragraph practice:</span> Improving consistency in longer written responses.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Live feedback:</span> Real-time evaluation to enhance presentation quality.
                  </p>
                  <p className="dropdown-course-info">
                    <span>Parent updates:</span> Suggestions for maintaining writing discipline.
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
              Handwriting development engages multiple parts of the brain responsible for:
            </p>
            <ul className="dropdown-course-info">
              <li>
                <span>Fine Motor Skills:</span> Improved finger strength, dexterity, and control
              </li>
              <li>
                <span>Visual Processing:</span> Understanding shapes, spacing, and letter orientation
              </li>
              <li>
                <span>Cognitive Organization:</span> Planning, sequencing, and structured writing
              </li>
              <li>
                <span>Memory:</span> Developing stroke patterns and muscle memory
              </li>
            </ul>
            <p className="overview-description">
              This combination builds strong neural connections that support academic success and long
              term learning efficiency.
            </p>

            <h3 className="sub-title">
              Key Skills Enhanced Through Handwriting Training
            </h3>
            <ul className="key-skills-list">
              <li>
                <span>Fine Motor Development:</span>
                Writing exercises build finger strength and coordination.
                <br />
                <span>Result:</span> Improved control for writing, drawing, and classroom tasks.
              </li>
              <li>
                <span>Visual-Spatial Awareness:</span>
                Children learn spacing, alignment, and proportion.
                <br />
                <span>Result:</span> Cleaner notebooks and better academic presentation.
              </li>
              <li>
                <span>Muscle Memory:</span>
                Repeated practice makes writing automatic.
                <br />
                <span>Result:</span> Faster and more comfortable writing.
              </li>
              <li>
                <span>Grip & Control:</span>
                Correct pencil positioning improves control and reduces strain.
                <br />
                <span>Result:</span> Better handwriting and reduced fatigue.
              </li>
              <li>
                <span>Concentration & Patience:</span>
                Focused writing tasks increase attention span.
                <br />
                <span>Result:</span> Students become more disciplined and detail-oriented.
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
                Neat writing boosts scores in written exams
              </li>
              <li>
                Improved speed helps complete papers on time
              </li>
              <li>
                Better notebook presentation earns appreciation from teachers
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Confidence Building </h4>
            <ul className="dropdown-course-info">
              <li>
                Children gain pride in their handwriting
              </li>
              <li>
                Clear writing boosts overall communication skills
              </li>
              <li>
                Reduces frustration during classwork and homework
              </li>
            </ul>
            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>
                Fine motor skills support drawing, craft, and daily tasks
              </li>
              <li>
                Writing confidence extends to essay writing and creative work
              </li>
              <li>
                Helps in competitive exams requiring long written answers
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Foundation for Future Learning </h4>
            <ul className="dropdown-course-info">
              <li>
                Handwriting discipline strengthens foundational academic habits
              </li>
              <li>
                Builds structure, organization, and clarity in thinking
              </li>
              <li>
                Prepares children for higher grades where writing demands increase
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandwritingOverview;
