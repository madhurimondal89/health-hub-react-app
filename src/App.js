// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import all calculator components
import BMICalculator from './components/BMICalculator';
import BMRCalculator from './components/BMRCalculator';
import TDEECalculator from './components/TDEECalculator';
import MacroCalculator from './components/MacroCalculator';
import BodyFatCalculator from './components/BodyFatCalculator';
import IdealWeightCalculator from './components/IdealWeightCalculator';
import CalorieCalculator from './components/CalorieCalculator';
import HeartRateZonesCalculator from './components/HeartRateZonesCalculator';
import PregnancyDueDateCalculator from './components/PregnancyDueDateCalculator';
import OvulationCalculator from './components/OvulationCalculator';
import CalorieBurnCalculator from './components/CalorieBurnCalculator';
import LeanBodyMassCalculator from './components/LeanBodyMassCalculator';
import WaistToHipRatioCalculator from './components/WaistToHipRatioCalculator';
import ProteinIntakeCalculator from './components/ProteinIntakeCalculator';
import WaistToHeightRatioCalculator from './components/WaistToHeightRatioCalculator';
import RunningPaceCalculator from './components/RunningPaceCalculator';
import SleepCalculator from './components/SleepCalculator';
import FertilityCalculator from './components/FertilityCalculator';
import MenstrualCycleCalculator from './components/MenstrualCycleCalculator';
import PregnancyWeightGainCalculator from './components/PregnancyWeightGainCalculator';


function HomePage() {
  return (
    <div className="page-content">
      <h1>Welcome to Health Hub!</h1>
      <p>Your one-stop destination for essential health and fitness calculations. Please select a calculator from the menu above to get started.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          {/* ... navbar code ... */}
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bmi" element={<BMICalculator />} />
            {/* ... other routes ... */}
            <Route path="/whtr" element={<WaistToHeightRatioCalculator />} />
            {/* The problematic Link tag is now replaced with a proper Route */}
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} /> 
            <Route path="/pace" element={<RunningPaceCalculator />} />
            {/* ... other routes ... */}
            <Route path="/preg-weight" element={<PregnancyWeightGainCalculator />} />
          </Routes>
        </main>

        <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
            <p>&copy; {new Date().getFullYear()} Health Hub. All Rights Reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;