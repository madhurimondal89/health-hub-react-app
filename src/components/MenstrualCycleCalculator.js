// src/components/MenstrualCycleCalculator.js
import React, { useState } from 'react';

function MenstrualCycleCalculator() {
  const [lmp, setLmp] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [nextPeriod, setNextPeriod] = useState(null);

  const calculateNextPeriod = () => {
    if (!lmp) {
      alert('Please select the first day of your last menstrual period.');
      return;
    }

    const lmpDate = new Date(lmp);
    const nextDate = new Date(lmpDate.setDate(lmpDate.getDate() + parseInt(cycleLength)));
    
    setNextPeriod(nextDate.toDateString());
  };

  return (
    <div className="calculator-container">
      <h1>Menstrual Cycle & Next Period Calculator</h1>
      <div className="input-group">
        <label>First Day of Your Last Menstrual Period (LMP)</label>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} style={{ padding: '10px' }} />
      </div>
      <div className="input-group">
        <label>Average Cycle Length (days)</label>
        <input type="number" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />
      </div>
      <button onClick={calculateNextPeriod}>Calculate Next Period</button>
      {nextPeriod && (
        <div className="result">
          <h2>Estimated Next Period Date</h2>
          <p>Your next period is estimated to start around <strong>{nextPeriod}</strong>.</p>
        </div>
      )}
    </div>
  );
}
export default MenstrualCycleCalculator;