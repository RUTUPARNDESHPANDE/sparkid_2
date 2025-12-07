import React, { useState } from "react";
import "../styles/AbacusOverview.css"; // Using the same CSS file
import point from "../Assets/courses-img/checkpoint.png"; // Importing the image

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
                        <h2 className="main-title">What is the Spelling Bee Program?</h2>
                        <p className="overview-description">
                            The Spelling Bee is not just a competition; it is a celebration of language. Our program is designed
                            to help students master spelling, vocabulary, and pronunciation. We move beyond rote
                            memorization to teach the rules of etymology (word origins), phonetics, and usage. Whether for
                            school exams or international competitions, our training equips students with the linguistic tools to
                            excel.
                        </p>
                        <h3 className="sub-title">
                            Master the Art of Language
                        </h3>
                        <p className="overview-description">
                            Words are power.
                            A strong command of spelling and vocabulary allows children to express themselves clearly and
                            confidently.
                            Our Spelling Bee program transforms students into "word detectives" who understand how words are
                            built.
                            We focus on root words, prefixes, suffixes, and language patterns.
                            This deep understanding helps them tackle even the most difficult words with ease, boosting their
                            confidence in writing and public speaking.
                        </p>
                        <h3 className="sub-title">Skills Enhanced Through Our Program</h3>
                        <ul className="benefits-list">
                            <li>
                                <img src={point} alt="Checkpoint" /> Accurate spelling of complex words
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Extensive vocabulary growth
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Understanding of word origins (Etymology)
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Correct pronunciation and phonetics
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Improved memory and recall
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Confidence under pressure
                            </li>
                            <li>
                                <img src={point} alt="Checkpoint" /> Public speaking skills
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
                                <h3>1. Word Wizard (Foundation Level)</h3>
                                <span>{expandedSection === "level1" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level1" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> 5 to 7 Years
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 3 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Phonics & Common Words
                                    </p>
                                    <p className="dropdown-description">
                                        This level builds a strong foundation by teaching phonics rules, sight words, and common spelling
                                        patterns. It is designed to make spelling fun and less intimidating for young learners.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Understanding vowel and consonant sounds
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Spelling high-frequency words
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Basic pluralization rules
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Syllable breakdown
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Spelling games and puzzles:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Picture-word association:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Rhyming word exercises:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Weekly mini-quizzes:</span>
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
                                <h3>2. Language Leader (Intermediate Level)</h3>
                                <span>{expandedSection === "level2" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level2" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> 8 to 10 Years
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 3 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Rules & Exceptions
                                    </p>
                                    <p className="dropdown-description">
                                        Students dive deeper into the complexities of the English language. They learn about silent letters,
                                        homophones, and more advanced spelling rules.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Mastering silent letters and double consonants
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Differentiating homophones (e.g., their/there)
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Prefixes and suffixes usage
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Compound words
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Word sorting activities:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Dictation practice:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Crosswords and anagrams:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Interactive spelling bees in class:</span>
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
                                <h3>3. Spelling Champion (Advanced Level)</h3>
                                <span>{expandedSection === "level3" ? "-" : "+"}</span>
                            </div>
                            {expandedSection === "level3" && (
                                <div className="dropdown-content">
                                    <p className="dropdown-course-info">
                                        <span>Eligibility:</span> 11 Years & Above
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Duration:</span> 3 Months
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Focus:</span> Etymology & Competition Prep
                                    </p>
                                    <p className="dropdown-description">
                                        This level is for students aiming for excellence. We explore word origins (Latin, Greek, French),
                                        complex vocabulary, and strategies for competitive spelling bees.
                                    </p>
                                    <h4 className="dropdown-subtitle">Key Skills Developed</h4>
                                    <ul className="benefits-list">
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Etymology (roots and origins)
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Spelling obscure and difficult words
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Pronunciation keys and diacritical marks
                                        </li>
                                        <li>
                                            <img src={point} alt="Checkpoint" /> Competition strategies and poise
                                        </li>
                                    </ul>
                                    <h4 className="dropdown-subtitle">Learning Methodology</h4>
                                    <p className="dropdown-course-info">
                                        <span>Mock spelling bee competitions:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Root word analysis:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Advanced vocabulary flashcards:</span>
                                    </p>
                                    <p className="dropdown-course-info">
                                        <span>Public speaking drills:</span>
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
                            Spelling is a cognitive workout that involves multiple brain areas:
                        </p>
                        <ul className="dropdown-course-info">
                            <li>
                                <span>Visual Memory:</span> Recalling the "shape" of words.
                            </li>
                            <li>
                                <span>Auditory Processing:</span> Breaking down sounds (phonemes).
                            </li>
                            <li>
                                <span>Semantic Processing:</span> Understanding meaning and context.
                            </li>
                        </ul>
                        <p className="overview-description">
                            Our training integrates these processes, leading to sharper memory and faster cognitive
                            processing speeds.
                        </p>

                        <h3 className="sub-title">
                            Key Skills Enhanced Through Spelling Bee Training
                        </h3>
                        <ul className="key-skills-list">
                            <li>
                                <span>Memory Power:</span> Memorizing thousands of words expands brain capacity.
                                <br />
                                <span>Result:</span> Better retention in all academic subjects.
                            </li>
                            <li>
                                <span>Focus & Composure:</span> Competitions teach students to stay calm under pressure.
                                <br />
                                <span>Result:</span> Improved performance in exams and interviews.
                            </li>
                            <li>
                                <span>Linguistic Logic:</span> Understanding rules helps in learning new languages.
                                <br />
                                <span>Result:</span> Ease in learning foreign languages.
                            </li>
                            <li>
                                <span>Research Skills:</span> Learning to use dictionaries and study guides effectively.
                                <br />
                                <span>Result:</span> Independent learning habits.
                            </li>
                        </ul>
                    </div>
                )}

                {activeTab === "opportunities" && (
                    <div className="opportunities-content">
                        <h2 className="main-title">Opportunities</h2>
                        <h4 className="dropdown-subtitle">1. Academic Brilliance </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Superior writing skills (essays, reports)
                            </li>
                            <li>
                                High scores in standardized tests (SAT, GRE, etc.)
                            </li>
                            <li>
                                Impressive vocabulary for debates and speeches
                            </li>
                        </ul>
                        <h4 className="dropdown-subtitle">2. Competitive Success </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Participation in Regional, National, and International Spelling Bees
                            </li>
                            <li>
                                Winning scholarships and awards
                            </li>
                            <li>
                                Recognition in school and community
                            </li>
                        </ul>
                        <h4 className="dropdown-subtitle">3. Communication Mastery </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Precise and effective communication
                            </li>
                            <li>
                                Ability to articulate complex ideas
                            </li>
                            <li>
                                Professional advantage in future careers
                            </li>
                        </ul>
                        <h4 className="dropdown-subtitle">4. Confidence & Poise </h4>
                        <ul className="dropdown-course-info">
                            <li>
                                Overcoming stage fright
                            </li>
                            <li>
                                Handling success and failure with grace
                            </li>
                            <li>
                                Building a strong self-image
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpellingBeeOverview;
