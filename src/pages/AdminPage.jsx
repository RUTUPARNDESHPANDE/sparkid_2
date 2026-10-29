import React from 'react';
import AdminPanel from '../components/AdminPanel';
import '../styles/AdminPanel.css';

/**
 * Admin Page
 * Protected page at /admin — password-gated admin panel
 * NOT shown in the main navigation
 */
function AdminPage() {
  return (
    <div className="admin-page">
      <AdminPanel />
    </div>
  );
}

export default AdminPage;
