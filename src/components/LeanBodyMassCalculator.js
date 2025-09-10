// src/components/LeanBodyMassCalculator.js
import React, { useState } from 'react';

function LeanBodyMassCalculator() {
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [lbm, setLbm] = useState(null);

  const calculateLBM = () => {
    if (!weight || !bodyFat) {
      alert('Please enter both your weight and body fat percentage.');
      return;
    }
    const fatMass = weight * (bodyFat / 100);
    const leanMass = weight - fatMass;
    setLbm(leanMass.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1>Lean Body Mass (LBM) Calculator</h1>
      <div className="input-group">
        <label>Total Body Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Body Fat Percentage (%)</label>
        <input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
      </div>
      <button onClick={calculateLBM}>Calculate LBM</button>
      {lbm && (
        <div className="result">
          <h2>Your Lean Body Mass</h2>
          <p>Your estimated Lean Body Mass is <strong>{lbm} kg</strong>.</p>
        </div>
      )}
    </div>
  );
}
export default LeanBodyMassCalculator;