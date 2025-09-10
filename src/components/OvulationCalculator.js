// src/components/OvulationCalculator.js

import React, { useState } from 'react';

function OvulationCalculator() {
  const [lmp, setLmp] = useState('');
  const [cycleLength, setCycleLength] = useState(28); // Default cycle length
  const [ovulationDate, setOvulationDate] = useState(null);

  const calculateOvulation = () => {
    if (!lmp) {
      alert('Please select the first day of your last menstrual period.');
      return;
    }

    // Ovulation typically occurs 14 days before the next period
    const lmpDate = new Date(lmp);
    const estimatedOvulation = new Date(lmpDate.setDate(lmpDate.getDate() + cycleLength - 14));
    
    setOvulationDate(estimatedOvulation.toDateString());
  };

  return (
    <div className="calculator-container">
      <h1>Ovulation Calculator</h1>
      
      <div className="input-group">
        <label>First Day of Your Last Menstrual Period (LMP)</label>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} style={{ padding: '10px' }} />
      </div>

      <div className="input-group">
        <label>Average Cycle Length (days)</label>
        <input type="number" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />
      </div>

      <button onClick={calculateOvulation}>Calculate Ovulation</button>

      {ovulationDate && (
        <div className="result">
          <h2>Estimated Ovulation Date</h2>
          <p>Your next most fertile period is around <strong>{ovulationDate}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default OvulationCalculator;