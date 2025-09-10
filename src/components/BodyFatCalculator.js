// src/components/BodyFatCalculator.js

import React, { useState } from 'react';

function BodyFatCalculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState(''); // Only for females
  const [bodyFat, setBodyFat] = useState(null);

  const calculateBodyFat = () => {
    if (!height || !neck || !waist || (gender === 'female' && !hip)) {
      alert('Please fill in all required fields for your gender.');
      return;
    }

    let fatPercentage = 0;
    if (gender === 'male') {
      // US Navy formula for men
      fatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
      // US Navy formula for women
      fatPercentage = 163.205 * Math.log10(parseFloat(waist) + parseFloat(hip) - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    setBodyFat(fatPercentage.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1>Body Fat Calculator (U.S. Navy Method)</h1>
      
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
        <label>Neck (cm)</label>
        <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} placeholder="Measure at the narrowest point" />
      </div>

      <div className="input-group">
        <label>Waist (cm)</label>
        <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="Measure at the navel level" />
      </div>

      {gender === 'female' && (
        <div className="input-group">
          <label>Hip (cm)</label>
          <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="Measure at the widest point" />
        </div>
      )}

      <button onClick={calculateBodyFat}>Calculate Body Fat</button>

      {bodyFat && (
        <div className="result">
          <h2>Your Body Fat Percentage</h2>
          <p>Your estimated body fat is <strong>{bodyFat}%</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default BodyFatCalculator;