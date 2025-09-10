// src/components/WaistToHeightRatioCalculator.js
import React, { useState } from 'react';

function WaistToHeightRatioCalculator() {
  const [waist, setWaist] = useState('');
  const [height, setHeight] = useState('');
  const [whtr, setWhtr] = useState(null);
  const [message, setMessage] = useState('');

  const calculateWHtR = () => {
    if (!waist || !height) {
      alert('Please enter both waist and height measurements.');
      return;
    }
    const ratio = (waist / height).toFixed(2);
    setWhtr(ratio);

    if (ratio <= 0.5) {
      setMessage('Your Waist-to-Height ratio is within a healthy range.');
    } else {
      setMessage('Your Waist-to-Height ratio may indicate increased health risks. Consider consulting a healthcare professional.');
    }
  };

  return (
    <div className="calculator-container">
      <h1>Waist-to-Height Ratio (WHtR) Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        A simple indicator of health risk. Your waist should be less than half your height.
      </p>
      <div className="input-group">
        <label>Waist Circumference (cm)</label>
        <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Height (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateWHtR}>Calculate WHtR</button>
      {whtr && (
        <div className="result">
          <h2>Your Waist-to-Height Ratio</h2>
          <p>Your WHtR is <strong>{whtr}</strong>.</p>
          <p style={{fontSize: '16px', marginTop: '10px'}}>{message}</p>
        </div>
      )}
    </div>
  );
}
export default WaistToHeightRatioCalculator;