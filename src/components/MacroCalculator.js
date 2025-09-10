// src/components/MacroCalculator.js

import React, { useState } from 'react';

function MacroCalculator() {
  // State for all the inputs
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('1.2'); // Default to sedentary
  const [goal, setGoal] = useState('maintain'); // Default to maintain weight

  // State for the results
  const [result, setResult] = useState(null);

  const calculateMacros = () => {
    // Input validation
    if (!age || !weight || !height) {
      alert('Please fill in all the fields.');
      return;
    }

    // 1. Calculate BMR using Mifflin-St Jeor Formula
    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 2. Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activity;

    // 3. Adjust calories based on the goal
    let finalCalories;
    switch (goal) {
      case 'lose':
        finalCalories = tdee - 500;
        break;
      case 'gain':
        finalCalories = tdee + 500;
        break;
      default: // maintain
        finalCalories = tdee;
    }

    // 4. Calculate Macros (example: 40% carbs, 30% protein, 30% fat)
    // 1g Protein = 4 calories, 1g Carbs = 4 calories, 1g Fat = 9 calories
    const proteinGrams = Math.round((finalCalories * 0.3) / 4);
    const carbsGrams = Math.round((finalCalories * 0.4) / 4);
    const fatGrams = Math.round((finalCalories * 0.3) / 9);

    setResult({
      calories: Math.round(finalCalories),
      protein: proteinGrams,
      carbs: carbsGrams,
      fat: fatGrams,
    });
  };

  return (
    <div className="calculator-container">
      <h1>Macro Calculator</h1>

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
        </select>
      </div>

      <div className="input-group">
        <label>Goal</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="maintain">Maintain weight</option>
          <option value="lose">Lose weight</option>
          <option value="gain">Gain weight</option>
        </select>
      </div>

      <button onClick={calculateMacros}>Calculate Macros</button>

      {result && (
        <div className="result">
          <h2>Your Results</h2>
          <p><strong>Calories per day:</strong> {result.calories}</p>
          <p><strong>Protein:</strong> {result.protein}g</p>
          <p><strong>Carbohydrates:</strong> {result.carbs}g</p>
          <p><strong>Fat:</strong> {result.fat}g</p>
        </div>
      )}
    </div>
  );
}

export default MacroCalculator;