// src/components/CalorieCalculator.js

import React, { useState } from 'react';

function CalorieCalculator() {
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [totalCalories, setTotalCalories] = useState(null);

  const calculateTotalCalories = () => {
    const proteinGrams = parseFloat(protein) || 0;
    const carbsGrams = parseFloat(carbs) || 0;
    const fatGrams = parseFloat(fat) || 0;

    // 1g Protein = 4 calories, 1g Carbs = 4 calories, 1g Fat = 9 calories
    const calories = (proteinGrams * 4) + (carbsGrams * 4) + (fatGrams * 9);
    setTotalCalories(calories.toFixed(0));
  };

  return (
    <div className="calculator-container">
      <h1>Food Calorie Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Calculate the total calories based on macronutrient content.
      </p>

      <div className="input-group">
        <label>Protein (grams)</label>
        <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Carbohydrates (grams)</label>
        <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Fat (grams)</label>
        <input type="number" value={fat} onChange={(e) => setFat(e.target.value)} />
      </div>

      <button onClick={calculateTotalCalories}>Calculate Calories</button>

      {totalCalories !== null && (
        <div className="result">
          <h2>Total Calories</h2>
          <p>
            The total estimated calories are <strong>{totalCalories}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;