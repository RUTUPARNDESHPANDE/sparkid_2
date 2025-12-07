import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.webp"; // Importing the image

const SpellingBeeOverview = () => {
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
                        <h2 className="main-title">What is Spelling Bee Training?</h2>
                        <p className="overview-description">
                            Spelling Bee training builds strong linguistic foundations by integrating phonics, memory
                            techniques, and vocabulary mastery.
                            Children learn not only how to spell words, but also how they are formed, pronounced, and
                            used in real language.
                            The program enhances concentration, retention, listening skills, and stage confidence.
                            Through engaging challenges and spelling strategies, students develop superior communication
                            abilities.
                            This training equips children for competitions while building valuable academic and lifelong
                            language skills.
                        </p>
                        <h3 className="sub-title">
                            Unlock Your Child's Vocabulary, Memory & Communication Skills
                        </h3>
                        <p className="overview-description">
                            This program unlocks your child's ability to understand words deeply through phonics, patterns, and
                            structured practice.
                            Students build strong vocabulary, better pronunciation, and accurate spelling skills.
                            The training improves memory retention, listening ability, and stage confidence through regular
                            challenges.
                            Children become more articulate and comfortable expressing themselves in academic and
                            public settings.
                            These skills strengthen language proficiency and prepare them for competitions and future
                            communication demands.
                        </p>
                        <h3 className="sub-title">Skills Enhanced Through Spelling Bee</h3>
                        <ul className="benefits-list">
                            <li>
                                <img src={point} alt="Checkpoint" /> Strong vocabulary & word knowledge
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Correct pronunciation and phonetic understanding
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Improved memory retention & recall
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Confident public speaking and articulation
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Better listening skills
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Stronger reading & writing abilities
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Enhanced focus and concentration
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Competitive spirit & stage presence
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
                                <h3>1. The Word Map — Foundation Level</h3>
                                <span>{expandedSection === "level1" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level1" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> Ages 6–8
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 3 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Phonics, Basic Vocabulary & Spelling Patterns
                                    </p>
                                    <p className="dropdown-description">
                                        This level introduces young learners to the world of words through engaging activities, phonics, and
                                        simple spelling rules. Children begin building their foundation for decoding and spelling
                                        words confidently.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Understanding basic phonics and sound patterns
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Recognizing simple word families
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Building beginner vocabulary
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Improving memory through fun spelling games
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Sound-based learning:</span> Phonics-driven teaching of basic spelling patterns.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Interactive games:</span> Activities to build interest and retention.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Practice lists:</span> Simple word lists for consistent improvement.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Oral drills:</span> Strengthening listening and response skills.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Parent updates:</span> Support sheets for home practice.
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
                                <h3>2. Word Build — Intermediate Level</h3>
                                <span>{expandedSection === "level2" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level2" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> Ages 8–10
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 4 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Vocabulary Expansion & Word Usage
                                    </p>
                                    <p className="dropdown-description">
                                        The intermediate level deepens the child's vocabulary knowledge. Students learn advanced
                                        spelling lists, root words, synonyms, antonyms, and usage rules. Oral spelling activities help
                                        sharpen listening and pronunciation skills.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Understanding advanced word lists
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Enhanced vocabulary and word usage
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Oral spelling confidence
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Better listening and concentration
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Pattern recognition:</span> Teaching word families and advanced patterns.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Vocabulary expansion:</span> Building word usage and meaning.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Mock tests:</span> Practice rounds to strengthen confidence.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Pronunciation drills:</span> Improving clarity and correctness.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Parent updates:</span> Weekly revision guidance.
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
                                <h3>3. Word Prep — Advanced Level</h3>
                                <span>{expandedSection === "level3" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level3" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> Age 10+
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 6 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Competition Preparation & Mastery
                                    </p>
                                    <p className="dropdown-description">
                                        This level prepares students for school, national, and international Spelling Bee contests.
                                        Children master complex words, apply memory strategies, and practice stage confidence.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Mastery of complex spelling lists
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Strong memory and recall abilities
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Confident stage presence
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Ability to decode unfamiliar words
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Competition training:</span> Preparing students for stage-level spelling rounds.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Memory techniques:</span> Strategies for long-term retention of difficult words.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Word mastery exercises:</span> Advanced lists and usage activities.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Stage-practice drills:</span> Building speaking confidence and timing.
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Parent updates:</span> Insights for competition readiness.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === "details" && (
                    <div className="details-content">
                        <h2 className="main-title">The Science Behind Spelling Bee Training</h2>
                        <p className="overview-description">
                            Spelling Bee training strengthens the brain's language-processing abilities. Children learn:
                        </p>
                        <ul className="dropdown-course-info">
                            <li>
                                <span>Phonemic Awareness:</span> Identifying sounds within words
                            </li>
                            <li>
                                <span>Morphological Understanding:</span> Learning roots, prefixes, and suffixes
                            </li>
                            <li>
                                <span>Etymology:</span> Understanding word origins
                            </li>
                            <li>
                                <span>Semantic Awareness:</span> Learning meanings and usage
                            </li>
                            <li>
                                <span>Auditory Processing:</span> Listening accurately and responding quickly
                            </li>
                        </ul>
                        <p className="overview-description">
                            These components significantly improve communication skills and academic performance.
                        </p>

                        <h3 className="sub-title">
                            Key Skills Enhanced Through Spelling Bee
                        </h3>
                        <ul className="key-skills-list">
                            <li>
                                <span>Vocabulary Mastery:</span>
                                Children learn hundreds of words, their meanings, and pronunciation.
                                <br />
                                <span>Result:</span> Stronger reading, writing, and communication skills.
                            </li>
                            <li>
                                <span>Memory & Recall:</span>
                                Techniques such as chunking, visualization, and repetition build memory power.
                                <br />
                                <span>Result:</span> Improved academic recall in all subjects.
                            </li>
                            <li>
                                <span>Listening Skills:</span>
                                Students listen to pronunciations and spellings with precision.
                                <br />
                                <span>Result:</span> Better classroom focus and comprehension.
                            </li>
                            <li>
                                <span>Pronunciation & Speech:</span>
                                Correct phonetics improve clarity of speaking.
                                <br />
                                <span>Result:</span> More confident public communication.
                            </li>
                            <li>
                                <span>Confidence & Stage Presence:</span>
                                Mock contests and oral drills build performance skills.
                                <br />
                                <span>Result:</span> Students communicate confidently in competitions and presentations.
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
                                Strong vocabulary boosts reading and writing performance
                            </li>
                            <li>
                                Better spelling improves exam answers
                            </li>
                            <li>
                                Enhanced listening and memory improve performance in all subjects
                            </li>
                        </ul>
                        <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
                        <p className="dropdown-course-info">Students gain preparation for:</p>
                        <ul className="dropdown-course-info">
                            <li>School Spelling Bee competitions</li>
                            <li>National & International Spelling Bee contests</li>
                            <li>English Olympiads</li>
                        </ul>
                        <p className="dropdown-course-info">Participation in competitions boosts resilience, focus, and confidence.</p>
                        <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Effective communication
                            </li>
                            <li>
                                Improved language foundation
                            </li>
                            <li>
                                Public speaking confidence
                            </li>
                            <li>
                                Strong memory retention
                            </li>
                        </ul>
                        <h4 className="dropdown-subtitle">4. Future Readiness </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Strong verbal skills support careers in law, media, business, academia, and public
                                speaking
                            </li>
                            <li>
                                Helps students excel in debates, presentations, and interviews
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpellingBeeOverview;
