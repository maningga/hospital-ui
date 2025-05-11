// src/components/PatientSearch.js

import React, { useState } from 'react';  // Make sure to import React and useState
import { mockPatients } from "../data/mockData"; // Correct named import from mockData

const PatientSearch = () => {
  // State for storing the filtered list of patients
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);

  // Function to handle searching and filtering patients
  const handleSearch = (diagnosis) => {
    const filtered = mockPatients.filter(patient => 
      patient.diagnosis.toLowerCase().includes(diagnosis.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div className="container mt-4">
      <h2>Patient Search</h2>
      
      {/* Search input */}
      <input 
        type="text" 
        placeholder="Enter diagnosis to search..." 
        className="form-control"
        onChange={(e) => handleSearch(e.target.value)} 
      />

      {/* Patient list */}
      <ul className="list-group mt-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <li key={patient.id} className="list-group-item">
              <strong>{patient.name}</strong> (Age: {patient.age}) - Diagnosis: {patient.diagnosis}
            </li>
          ))
        ) : (
          <li className="list-group-item">No patients found.</li>
        )}
      </ul>
    </div>
  );
};

export default PatientSearch;
