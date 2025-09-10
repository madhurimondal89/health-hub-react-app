// src/components/HeartRateZonesCalculator.js

import React, { useState } from 'react';

function HeartRateZonesCalculator() {
  const [age, setAge] = useState('');
  const [zones, setZones] = useState(null);

  const calculateZones = () => {
    if (!age || age <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    const maxHeartRate = 220 - age;
    
    setZones({
      max: maxHeartRate,
      zone1: `${Math.round(maxHeartRate * 0.5)} - ${Math.round(maxHeartRate * 0.6)} BPM`,
      zone2: `${Math.round(maxHeartRate * 0.6)} - ${Math.round(maxHeartRate * 0.7)} BPM`,
      zone3: `${Math.round(maxHeartRate * 0.7)} - ${Math.round(maxHeartRate * 0.8)} BPM`,
      zone4: `${Math.round(maxHeartRate * 0.8)} - ${Math.round(maxHeartRate * 0.9)} BPM`,
      zone5: `${Math.round(maxHeartRate * 0.9)} - ${Math.round(maxHeartRate * 1.0)} BPM`,
    });
  };

  return (
    <div className="calculator-container">
      <h1>Heart Rate Zones Calculator</h1>
      
      <div className="input-group">
        <label>Your Age</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>

      <button onClick={calculateZones}>Calculate Zones</button>

      {zones && (
        <div className="result">
          <h2>Your Heart Rate Zones</h2>
          <p>Your estimated Maximum Heart Rate is <strong>{zones.max} BPM</strong>.</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><strong>Zone 1 (Very Light):</strong> {zones.zone1}</li>
            <li><strong>Zone 2 (Light):</strong> {zones.zone2}</li>
            <li><strong>Zone 3 (Moderate):</strong> {zones.zone3}</li>
            <li><strong>Zone 4 (Hard):</strong> {zones.zone4}</li>
            <li><strong>Zone 5 (Maximum):</strong> {zones.zone5}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeartRateZonesCalculator;