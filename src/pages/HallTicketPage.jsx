import React, { useState } from 'react';
import HallTicketLookup from '../components/HallTicketLookup';
import HallTicketCard from '../components/HallTicketCard';
import '../styles/HallTicket.css';

/**
 * Hall Ticket Page
 * Public page at /hall-ticket for candidates to look up and download their hall ticket
 */
function HallTicketPage() {
  const [foundApplication, setFoundApplication] = useState(null);

  const handleFound = (application) => {
    setFoundApplication(application);
    // Scroll down to show the hall ticket
    setTimeout(() => {
      const htEl = document.getElementById('hall-ticket-result');
      if (htEl) htEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const handleReset = () => {
    setFoundApplication(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hall-ticket-page">
      {/* Hero Section */}
      <div className="hall-ticket-hero">
        <h1>Hall Ticket</h1>
        <p>Enter your Application ID and registered mobile number to access your hall ticket.</p>
      </div>

      {/* Lookup Form */}
      <div className="lookup-container">
        <div className="lookup-card">
          <HallTicketLookup onFound={handleFound} />
        </div>
      </div>

      {/* Hall Ticket Result */}
      {foundApplication && (
        <div id="hall-ticket-result" style={{ padding: '0 20px 60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span
              className="status-message approved"
              style={{ display: 'inline-block', borderRadius: '8px' }}
            >
              ✅ Application found! Your details are shown below.
            </span>
          </div>
          <HallTicketCard application={foundApplication} onClose={handleReset} />
        </div>
      )}

      {/* Info section for candidates without a registration */}
      {!foundApplication && (
        <div className="ht-info-section">
          <div className="ht-info-card">
            <h3>Don't have an Application ID?</h3>
            <p>
              You need to register first to receive an Application ID.
            </p>
            <a href="/register" className="print-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Register Now
            </a>
          </div>
          <div className="ht-info-card">
            <h3>Hall Ticket Status</h3>
            <p>
              Hall tickets are generated once your application is reviewed and approved by our team. You will be notified via the contact details provided during registration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HallTicketPage;
