// src/components/BMICalculator.js

import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    if (!height || !weight) {
      alert('Please enter both height and weight.');
      return;
    }
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    
    if (bmiValue < 18.5) { setMessage('You are Underweight'); }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) { setMessage('You have a Normal weight'); }
    else if (bmiValue >= 25 && bmiValue < 29.9) { setMessage('You are Overweight'); }
    else { setMessage('You are Obese'); }
  };

  return (
    <div className="calculator-container">
      <h1>BMI Calculator</h1>
      <div className="input-group">
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;