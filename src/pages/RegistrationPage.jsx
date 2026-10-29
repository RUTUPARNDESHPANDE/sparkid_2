import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import '../styles/RegistrationForm.css';

/**
 * Registration Page
 * Public page at /register for candidate registration
 */
function RegistrationPage() {
  const [successData, setSuccessData] = useState(null);

  const handleSuccess = (applicationData) => {
    setSuccessData(applicationData);
  };

  useEffect(() => {
    if (!successData) return undefined;

    const timeoutId = window.setTimeout(() => setSuccessData(null), 15000);
    return () => window.clearTimeout(timeoutId);
  }, [successData]);

  return (
    <div className="registration-page">
      {successData && (
        <section className="registration-success-banner" role="status" aria-live="polite">
          <span className="registration-success-icon" aria-hidden="true">&#10003;</span>
          <div className="registration-success-copy">
            <h2>Application submitted successfully!</h2>
            <p>
              Application number: <strong>{successData.applicationId}</strong>
            </p>
            <p>Save this number to track your application and get your hall ticket.</p>
            <a href="/hall-ticket">Track your application</a>
          </div>
          <button
            type="button"
            className="registration-success-close"
            aria-label="Dismiss success message"
            onClick={() => setSuccessData(null)}
          >
            &times;
          </button>
        </section>
      )}

      {/* Hero Section */}
      <div className="registration-hero">
        <h1>Candidate Registration</h1>
        <p>Register for the Brave SparKids Academy examination. Fill in all details carefully.</p>
      </div>

      {/* Registration Form */}
      <div className="registration-container">
        <div className="registration-card">
          <RegistrationForm onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
