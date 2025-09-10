// src/components/TDEECalculator.js

import React, { useState } from 'react';

function TDEECalculator() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [tdeeResult, setTdeeResult] = useState(null);

  const calculateTDEE = () => {
    if (!age || !weight || !height) {
      alert('Please fill in all the fields.');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * parseFloat(activity);
    setTdeeResult(Math.round(tdee));
  };

  return (
    <div className="calculator-container">
      <h1>TDEE Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Calculates your Total Daily Energy Expenditure.
      </p>

      <div className="input-group">
        <label>Age (years)</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
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
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Activity Level</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="1.9">Extra active (very hard exercise & physical job)</option>
        </select>
      </div>

      <button onClick={calculateTDEE}>Calculate TDEE</button>

      {tdeeResult && (
        <div className="result">
          <h2>Your TDEE Result</h2>
          <p>
            To maintain your current weight, you need approximately <strong>{tdeeResult} calories</strong> per day.
          </p>
        </div>
      )}
    </div>
  );
}

export default TDEECalculator;