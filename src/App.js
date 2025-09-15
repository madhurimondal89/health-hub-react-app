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
          <Link to="/" className="nav-brand">Health Hub</Link>
          <div className="nav-links" style={{flexWrap: 'wrap', justifyContent: 'center', gap: '15px'}}>
            <Link to="/bmi">BMI</Link>
            <Link to="/bmr">BMR</Link>
            <Link to="/tdee">TDEE</Link>
            <Link to="/macro">Macro</Link>
            <Link to="/protein-intake">Protein</Link>
            <Link to="/calorie-burn">Calorie Burn</Link>
            <Link to="/body-fat">Body Fat</Link>
            <Link to="/lbm">LBM</Link>
            <Link to="/whr">WHR</Link>
            <Link to="/whtr">WHtR</Link>
            <Link to="/ideal-weight">Ideal Weight</Link>
            <Link to="/pace">Pace</Link>
            <Link to="/sleep">Sleep</Link>
            <Link to="/food-calorie">Food Calorie</Link>
            <Link to="/heart-rate">Heart Rate</Link>
            <Link to="/due-date">Due Date</Link>
            <Link to="/ovulation">Ovulation</Link>
            <Link to="/fertility">Fertility</Link>
            <Link to="/cycle">Menstrual Cycle</Link>
            <Link to="/preg-weight">Pregnancy Gain</Link>
          </div>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bmi" element={<BMICalculator />} />
            <Route path="/bmr" element={<BMRCalculator />} />
            <Route path="/tdee" element={<TDEECalculator />} />
            <Route path="/macro" element={<MacroCalculator />} />
            <Route path="/protein-intake" element={<ProteinIntakeCalculator />} />
            <Route path="/calorie-burn" element={<CalorieBurnCalculator />} />
            <Route path="/body-fat" element={<BodyFatCalculator />} />
            <Route path="/lbm" element={<LeanBodyMassCalculator />} />
            <Route path="/whr" element={<WaistToHipRatioCalculator />} />
            <Route path="/whtr" element={<WaistToHeightRatioCalculator />} />
            <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
            <Route path="/pace" element={<RunningPaceCalculator />} />
            <Route path="/sleep" element={<SleepCalculator />} />
            <Route path="/food-calorie" element={<CalorieCalculator />} />
            <Route path="/heart-rate" element={<HeartRateZonesCalculator />} />
            <Route path="/due-date" element={<PregnancyDueDateCalculator />} />
            <Route path="/ovulation" element={<OvulationCalculator />} />
            <Route path="/fertility" element={<FertilityCalculator />} />
            <Route path="/cycle" element={<MenstrualCycleCalculator />} />
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