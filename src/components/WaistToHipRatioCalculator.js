// src/components/WaistToHipRatioCalculator.js
import React, { useState } from 'react';

function WaistToHipRatioCalculator() {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [whr, setWhr] = useState(null);

  const calculateWHR = () => {
    if (!waist || !hip) {
      alert('Please enter both waist and hip measurements.');
      return;
    }
    const ratio = (waist / hip).toFixed(2);
    setWhr(ratio);
  };

  return (
    <div className="calculator-container">
      <h1>Waist-to-Hip Ratio (WHR) Calculator</h1>
      <div className="input-group">
        <label>Waist Circumference (cm)</label>
        <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Hip Circumference (cm)</label>
        <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} />
      </div>
      <button onClick={calculateWHR}>Calculate WHR</button>
      {whr && (
        <div className="result">
          <h2>Your Waist-to-Hip Ratio</h2>
          <p>Your WHR is <strong>{whr}</strong>.</p>
          <p style={{fontSize: '14px', marginTop: '15px'}}>Note: For men, a ratio above 0.90, and for women above 0.85, is often associated with higher health risks.</p>
        </div>
      )}
    </div>
  );
}
export default WaistToHipRatioCalculator;