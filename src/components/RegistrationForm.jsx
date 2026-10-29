import React, { useEffect, useState } from 'react';
import { submitToGoogleSheets } from '../utils/googleSheets';
import {
  EXAM_SESSIONS_STORAGE_KEY,
  parseExamSessions,
} from '../utils/hallTicket';
import '../styles/RegistrationForm.css';

const generateApplicationId = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `BSA-${year}-${random}`;
};

const saveToLocalStorage = (applicationData) => {
  try {
    const existing = JSON.parse(localStorage.getItem('sparkids_applications') || '[]');
    if (!Array.isArray(existing)) {
      throw new Error('Stored applications must be an array.');
    }
    existing.push(applicationData);
    localStorage.setItem('sparkids_applications', JSON.stringify(existing));
    return true;
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
    return false;
  }
};

const initialFormState = {
  candidateName: '',
  dateOfBirth: '',
  gender: '',
  mobile: '',
  email: '',
  guardianName: '',
  guardianMobile: '',
  relationship: '',
  school: '',
  grade: '',
  course: '',
  branch: '',
  examSessionId: '',
};

const RegistrationForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [examSessions, setExamSessions] = useState([]);

  useEffect(() => {
    try {
      setExamSessions(
        parseExamSessions(localStorage.getItem(EXAM_SESSIONS_STORAGE_KEY))
      );
    } catch (err) {
      console.error('Failed to load exam sessions:', err);
      setSubmissionError('Exam sessions could not be loaded. Please contact the academy.');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'course' ? { examSessionId: '' } : {}),
    }));
    setSubmissionError('');
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (name === 'course' && errors.examSessionId) {
      setErrors((prev) => ({ ...prev, examSessionId: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.candidateName.trim()) newErrors.candidateName = 'Full name is required.';
    if (!form.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required.';
    if (!form.gender) newErrors.gender = 'Gender is required.';

    if (!form.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(form.mobile.trim())) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits.';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.guardianName.trim()) newErrors.guardianName = 'Guardian name is required.';

    if (!form.guardianMobile.trim()) {
      newErrors.guardianMobile = 'Guardian mobile number is required.';
    } else if (!/^\d{10}$/.test(form.guardianMobile.trim())) {
      newErrors.guardianMobile = 'Guardian mobile number must be exactly 10 digits.';
    }

    if (!form.relationship) newErrors.relationship = 'Relationship is required.';
    if (!form.school.trim()) newErrors.school = 'School/Institution name is required.';
    if (!form.grade) newErrors.grade = 'Class/Grade is required.';
    if (!form.course) newErrors.course = 'Course/Program is required.';
    if (!form.branch.trim()) newErrors.branch = 'Branch/Franchise is required.';
    if (!form.examSessionId) newErrors.examSessionId = 'Exam session is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const selectedSession = examSessions.find(
      (session) => session.sessionId === form.examSessionId
    );
    if (!selectedSession) {
      setSubmissionError('Select an available exam session before submitting.');
      return;
    }

    setIsLoading(true);

    const applicationId = generateApplicationId();
    const applicationData = {
      applicationId,
      candidateName: form.candidateName.trim(),
      dateOfBirth: form.dateOfBirth,
      gender: form.gender,
      mobile: form.mobile.trim(),
      email: form.email.trim(),
      guardianName: form.guardianName.trim(),
      guardianMobile: form.guardianMobile.trim(),
      relationship: form.relationship,
      school: form.school.trim(),
      grade: form.grade,
      course: form.course,
      branch: form.branch.trim(),
      examSessionId: selectedSession.sessionId,
      examName: selectedSession.examName,
      examDate: selectedSession.examDate,
      examTime: selectedSession.examTime,
      reportingTime: selectedSession.reportingTime,
      examCentre: selectedSession.examCentre,
      status: 'Submitted',
      registrationDate: new Date().toISOString(),
      statusHistory: [
        { status: 'Submitted', changedAt: new Date().toISOString() },
      ],
    };

    if (!saveToLocalStorage(applicationData)) {
      setIsLoading(false);
      setSubmissionError('Your application could not be saved in this browser. Please try again or contact the academy.');
      return;
    }

    const webAppUrl = process.env.REACT_APP_GOOGLE_SHEETS_REGISTRATION_FORM || '';
    if (webAppUrl.trim()) {
      try {
        const result = await submitToGoogleSheets(webAppUrl, applicationData);
        if (!result.success) {
          setSubmissionError(`${result.message} Application ID: ${applicationId}`);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.error('Google Sheets submission error:', err);
        setSubmissionError(`The application could not be submitted. Application ID: ${applicationId}`);
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(false);
    setSubmissionError('');
    setForm(initialFormState);
    setErrors({});
    if (onSuccess) onSuccess(applicationData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {submissionError && <div className="form-error" role="alert">{submissionError}</div>}
      {/* Candidate Identity */}
      <div className="form-section">
        <h3 className="section-heading">Candidate Identity</h3>
        <div className="form-grid">
          <div className="form-group full-width">
            <label className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="candidateName"
              className={`form-input ${errors.candidateName ? 'error' : ''}`}
              value={form.candidateName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.candidateName && <span className="form-error">{errors.candidateName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Date of Birth <span className="required">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              className={`form-input ${errors.dateOfBirth ? 'error' : ''}`}
              value={form.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <span className="form-error">{errors.dateOfBirth}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Gender <span className="required">*</span>
            </label>
            <select
              name="gender"
              className={`form-select ${errors.gender ? 'error' : ''}`}
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {errors.gender && <span className="form-error">{errors.gender}</span>}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="form-section">
        <h3 className="section-heading">Contact Information</h3>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              Mobile Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              className={`form-input ${errors.mobile ? 'error' : ''}`}
              value={form.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
            />
            {errors.mobile && <span className="form-error">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>
      </div>

      {/* Parent/Guardian */}
      <div className="form-section">
        <h3 className="section-heading">Parent / Guardian Details</h3>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">
              Guardian Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="guardianName"
              className={`form-input ${errors.guardianName ? 'error' : ''}`}
              value={form.guardianName}
              onChange={handleChange}
              placeholder="Guardian's full name"
            />
            {errors.guardianName && <span className="form-error">{errors.guardianName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Guardian Mobile Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="guardianMobile"
              className={`form-input ${errors.guardianMobile ? 'error' : ''}`}
              value={form.guardianMobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
            />
            {errors.guardianMobile && <span className="form-error">{errors.guardianMobile}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Relationship <span className="required">*</span>
            </label>
            <select
              name="relationship"
              className={`form-select ${errors.relationship ? 'error' : ''}`}
              value={form.relationship}
              onChange={handleChange}
            >
              <option value="">Select relationship</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Guardian">Guardian</option>
              <option value="Other">Other</option>
            </select>
            {errors.relationship && <span className="form-error">{errors.relationship}</span>}
          </div>
        </div>
      </div>

      {/* Academic */}
      <div className="form-section">
        <h3 className="section-heading">Academic Information</h3>
        <div className="form-grid">
          <div className="form-group full-width">
            <label className="form-label">
              School / Institution Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="school"
              className={`form-input ${errors.school ? 'error' : ''}`}
              value={form.school}
              onChange={handleChange}
              placeholder="Enter school or institution name"
            />
            {errors.school && <span className="form-error">{errors.school}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Class / Grade <span className="required">*</span>
            </label>
            <select
              name="grade"
              className={`form-select ${errors.grade ? 'error' : ''}`}
              value={form.grade}
              onChange={handleChange}
            >
              <option value="">Select grade</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                <option key={g} value={String(g)}>
                  Grade {g}
                </option>
              ))}
            </select>
            {errors.grade && <span className="form-error">{errors.grade}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Course / Program <span className="required">*</span>
            </label>
            <select
              name="course"
              className={`form-select ${errors.course ? 'error' : ''}`}
              value={form.course}
              onChange={handleChange}
            >
              <option value="">Select course</option>
              <option value="Abacus">Abacus</option>
              <option value="Vedic Maths">Vedic Maths</option>
              <option value="Rubik's Cube">Rubik's Cube</option>
              <option value="Handwriting">Handwriting</option>
              <option value="Reading">Reading</option>
              <option value="Spelling Bee">Spelling Bee</option>
            </select>
            {errors.course && <span className="form-error">{errors.course}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">
              Branch / Franchise <span className="required">*</span>
            </label>
            <input
              type="text"
              name="branch"
              className={`form-input ${errors.branch ? 'error' : ''}`}
              value={form.branch}
              onChange={handleChange}
              placeholder="Enter branch or franchise name"
            />
            {errors.branch && <span className="form-error">{errors.branch}</span>}
          </div>
        </div>
      </div>

      {/* Exam session */}
      <div className="form-section">
        <h3 className="section-heading">Exam Session</h3>
        <div className="form-grid">
          <div className="form-group full-width">
            <label className="form-label">
              Available Session <span className="required">*</span>
            </label>
            <select
              name="examSessionId"
              className={`form-select ${errors.examSessionId ? 'error' : ''}`}
              value={form.examSessionId}
              onChange={handleChange}
            >
              <option value="">Select an exam session</option>
              {examSessions
                .filter((session) => session.course === form.course)
                .map((session) => (
                  <option key={session.sessionId} value={session.sessionId}>
                    {session.examName} — {session.examDate} at {session.examCentre}
                  </option>
                ))}
            </select>
            {errors.examSessionId && <span className="form-error">{errors.examSessionId}</span>}
            {form.course && !examSessions.some((session) => session.course === form.course) && (
              <span className="form-error">No exam sessions are currently available for this course.</span>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
};

export default RegistrationForm;
