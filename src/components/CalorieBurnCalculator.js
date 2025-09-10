// src/components/CalorieBurnCalculator.js

import React, { useState } from 'react';

// List of common activities with their MET values
const activities = [
  { name: 'Walking (slow pace, < 3.2 km/h)', met: 2.0 },
  { name: 'Walking (moderate pace, 4.8 km/h)', met: 3.5 },
  { name: 'Walking (brisk pace, 6.4 km/h)', met: 5.0 },
  { name: 'Jogging / Running (8 km/h)', met: 8.0 },
  { name: 'Running (11.2 km/h)', met: 11.5 },
  { name: 'Cycling (leisurely, < 16 km/h)', met: 4.0 },
  { name: 'Cycling (moderate, 19-22 km/h)', met: 8.0 },
  { name: 'Swimming (freestyle, light/moderate)', met: 7.0 },
  { name: 'Weight Lifting (general)', met: 3.5 },
  { name: 'Yoga', met: 2.5 },
  { name: 'Aerobics (general)', met: 6.5 },
  { name: 'Stretching, Hatha Yoga', met: 2.5},
  { name: 'Dancing (ballroom, slow)', met: 3.0 },
  { name: 'Housework (general)', met: 3.0 },
  { name: 'Gardening (general)', met: 3.8 }
];

function CalorieBurnCalculator() {
  const [activity, setActivity] = useState(activities[0].met); // Default to the first activity
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  const calculateBurn = () => {
    if (!weight || !duration) {
      alert('Please enter your weight and the duration of the activity.');
      return;
    }
    
    const metValue = parseFloat(activity);
    const weightKg = parseFloat(weight);
    const durationMinutes = parseFloat(duration);

    // Formula: (MET * Body Weight in kg * 3.5) / 200 * Duration in minutes
    const calories = ((metValue * weightKg * 3.5) / 200) * durationMinutes;
    
    setCaloriesBurned(calories.toFixed(0));
  };

  return (
    <div className="calculator-container">
      <h1>Calorie Burn Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Estimate the number of calories burned during an activity.
      </p>

      <div className="input-group">
        <label>Activity</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          {activities.map((act, index) => (
            <option key={index} value={act.met}>
              {act.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Your Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Duration (minutes)</label>
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>

      <button onClick={calculateBurn}>Calculate Calories Burned</button>

      {caloriesBurned !== null && (
        <div className="result">
          <h2>Result</h2>
          <p>
            You burned approximately <strong>{caloriesBurned} calories</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default CalorieBurnCalculator;