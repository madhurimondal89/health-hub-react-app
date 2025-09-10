// src/components/IdealWeightCalculator.js

import React, { useState } from 'react';

// A separate component for the formula descriptions
const FormulaDescriptions = () => {
  return (
    <div style={{ textAlign: 'left', marginTop: '40px', fontSize: '14px', color: '#555' }}>
      <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Understanding the Formulas</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <h4>Healthy BMI Range (Recommended)</h4>
        <p>
          This is not a single formula but a weight range based on the Body Mass Index (BMI) scale, recommended by the World Health Organization (WHO). A BMI between <strong>18.5 and 24.9</strong> is considered healthy for most adults. This method is the most widely accepted standard today as it accounts for your specific height.
        </p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h4>G.J. Hamwi Formula (1964)</h4>
        <p>
          Created for medication dosage purposes, this is one of the oldest and simplest formulas. It assigns a base weight for the first 5 feet of height and adds a set amount of weight for each additional inch. It's a quick estimate but doesn't account for factors like age or body frame.
        </p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h4>J.D. Robinson Formula (1983)</h4>
        <p>
          The Robinson formula is a modification of the Hamwi formula. It adjusts the weight-per-inch slightly, making it a variation of the same simple estimation method. Like Hamwi, it's a rule-of-thumb estimate.
        </p>
      </div>

      <div>
        <h4>D.R. Miller Formula (1983)</h4>
        <p>
          Similar to the Robinson formula, the Miller formula is another modification of the original Hamwi method. It offers slightly different calculations for weight per inch over five feet.
        </p>
      </div>
      <p style={{marginTop: '20px', fontSize: '12px', color: '#888'}}>
          <strong>Disclaimer:</strong> These formulas provide estimates and do not account for individual differences like body composition (muscle vs. fat), age, or ethnicity. Consult a healthcare professional for personalized advice.
      </p>
    </div>
  );
};


function IdealWeightCalculator() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [formula, setFormula] = useState('bmi');
  const [result, setResult] = useState(null);

  const calculateIdealWeight = () => {
    if (!height) {
      alert('Please enter your height.');
      return;
    }

    const heightInCm = parseFloat(height);
    const heightInInches = heightInCm / 2.54;
    const heightInMeters = heightInCm / 100;

    if (heightInInches < 60) {
      alert('These formulas are generally used for heights above 5 feet (152.4 cm).');
      setResult(null);
      return;
    }

    let idealWeight = {};
    const inchesOver5Feet = heightInInches - 60;

    switch (formula) {
      case 'hamwi':
        if (gender === 'male') idealWeight = { value: 48 + 2.7 * inchesOver5Feet, formulaName: 'Hamwi Formula' };
        else idealWeight = { value: 45.5 + 2.2 * inchesOver5Feet, formulaName: 'Hamwi Formula' };
        break;
      case 'robinson':
        if (gender === 'male') idealWeight = { value: 52 + 1.9 * inchesOver5Feet, formulaName: 'Robinson Formula' };
        else idealWeight = { value: 49 + 1.7 * inchesOver5Feet, formulaName: 'Robinson Formula' };
        break;
      case 'miller':
        if (gender === 'male') idealWeight = { value: 56.2 + 1.41 * inchesOver5Feet, formulaName: 'Miller Formula' };
        else idealWeight = { value: 53.1 + 1.36 * inchesOver5Feet, formulaName: 'Miller Formula' };
        break;
      case 'bmi':
      default:
        const minWeight = 18.5 * heightInMeters * heightInMeters;
        const maxWeight = 24.9 * heightInMeters * heightInMeters;
        idealWeight = { 
          range: `${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`, 
          formulaName: 'Healthy BMI Range' 
        };
        break;
    }
    if (idealWeight.value) idealWeight.value = idealWeight.value.toFixed(2);
    setResult(idealWeight);
  };

  return (
    <div className="calculator-container">
      <h1>Ideal Weight Calculator</h1>
      
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
        <label>Formula</label>
        <select value={formula} onChange={(e) => setFormula(e.target.value)}>
          <option value="bmi">Healthy BMI Range (Recommended)</option>
          <option value="hamwi">G.J. Hamwi Formula (1964)</option>
          <option value="robinson">J.D. Robinson Formula (1983)</option>
          <option value="miller">D.R. Miller Formula (1983)</option>
        </select>
      </div>

      <button onClick={calculateIdealWeight}>Calculate Ideal Weight</button>

      {result && (
        <div className="result">
          <h2>Your Ideal Weight</h2>
          <p>
            Based on the <strong>{result.formulaName}</strong>, your ideal weight is approximately:
          </p>
          <p style={{fontSize: '24px', fontWeight: 'bold', color: '#155724'}}>
            {result.range ? result.range : `${result.value} kg`}
          </p>
        </div>
      )}

      <FormulaDescriptions />
    </div>
  );
}

export default IdealWeightCalculator;