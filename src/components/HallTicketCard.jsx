import React from 'react';
import '../styles/HallTicket.css';
import { canAccessHallTicket } from '../utils/hallTicket';

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

const InfoRow = ({ label, value }) => (
  <div className="ht-info-row">
    <span className="ht-info-label">{label}</span>
    <span className="ht-info-value">{value || '—'}</span>
  </div>
);

const HallTicketCard = ({ application, onClose }) => {
  if (!canAccessHallTicket(application)) {
    return null;
  }

  const statusClass = statusClassMap[application.status] || 'submitted';

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="hall-ticket-card">
      {/* Header */}
      <div className="ht-header">
        <div className="ht-logo-area">
          <div className="ht-logo-circle">BSA</div>
        </div>
        <div>
          <div className="academy-name">Brave SparKids Academy</div>
          <div className="hall-ticket-title">HALL TICKET — EXAMINATION</div>
        </div>
      </div>

      {/* Body */}
      <div className="ht-body">
        {/* Application ID + Status */}
        <div className="app-id-row">
          Application ID: <strong>{application.applicationId}</strong>
          <span className={`ht-status-badge ${statusClass}`}>{application.status}</span>
        </div>
        <div className="ht-ticket-number">
          Hall Ticket Number: <strong>{application.hallTicketNumber || '—'}</strong>
        </div>

        <hr className="ht-divider" />

        {/* Candidate Details */}
        <div className="ht-section-title">Candidate Details</div>
        <div className="ht-info-grid">
          <InfoRow label="Full Name" value={application.candidateName} />
        </div>

        <hr className="ht-divider" />

        {/* Exam Details */}
        <div className="ht-section-title">Examination Details</div>
        <div className="ht-info-grid">
          <InfoRow label="Exam Name" value={application.examName} />
          <InfoRow label="Exam Date" value={formatDate(application.examDate)} />
          <InfoRow label="Exam Time" value={application.examTime} />
          <InfoRow label="Reporting Time" value={application.reportingTime} />
          <InfoRow label="Exam Centre / Venue" value={application.examCentre} />
          <InfoRow label="Course / Program" value={application.course} />
          <InfoRow label="Class / Grade" value={application.grade ? `Grade ${application.grade}` : '—'} />
        </div>

        {/* Instructions */}
        <div className="ht-instructions">
          <strong>📋 Important Instructions:</strong>
          <ul>
            <li>Candidates must carry this hall ticket to the examination centre.</li>
            <li>Valid government-issued photo ID is required along with this hall ticket.</li>
            <li>Please arrive at the examination centre 30 minutes before the exam start time.</li>
            <li>Mobile phones and electronic devices are not allowed inside the examination hall.</li>
          </ul>
        </div>
      </div>

      {/* Actions — hidden during print */}
      <div className="ht-footer-actions no-print">
        <button className="print-btn" onClick={() => window.print()}>
          🖨️ Print / Save as PDF
        </button>
        {onClose && (
          <button className="modal-btn secondary" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default HallTicketCard;
