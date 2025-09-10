// src/components/BMRCalculator.js

import React, { useState } from 'react';

function BMRCalculator() {
  // State for the inputs needed for BMR calculation
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  // State for the result
  const [bmrResult, setBmrResult] = useState(null);

  const calculateBMR = () => {
    // Input validation
    if (!age || !weight || !height) {
      alert('Please fill in all the fields.');
      return;
    }

    // Calculate BMR using Mifflin-St Jeor Formula
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setBmrResult(Math.round(bmr));
  };

  return (
    <div className="calculator-container">
      <h1>BMR Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Calculates your Basal Metabolic Rate - the number of calories your body needs at rest.
      </p>

      <div className="input-group">
        <label>Age (years)</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="input-group">
        <label>Height (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <button onClick={calculateBMR}>Calculate BMR</button>

      {bmrResult && (
        <div className="result">
          <h2>Your BMR Result</h2>
          <p>Your body needs approximately <strong>{bmrResult} calories</strong> per day to maintain basic functions while at rest.</p>
        </div>
      )}
    </div>
  );
}

export default BMRCalculator;