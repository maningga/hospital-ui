import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const { user } = useAuth(); // user should be set after login
  const [bedOccupancy, setBedOccupancy] = useState(0); // Example: bed occupancy percentage
  const [staffingLevels, setStaffingLevels] = useState(0); // Example: number of staff assigned
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the database or an API (replace with real data fetch)
    setBedOccupancy(50); // Example: 50% bed occupancy
    setStaffingLevels(100); // Example: 100 staff members assigned
  }, []);

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mt-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid"> {/* Ensure the navbar spans full width */}
          {/* Back button with icon on the left side */}
          <button className="btn btn-outline-light me-3" onClick={handleBack}>
            <i className="bi bi-arrow-left-circle"></i>
          </button>

          {/* Wellmeadows brand name */}
          <Link className="navbar-brand" to="/dashboard">Wellmeadows Hospital</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <h2>Welcome, {user.role}</h2>

      {/* Bed Occupancy and Staffing Levels */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Bed Occupancy</h3>
              <p>{bedOccupancy}%</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3>Staffing Levels</h3>
              <p>{staffingLevels} staff members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Display role-based content */}
      {user.role === "Medical Director" && (
        <div>
          <h3>Special content for Medical Director</h3>
          <p>This is where you would manage hospital-wide operations and make decisions for the hospital.</p>
        </div>
      )}

      {user.role === "Charge Nurse" && (
        <div>
          <h3>Special content for Charge Nurse</h3>
          <p>This is where you would manage patient care teams and nurse scheduling.</p>
        </div>
      )}

      {user.role === "Personnel Officer" && (
        <div>
          <h3>Special content for Personnel Officer</h3>
          <p>This is where you would manage staff records and ensure staffing levels are maintained.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
