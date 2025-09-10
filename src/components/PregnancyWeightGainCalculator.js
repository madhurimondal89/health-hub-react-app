// src/components/PregnancyWeightGainCalculator.js
import React, { useState } from 'react';

function PregnancyWeightGainCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateWeightGain = () => {
    if (!weight || !height) {
      alert('Please enter your pre-pregnancy weight and height.');
      return;
    }

    const heightInMeters = height / 100;
    const prePregnancyBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    
    let category = '';
    let gainRange = '';

    if (prePregnancyBmi < 18.5) {
      category = 'Underweight';
      gainRange = '12.5 - 18 kg';
    } else if (prePregnancyBmi >= 18.5 && prePregnancyBmi <= 24.9) {
      category = 'Normal weight';
      gainRange = '11.5 - 16 kg';
    } else if (prePregnancyBmi >= 25 && prePregnancyBmi <= 29.9) {
      category = 'Overweight';
      gainRange = '7 - 11.5 kg';
    } else {
      category = 'Obese';
      gainRange = '5 - 9 kg';
    }
    
    setResult({ bmi: prePregnancyBmi, category, gainRange });
  };

  return (
    <div className="calculator-container">
      <h1>Pregnancy Weight Gain Calculator</h1>
      <div className="input-group">
        <label>Pre-pregnancy Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Height (cm)</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={calculateWeightGain}>Calculate Recommended Gain</button>
      {result && (
        <div className="result">
          <h2>Recommended Weight Gain</h2>
          <p>Your pre-pregnancy BMI is <strong>{result.bmi}</strong>, which falls into the <strong>{result.category}</strong> category.</p>
          <p>The recommended total weight gain for your category is:</p>
          <p style={{fontSize: '24px', fontWeight: 'bold', color: '#155724'}}>{result.gainRange}</p>
        </div>
      )}
    </div>
  );
}
export default PregnancyWeightGainCalculator;