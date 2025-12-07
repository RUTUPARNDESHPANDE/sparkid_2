import React, { useState, useRef, useEffect } from "react";
import "../styles/CareerJob.css";
// import { API_BASE_URL } from "../api"; // Commented out - using Google Sheets instead
import { submitJobApplication } from "../utils/googleSheets";
import { GOOGLE_SHEETS_CONFIG } from "../config/googleSheets";

// jobData replaced with your provided positions
const jobData = [
  {
    id: 1,
    type: "Franchise Manager",
    category: "General",
    locations: ["Multiple Locations"],
    responsibilities:
      "Oversee daily operations of franchise branches, ensuring adherence to brand standards and operational excellence. Build strong relationships with franchise partners, providing continuous guidance, performance reviews, and support for business growth.",
    requirements:
      "Experience in franchise management, operations, or multi-unit retail leadership. Strong communication, leadership, and problem-solving skills to effectively support franchisees.",
    details: {
      primaryResponsibility:
        "Oversee daily operations of franchise branches and support franchise partners for business growth.",
      jobSpecification: [
        "Experience in franchise management or multi-unit leadership",
        "Strong communication and leadership skills",
        "Proven problem-solving and stakeholder management abilities",
      ],
      employmentType: "Full-time",
      workPlaceType: "Field / On-site",
      salary: "Commensurate with experience",
      experienceRequired: "2+ Years (preferably in franchise/multi-unit ops)",
      location: "Multiple Locations",
    },
  },
  {
    id: 2,
    type: "Business Development Associate",
    category: "General",
    locations: ["Multiple Locations"],
    responsibilities:
      "Identify and pursue new business opportunities through lead generation, market research, and outreach activities. Support the sales pipeline by engaging potential clients, presenting offerings, and maintaining follow-up communication.",
    requirements:
      "Strong interpersonal and communication abilities. Ability to analyze market trends, generate leads, and work in a target-driven environment.",
    details: {
      primaryResponsibility:
        "Generate leads, engage prospects, and support the sales pipeline to acquire new clients.",
      jobSpecification: [
        "Strong verbal and written communication skills",
        "Ability to generate and qualify leads",
        "Comfort working in a target-driven environment",
      ],
      employmentType: "Full-time",
      workPlaceType: "On-site / Hybrid",
      salary: "Competitive",
      experienceRequired: "0-2 Years",
      location: "Multiple Locations",
    },
  },
  {
    id: 3,
    type: "Business Development Manager",
    category: "General",
    locations: ["Multiple Locations"],
    responsibilities:
      "Develop and implement strategic growth plans to expand the organization's market presence and revenue. Build and manage key client relationships, lead negotiations, and oversee the complete business development cycle.",
    requirements:
      "Proven experience in sales or business development with a track record of achieving targets. Strong leadership, negotiation, and strategic planning skills.",
    details: {
      primaryResponsibility:
        "Drive strategic business growth, own the sales cycle, and manage key client relationships.",
      jobSpecification: [
        "Proven track record in sales or business development",
        "Strong negotiation and leadership skills",
        "Strategic planning and market expansion experience",
      ],
      employmentType: "Full-time",
      workPlaceType: "On-site / Hybrid",
      salary: "Performance-linked + Fixed",
      experienceRequired: "3+ Years",
      location: "Multiple Locations",
    },
  },
  {
    id: 4,
    type: "Zonal Manager",
    category: "General",
    locations: ["Multiple Locations"],
    responsibilities:
      "Manage operations, performance, and sales activities across multiple centers or branches within a designated zone. Monitor team performance, provide guidance to center managers, and ensure achievement of zonal goals.",
    requirements:
      "Experience in regional or zonal management, preferably in education, retail, or service sectors. Strong leadership, analytical, and team-management capabilities.",
    details: {
      primaryResponsibility:
        "Oversee multiple centers within a zone and ensure operational and sales targets are met.",
      jobSpecification: [
        "Experience in regional/zonal management",
        "Strong people management and analytical skills",
        "Ability to translate strategy into measurable local execution",
      ],
      employmentType: "Full-time",
      workPlaceType: "Field / Regional",
      salary: "Commensurate with experience",
      experienceRequired: "3+ Years",
      location: "Designated Zone (regional)",
    },
  },
  {
    id: 5,
    type: "Course Instructor",
    category: "Training",
    locations: ["Multiple Locations"],
    responsibilities:
      "Deliver engaging and structured lessons according to curriculum guidelines, ensuring student comprehension and progress. Assess learner performance through assignments, tests, and continuous feedback.",
    requirements:
      "Solid subject knowledge and prior teaching or training experience. Excellent communication skills and ability to simplify concepts for diverse learners.",
    details: {
      primaryResponsibility:
        "Teach courses, assess student progress, and adapt methods to learner needs.",
      jobSpecification: [
        "Prior teaching/training experience",
        "Excellent communication and lesson-planning skills",
        "Assessment and feedback experience",
      ],
      employmentType: "Part-time",
      workPlaceType: "On-site / Online",
      salary: "Hourly / Per-session (competitive)",
      experienceRequired: "1+ Years",
      location: "Multiple Locations",
    },
  },
  {
    id: 6,
    type: "Course Trainer",
    category: "Training",
    locations: ["Multiple Locations"],
    responsibilities:
      "Conduct training sessions, workshops, and practical demonstrations to help learners master specific skills or programs. Evaluate trainee performance and provide constructive feedback.",
    requirements:
      "Expertise in the relevant training domain with demonstrated practical and instructional skills. Strong presentation, mentoring, and organization abilities.",
    details: {
      primaryResponsibility:
        "Conduct practical training sessions and ensure trainees achieve industry-standard learning outcomes.",
      jobSpecification: [
        "Domain expertise and hands-on experience",
        "Strong presentation and mentoring skills",
        "Ability to design and evaluate practical assessments",
      ],
      employmentType: "Part-time",
      workPlaceType: "On-site / Workshop",
      salary: "Per-session / Competitive",
      experienceRequired: "2+ Years (domain-specific)",
      location: "Multiple Locations",
    },
  },
  {
    id: 7,
    type: "Telecaller",
    category: "Support",
    locations: ["Remote / Multiple Locations"],
    responsibilities:
      "Make outbound calls to prospective clients, provide information about services, and generate interest to support lead conversion. Maintain call logs and follow up with leads.",
    requirements:
      "Strong verbal communication skills with the ability to handle customer inquiries professionally. Basic computer proficiency and experience in telecalling or customer service.",
    details: {
      primaryResponsibility:
        "Conduct outbound calls, manage leads, and assist with customer engagement and conversions.",
      jobSpecification: [
        "Excellent verbal communication and phone etiquette",
        "Basic CRM/computer proficiency",
        "Experience in telecalling or customer support roles",
      ],
      employmentType: "Part-time",
      workPlaceType: "Remote / Office",
      salary: "Stipend or hourly",
      experienceRequired: "0-1 Years",
      location: "Remote / Multiple Locations",
    },
  },
];

