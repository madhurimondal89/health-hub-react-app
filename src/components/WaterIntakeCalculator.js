// src/components/WaterIntakeCalculator.js

import React, { useState } from 'react';

function WaterIntakeCalculator() {
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    if (!weight) {
      alert('Please enter your weight.');
      return;
    }
    // Formula: Weight in kg * 0.033 liters
    const intake = (weight * 0.033).toFixed(2);
    setWaterIntake(intake);
  };

  return (
    <div className="calculator-container">
      <h1>Daily Water Intake Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Calculates the recommended amount of water you should drink daily.
      </p>

      <div className="input-group">
        <label>Your Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <button onClick={calculateWaterIntake}>Calculate</button>

      {waterIntake && (
        <div className="result">
          <h2>Your Recommended Water Intake</h2>
          <p>
            You should drink approximately <strong>{waterIntake} liters</strong> of water per day.
          </p>
          <p style={{fontSize: '14px', marginTop: '15px', color: '#555'}}>
            Note: This can vary based on your activity level and climate.
          </p>
        </div>
      )}
    </div>
  );
}

export default WaterIntakeCalculator;