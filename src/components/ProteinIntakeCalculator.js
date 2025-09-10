// src/components/ProteinIntakeCalculator.js
import React, { useState } from 'react';

const activityLevels = [
  { label: 'Sedentary (little to no exercise)', factor: 0.8 },
  { label: 'Lightly Active (light exercise 1-3 days/week)', factor: 1.2 },
  { label: 'Moderately Active (moderate exercise 3-5 days/week)', factor: 1.4 },
  { label: 'Very Active (hard exercise 6-7 days/week)', factor: 1.6 },
  { label: 'Athlete / Bodybuilder', factor: 1.8 }
];

function ProteinIntakeCalculator() {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState(activityLevels[0].factor);
  const [proteinRange, setProteinRange] = useState(null);

  const calculateProtein = () => {
    if (!weight) {
      alert('Please enter your weight.');
      return;
    }
    const lowerBound = (weight * activity).toFixed(0);
    const upperBound = (weight * (parseFloat(activity) + 0.2)).toFixed(0); // Providing a small range
    setProteinRange(`${lowerBound}g - ${upperBound}g`);
  };

  return (
    <div className="calculator-container">
      <h1>Daily Protein Intake Calculator</h1>
      <div className="input-group">
        <label>Your Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Activity Level</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          {activityLevels.map((level, index) => (
            <option key={index} value={level.factor}>{level.label}</option>
          ))}
        </select>
      </div>
      <button onClick={calculateProtein}>Calculate Protein Needs</button>
      {proteinRange && (
        <div className="result">
          <h2>Your Recommended Daily Protein Intake</h2>
          <p>You should aim for approximately <strong>{proteinRange}</strong> of protein per day.</p>
        </div>
      )}
    </div>
  );
}
export default ProteinIntakeCalculator;