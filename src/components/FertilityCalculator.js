// src/components/FertilityCalculator.js
import React, { useState } from 'react';

function FertilityCalculator() {
  const [lmp, setLmp] = useState('');
  const [cycleLength, setCycleLength] = useState(28);
  const [fertileWindow, setFertileWindow] = useState(null);

  const calculateFertility = () => {
    if (!lmp) {
      alert('Please select the first day of your last menstrual period.');
      return;
    }

    const lmpDate = new Date(lmp);
    // Ovulation is roughly 14 days BEFORE the next period starts
    const ovulationDate = new Date(lmpDate.setDate(lmpDate.getDate() + parseInt(cycleLength) - 14));
    
    // The fertile window is the 5 days before ovulation + the day of ovulation
    const windowStart = new Date(ovulationDate.getTime() - 5 * 24 * 60 * 60 * 1000); // Subtract 5 days
    
    setFertileWindow({
      start: windowStart.toDateString(),
      end: ovulationDate.toDateString()
    });
  };

  return (
    <div className="calculator-container">
      <h1>Fertility Window Calculator</h1>
      <div className="input-group">
        <label>First Day of Your Last Menstrual Period (LMP)</label>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} style={{ padding: '10px' }} />
      </div>
      <div className="input-group">
        <label>Average Cycle Length (days)</label>
        <input type="number" value={cycleLength} onChange={(e) => setCycleLength(e.target.value)} />
      </div>
      <button onClick={calculateFertility}>Calculate Fertile Window</button>
      {fertileWindow && (
        <div className="result">
          <h2>Your Most Fertile Window</h2>
          <p>Your estimated fertile window is from <strong>{fertileWindow.start}</strong> to <strong>{fertileWindow.end}</strong>.</p>
        </div>
      )}
    </div>
  );
}
export default FertilityCalculator;