// keep single filter option
const filters = ["All positions"];

function CareerJob() {
  const [selectedJob, setSelectedJob] = useState(jobData[0]);
  const [selectedFilter, setSelectedFilter] = useState("All positions");
  const [showApplicationForm] = useState(true);
  const [applicationJobTitle, setApplicationJobTitle] = useState(
    jobData[0].type
  );
  const jobDetailsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (selectedJob?.type) {
      setApplicationJobTitle(selectedJob.type);
    }
  }, [selectedJob]);

  const filteredJobs =
    selectedFilter === "All positions"
      ? jobData
      : jobData.filter((job) => job.category === selectedFilter);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (jobDetailsRef.current) {
      jobDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="job-container">
      {/* Top Filter Section */}
      <div className="job-filter">
        <h1>Current Job Openings</h1>
        <div className="filter-buttons">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`filter-button ${
                selectedFilter === filter ? "active-filter" : ""
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="job-content-section">
        {/* Left Section: Job Listings */}
        <div className="job-listings">
          <div className="job-list">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`job-item ${
                  selectedJob?.id === job.id ? "active" : ""
                }`}
                onClick={() => handleJobClick(job)}
              >
                <h3>{job.type}</h3>
                <div className="job-tags">
                  {job.locations.map((location, index) => (
                    <span key={index} className="job-tag">
                      {location}
                    </span>
                  ))}
                </div>
                <p className="job-content">
                  <span>Responsibilities:</span>
                  {job.responsibilities}
                </p>
                <p className="job-content">
                  <span>Requirements:</span>
                  {job.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Job Application */}
        <div className="job-details" ref={jobDetailsRef}>
          <div className="job-application-form" ref={formRef}>
            <h3>Job Application</h3>
            <p>Tell us more about you so we can get back to you with more info.</p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                
                // Commented out - old API integration
                // const formData = new FormData(e.target);
                // try {
                //   const response = await fetch(
                //     `${API_BASE_URL}/job-application`,
                //     {
                //       method: "POST",
                //       body: formData,
                //     }
                //   );

                //   if (response.ok) {
                //     alert("Application submitted successfully!");
                //     e.target.reset();
                //     setApplicationJobTitle(selectedJob?.type || jobData[0].type);
                //   } else {
                //     const errorText = await response.text();
                //     alert(errorText || "Failed to submit. Please try again.");
                //   }
                // } catch (error) {
                //   console.error("Error submitting the application:", error);
                //   alert("An error occurred. Please try again.");
                // }

                // Google Sheets integration
                try {
                  const formData = new FormData(e.target);
                  const resumeFile = formData.get("resume");

                  const applicationData = {
                    jobTitle: formData.get("jobTitle"),
                    fullName: formData.get("fullName"),
                    email: formData.get("email"),
                    phoneNumber: formData.get("phoneNumber"),
                    currentCTC: formData.get("currentCTC"),
                    expectedCTC: formData.get("expectedCTC"),
                    noticePeriod: formData.get("noticePeriod"),
                    portfolioLink: formData.get("portfolioLink") || "",
                    timestamp: new Date().toISOString(),
                  };

                  const result = await submitJobApplication(
                    GOOGLE_SHEETS_CONFIG.jobApplication,
                    applicationData,
                    resumeFile
                  );

                  if (result.success) {
                    alert("Application submitted successfully!");
                    e.target.reset();
                    setApplicationJobTitle(selectedJob?.type || jobData[0].type);
                  } else {
                    alert(result.message || "Failed to submit. Please try again.");
                  }
                } catch (error) {
                  console.error("Error submitting the application:", error);
                  alert("An error occurred. Please try again.");
                }
              }}
            >
              {/* Dropdown */}
              <div>
                <label>Job Title</label>
                <select
                  name="jobTitle"
                  value={applicationJobTitle}
                  onChange={(e) => setApplicationJobTitle(e.target.value)}
                  required
                  className="form-field"
                >
                  {jobData.map((j) => (
                    <option key={j.id} value={j.type}>
                      {j.type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Full Name</label>
                <input type="text" name="fullName" required className="form-field" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email" required className="form-field" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" required className="form-field" />
              </div>

              <div>
                <label>Current CTC</label>
                <input type="text" name="currentCTC" required className="form-field" />
              </div>

              <div>
                <label>Expected CTC</label>
                <input type="text" name="expectedCTC" required className="form-field" />
              </div>

              <div>
                <label>Notice Period</label>
                <input type="text" name="noticePeriod" required className="form-field" />
              </div>

              <div>
                <label>Upload your resume</label>
                <input type="file" name="resume" required className="form-field" />
              </div>

              <div>
                <label>Submit your portfolio link</label>
                <input type="text" name="portfolioLink" className="form-field" />
              </div>

              <button type="submit" className="apply-btn">
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerJob;
