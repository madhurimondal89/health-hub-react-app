// src/components/PregnancyDueDateCalculator.js

import React, { useState } from 'react';

function PregnancyDueDateCalculator() {
  const [lmp, setLmp] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const calculateDueDate = () => {
    if (!lmp) {
      alert('Please select the first day of your last menstrual period.');
      return;
    }

    // Naegele's Rule: LMP + 280 days (40 weeks)
    const lmpDate = new Date(lmp);
    const dueDateCalc = new Date(lmpDate.setDate(lmpDate.getDate() + 280));
    
    setDueDate(dueDateCalc.toDateString());
  };

  return (
    <div className="calculator-container">
      <h1>Pregnancy Due Date Calculator</h1>
      
      <div className="input-group">
        <label>First Day of Your Last Menstrual Period (LMP)</label>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} style={{ padding: '10px' }} />
      </div>

      <button onClick={calculateDueDate}>Calculate Due Date</button>

      {dueDate && (
        <div className="result">
          <h2>Estimated Due Date</h2>
          <p>Your estimated due date is <strong>{dueDate}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default PregnancyDueDateCalculator;