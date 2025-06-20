import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="user-info-card">
          <h2>User Information</h2>
          <div className="user-details">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Member Since:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="features-card">
          <h3>Dashboard Features</h3>
          <ul>
            <li>✅ Secure Authentication</li>
            <li>✅ Protected Routes</li>
            <li>✅ JWT Token Management</li>
            <li>✅ User Profile Display</li>
            <li>✅ Responsive Design</li>
          </ul>
        </div>

        <div className="stats-card">
          <h3>Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Active Session</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Security Score</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;