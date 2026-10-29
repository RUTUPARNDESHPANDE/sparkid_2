import React, { useState, useEffect } from 'react';
import HallTicketCard from './HallTicketCard';
import {
  APPLICATION_STATUSES,
  EXAM_SESSIONS_STORAGE_KEY,
  REVIEW_STATUSES,
  canAccessHallTicket,
  createHallTicketNumber,
  parseExamSessions,
  withStatusHistory,
} from '../utils/hallTicket';
import '../styles/AdminPanel.css';

const COURSES = ['Abacus', 'Vedic Maths', "Rubik's Cube", 'Handwriting', 'Reading', 'Spelling Bee'];
const STATUSES = APPLICATION_STATUSES;
const EMPTY_SESSION_FORM = {
  examName: '',
  course: '',
  examDate: '',
  examTime: '',
  reportingTime: '',
  examCentre: '',
};

const statusClassMap = {
  Submitted: 'submitted',
  'Under Review': 'under-review',
  'Additional Information Required': 'additional-info',
  Approved: 'approved',
  Rejected: 'rejected',
  'Hall Ticket Generated': 'ticket-generated',
  'Hall Ticket Reissued': 'ticket-generated',
  'Hall Ticket Cancelled': 'rejected',
};

const getStatusClass = (status) => statusClassMap[status] || 'submitted';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [applications, setApplications] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [adminError, setAdminError] = useState('');
  const [examSessions, setExamSessions] = useState([]);
  const [sessionForm, setSessionForm] = useState(EMPTY_SESSION_FORM);
  const [editingSessionId, setEditingSessionId] = useState('');
  const [sessionError, setSessionError] = useState('');

  useEffect(() => {
    if (!isLoggedIn) return;

    try {
      const stored = JSON.parse(localStorage.getItem('sparkids_applications') || '[]');
      if (!Array.isArray(stored)) {
        throw new Error('Stored applications must be an array.');
      }
      setApplications(stored);
      setAdminError('');
    } catch (err) {
      console.error('Failed to load applications from localStorage:', err);
      setAdminError('Applications could not be loaded from this browser.');
    }

    try {
      setExamSessions(
        parseExamSessions(localStorage.getItem(EXAM_SESSIONS_STORAGE_KEY))
      );
      setSessionError('');
    } catch (err) {
      console.error('Failed to load exam sessions:', err);
      setSessionError('Exam sessions could not be loaded from this browser.');
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'sparkids@admin';
    if (password === adminPassword) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    setApplications([]);
    setSearchText('');
    setFilterCourse('');
    setFilterStatus('');
    setSelectedApp(null);
    setAdminError('');
  };

  const updateApplication = (applicationId, newStatus, details = {}) => {
    const updated = applications.map((app) => app.applicationId === applicationId
      ? withStatusHistory(app, newStatus, details)
      : app);
    try {
      localStorage.setItem('sparkids_applications', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save application changes:', err);
      setAdminError('Changes could not be saved in this browser. Please try again.');
      return null;
    }

    setApplications(updated);
    setAdminError('');
    return updated.find((app) => app.applicationId === applicationId) || null;
  };

  const saveApplicationFields = (applicationId, fields) => {
    const updated = applications.map((app) =>
      app.applicationId === applicationId ? { ...app, ...fields } : app
    );
    try {
      localStorage.setItem('sparkids_applications', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save application fields:', err);
      setAdminError('Application changes could not be saved in this browser.');
      return;
    }
    setApplications(updated);
    setAdminError('');
  };

  const updateStatus = (applicationId, newStatus) => {
    const application = applications.find((app) => app.applicationId === applicationId);
    if (!application || !REVIEW_STATUSES.includes(newStatus)) return;

    if (newStatus === 'Rejected' && !application.internalReason?.trim()) {
      setAdminError('Add an internal review reason before rejecting this application.');
      return;
    }
    if (
      ['Rejected', 'Additional Information Required'].includes(newStatus) &&
      !application.candidateMessage?.trim()
    ) {
      setAdminError('Add a candidate-facing message before changing to this status.');
      return;
    }

    updateApplication(applicationId, newStatus);
  };

  const persistExamSessions = (sessions) => {
    try {
      localStorage.setItem(EXAM_SESSIONS_STORAGE_KEY, JSON.stringify(sessions));
    } catch (err) {
      console.error('Failed to save exam sessions:', err);
      setSessionError('Exam session changes could not be saved in this browser.');
      return false;
    }
    setExamSessions(sessions);
    setSessionError('');
    return true;
  };

  const handleExamSessionSubmit = (event) => {
    event.preventDefault();
    if (
      editingSessionId &&
      applications.some((app) => app.examSessionId === editingSessionId)
    ) {
      setSessionError('This session has registrations and can no longer be edited. Create a new session instead.');
      return;
    }

    const sessionId = editingSessionId || `EXAM-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const session = { ...sessionForm, sessionId };
    const updatedSessions = editingSessionId
      ? examSessions.map((item) => item.sessionId === editingSessionId ? session : item)
      : [...examSessions, session];

    if (persistExamSessions(updatedSessions)) {
      setSessionForm(EMPTY_SESSION_FORM);
      setEditingSessionId('');
    }
  };

  const editExamSession = (session) => {
    if (applications.some((app) => app.examSessionId === session.sessionId)) {
      setSessionError('This session has registrations and is locked. Create a new session for changes.');
      return;
    }
    setSessionForm({
      examName: session.examName,
      course: session.course,
      examDate: session.examDate,
      examTime: session.examTime,
      reportingTime: session.reportingTime,
      examCentre: session.examCentre,
    });
    setEditingSessionId(session.sessionId);
    setSessionError('');
  };

  const deleteExamSession = (session) => {
    if (applications.some((app) => app.examSessionId === session.sessionId)) {
      setSessionError('This session has registrations and cannot be deleted.');
      return;
    }
    if (!window.confirm(`Delete the ${session.examName} session?`)) return;

    persistExamSessions(
      examSessions.filter((item) => item.sessionId !== session.sessionId)
    );
  };

  const generateHallTicket = (application) => {
    if (application.status !== 'Approved') return;

    const requiredFields = ['examTime', 'reportingTime', 'examCentre'];
    if (requiredFields.some((field) => !application[field]?.trim())) {
      setAdminError('Add exam time, reporting time, and exam centre before generating this ticket.');
      return;
    }

    const updated = updateApplication(application.applicationId, 'Hall Ticket Generated', {
      hallTicketNumber: createHallTicketNumber(application.applicationId, 1),
      ticketVersion: 1,
      historyDetails: { action: 'generated' },
    });
    if (updated) setSelectedApp(updated);
  };

  const reissueHallTicket = (application) => {
    if (!canAccessHallTicket(application) && application.status !== 'Hall Ticket Cancelled') {
      return;
    }

    const ticketVersion = (application.ticketVersion || 1) + 1;
    const updated = updateApplication(application.applicationId, 'Hall Ticket Reissued', {
      hallTicketNumber: createHallTicketNumber(application.applicationId, ticketVersion),
      ticketVersion,
      historyDetails: { action: 'reissued' },
    });
    if (updated) setSelectedApp(updated);
  };

  const cancelHallTicket = (application) => {
    if (!canAccessHallTicket(application)) return;

    const reason = window.prompt('Enter the reason for cancelling this hall ticket:');
    if (reason === null) return;
    if (!reason.trim()) {
      setAdminError('A cancellation reason is required.');
      return;
    }

    updateApplication(application.applicationId, 'Hall Ticket Cancelled', {
      historyDetails: { action: 'cancelled', reason: reason.trim() },
    });
  };

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      !searchText ||
      app.candidateName?.toLowerCase().includes(searchText.toLowerCase()) ||
      app.applicationId?.toLowerCase().includes(searchText.toLowerCase());
    const matchesCourse = !filterCourse || app.course === filterCourse;
    const matchesStatus = !filterStatus || app.status === filterStatus;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const countByStatus = (s) => applications.filter((a) => a.status === s).length;

  const handleExportCSV = () => {
    const headers = [
      'Application ID',
      'Name',
      'DOB',
      'Gender',
      'Mobile',
      'Email',
      'Guardian',
      'School',
      'Grade',
      'Course',
      'Branch',
      'Exam Name',
      'Exam Session ID',
      'Exam Date',
      'Exam Time',
      'Reporting Time',
      'Exam Centre',
      'Status',
      'Hall Ticket Number',
      'Registration Date',
    ];

    const escapeCSV = (val) => {
      const str = val == null ? '' : String(val);
      return str.includes(',') || str.includes('"') || str.includes('\n')
        ? `"${str.replace(/"/g, '""')}"`
        : str;
    };

    const rows = applications.map((app) =>
      [
        app.applicationId,
        app.candidateName,
        app.dateOfBirth,
        app.gender,
        app.mobile,
        app.email,
        app.guardianName,
        app.school,
        app.grade,
        app.course,
        app.branch,
        app.examName,
        app.examSessionId,
        app.examDate,
        app.examTime,
        app.reportingTime,
        app.examCentre,
        app.status,
        app.hallTicketNumber,
        app.registrationDate,
      ]
        .map(escapeCSV)
        .join(',')
    );

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `sparkids_applications_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  /* ── Login View ── */
  if (!isLoggedIn) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card">
          <div className="admin-badge">ADMIN</div>
          <h1>Admin Panel</h1>
          <p>Brave SparKids Academy</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError('');
                }}
                placeholder="Enter admin password"
              />
              {loginError && <span className="form-error">{loginError}</span>}
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Dashboard View ── */
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h3>
            Brave SparKids
            <br />
            Academy
          </h3>
          <span className="admin-badge">ADMIN</span>
        </div>

        <div className="sidebar-stats">
          <div className="sidebar-stat-item">
            <span className="stat-label">Total</span>
            <span className="stat-value">{applications.length}</span>
          </div>
          <div className="sidebar-stat-item">
            <span className="stat-label">Approved</span>
            <span className="stat-value">{countByStatus('Approved')}</span>
          </div>
          <div className="sidebar-stat-item">
            <span className="stat-label">Pending</span>
            <span className="stat-value">
              {countByStatus('Submitted') +
                countByStatus('Under Review') +
                countByStatus('Additional Information Required')}
            </span>
          </div>
          <div className="sidebar-stat-item">
            <span className="stat-label">Rejected</span>
            <span className="stat-value">{countByStatus('Rejected')}</span>
          </div>
        </div>

        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-main-header">
          <h2>Applications ({filteredApps.length})</h2>
          <button className="export-btn" onClick={handleExportCSV}>
            ⬇️ Export CSV
          </button>
        </div>

        {adminError && <div className="admin-error-message" role="alert">{adminError}</div>}

        <section className="exam-session-manager">
          <h3>Exam Sessions</h3>
          <p>Set exam details here; candidates can only select sessions created by an administrator.</p>
          {sessionError && <div className="admin-error-message" role="alert">{sessionError}</div>}
          <form className="exam-session-form" onSubmit={handleExamSessionSubmit}>
            <input
              aria-label="Exam name"
              className="filter-input"
              placeholder="Exam name"
              value={sessionForm.examName}
              onChange={(event) => setSessionForm({ ...sessionForm, examName: event.target.value })}
              required
            />
            <select
              aria-label="Course"
              className="filter-select"
              value={sessionForm.course}
              onChange={(event) => setSessionForm({ ...sessionForm, course: event.target.value })}
              required
            >
              <option value="">Select course</option>
              {COURSES.map((course) => <option key={course} value={course}>{course}</option>)}
            </select>
            <input
              aria-label="Exam date"
              type="date"
              className="filter-input"
              value={sessionForm.examDate}
              onChange={(event) => setSessionForm({ ...sessionForm, examDate: event.target.value })}
              required
            />
            <input
              aria-label="Exam time"
              type="time"
              className="filter-input"
              value={sessionForm.examTime}
              onChange={(event) => setSessionForm({ ...sessionForm, examTime: event.target.value })}
              required
            />
            <input
              aria-label="Reporting time"
              type="time"
              className="filter-input"
              value={sessionForm.reportingTime}
              onChange={(event) => setSessionForm({ ...sessionForm, reportingTime: event.target.value })}
              required
            />
            <input
              aria-label="Exam centre"
              className="filter-input"
              placeholder="Exam centre / venue"
              value={sessionForm.examCentre}
              onChange={(event) => setSessionForm({ ...sessionForm, examCentre: event.target.value })}
              required
            />
            <div className="exam-session-form-actions">
              <button className="btn-generate-ht" type="submit">
                {editingSessionId ? 'Update Session' : 'Add Session'}
              </button>
              {editingSessionId && (
                <button
                  className="btn-view-details"
                  type="button"
                  onClick={() => {
                    setSessionForm(EMPTY_SESSION_FORM);
                    setEditingSessionId('');
                    setSessionError('');
                  }}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
          {examSessions.length > 0 ? (
            <ul className="exam-session-list">
              {examSessions.map((session) => {
                const isInUse = applications.some((app) => app.examSessionId === session.sessionId);
                return (
                  <li key={session.sessionId}>
                    <div>
                      <strong>{session.examName} — {session.course}</strong>
                      <span>{session.examDate}, {session.examTime} (report at {session.reportingTime})</span>
                      <span>{session.examCentre}</span>
                    </div>
                    <div className="exam-session-actions">
                      <button
                        className="btn-view-details"
                        type="button"
                        disabled={isInUse}
                        onClick={() => editExamSession(session)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-view-details"
                        type="button"
                        disabled={isInUse}
                        onClick={() => deleteExamSession(session)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="exam-session-empty">No exam sessions created yet.</p>
          )}
        </section>

        {/* Stats Row */}
        <div className="stats-row">
          {STATUSES.map((s) => (
            <div key={s} className={`stat-card stat-card--${getStatusClass(s)}`}>
              <div className="stat-card-count">{countByStatus(s)}</div>
              <div className="stat-card-label">{s}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="filter-row">
          <input
            className="filter-input"
            placeholder="Search by name or ID..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="filter-select"
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
          >
            <option value="">All Courses</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Applications Grid */}
        {filteredApps.length === 0 ? (
          <div className="empty-state">No applications found.</div>
        ) : (
          <div className="applications-grid">
            {filteredApps.map((app) => (
              <div key={app.applicationId} className="application-card">
                <div className="app-card-header">
                  <div>
                    <div className="app-card-name">{app.candidateName}</div>
                    <div className="app-card-id">{app.applicationId}</div>
                  </div>
                  <span className={`ht-status-badge ${getStatusClass(app.status)}`}>
                    {app.status}
                  </span>
                </div>

                <div className="app-card-details">
                  <span>📚 {app.course}</span>
                  <span>📝 {app.examName}</span>
                  <span>🏫 {app.school}</span>
                  {app.hallTicketNumber && <span>🎫 Ticket: {app.hallTicketNumber}</span>}
                  <span>
                    📅 Registered:{' '}
                    {app.registrationDate
                      ? new Date(app.registrationDate).toLocaleDateString()
                      : '—'}
                  </span>
                </div>

                {REVIEW_STATUSES.includes(app.status) && (
                  <div className="review-notes">
                    <label>
                      Internal review reason
                      <textarea
                        value={app.internalReason || ''}
                        onChange={(e) => {
                          saveApplicationFields(app.applicationId, { internalReason: e.target.value });
                        }}
                      />
                    </label>
                    <label>
                      Message for candidate
                      <textarea
                        value={app.candidateMessage || ''}
                        onChange={(e) => {
                          saveApplicationFields(app.applicationId, { candidateMessage: e.target.value });
                        }}
                      />
                    </label>
                  </div>
                )}

                {Array.isArray(app.statusHistory) && app.statusHistory.length > 0 && (
                  <details className="app-status-history">
                    <summary>Status history ({app.statusHistory.length})</summary>
                    <ul>
                      {app.statusHistory.map((entry, index) => (
                        <li key={`${entry.status}-${entry.changedAt}-${index}`}>
                          <strong>{entry.status}</strong>
                          <span>{new Date(entry.changedAt).toLocaleString()}</span>
                          {entry.reason && <span>Reason: {entry.reason}</span>}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                <div className="app-card-actions">
                  <select
                    className="status-select"
                    value={app.status}
                    onChange={(e) => updateStatus(app.applicationId, e.target.value)}
                    disabled={!REVIEW_STATUSES.includes(app.status)}
                  >
                    {!REVIEW_STATUSES.includes(app.status) && (
                      <option value={app.status}>{app.status}</option>
                    )}
                    {REVIEW_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {app.status === 'Approved' && (
                    <button
                      className="btn-generate-ht"
                      onClick={() => generateHallTicket(app)}
                    >
                      🎫 Generate Hall Ticket
                    </button>
                  )}
                  {canAccessHallTicket(app) && (
                    <>
                      <button className="btn-generate-ht" onClick={() => setSelectedApp(app)}>
                        View Hall Ticket
                      </button>
                      <button className="btn-view-details" onClick={() => reissueHallTicket(app)}>
                        Reissue
                      </button>
                      <button className="btn-view-details" onClick={() => cancelHallTicket(app)}>
                        Cancel Ticket
                      </button>
                    </>
                  )}
                  {app.status === 'Hall Ticket Cancelled' && (
                    <button className="btn-generate-ht" onClick={() => reissueHallTicket(app)}>
                      Reissue Ticket
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedApp && (
        <div
          className="admin-modal-overlay"
          onClick={() => setSelectedApp(null)}
        >
          <div
            className="admin-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <h3>Hall Ticket — {selectedApp.candidateName}</h3>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedApp(null)}
              >
                ✕
              </button>
            </div>
            <HallTicketCard
              application={selectedApp}
              onClose={() => setSelectedApp(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
