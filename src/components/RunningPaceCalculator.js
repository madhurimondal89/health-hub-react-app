// src/components/RunningPaceCalculator.js
import React, { useState } from 'react';

function RunningPaceCalculator() {
  const [distance, setDistance] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [pace, setPace] = useState(null);

  const calculatePace = () => {
    const dist = parseFloat(distance);
    const hrs = parseFloat(hours) || 0;
    const mins = parseFloat(minutes) || 0;
    const secs = parseFloat(seconds) || 0;

    if (!dist || dist <= 0) {
      alert('Please enter a valid distance.');
      return;
    }
    
    const totalMinutes = (hrs * 60) + mins + (secs / 60);
    if (totalMinutes <= 0) {
      alert('Please enter a valid time.');
      return;
    }

    const pacePerKm = totalMinutes / dist;
    const paceMinutes = Math.floor(pacePerKm);
    const paceSeconds = Math.round((pacePerKm - paceMinutes) * 60);

    setPace(`${paceMinutes}:${paceSeconds.toString().padStart(2, '0')} min/km`);
  };

  return (
    <div className="calculator-container">
      <h1>Running Pace Calculator</h1>
      <div className="input-group">
        <label>Distance (km)</label>
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
      </div>
      <label>Time Taken</label>
      <div style={{display: 'flex', gap: '10px', marginBottom: '20px'}}>
        <input type="number" placeholder="Hours" value={hours} onChange={(e) => setHours(e.target.value)} />
        <input type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
        <input type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
      </div>
      <button onClick={calculatePace}>Calculate Pace</button>
      {pace && (
        <div className="result">
          <h2>Your Pace</h2>
          <p>Your average running pace is <strong>{pace}</strong>.</p>
        </div>
      )}
    </div>
  );
}
export default RunningPaceCalculator;