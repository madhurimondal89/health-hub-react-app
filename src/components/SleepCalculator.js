// src/components/SleepCalculator.js
import React, { useState } from 'react';

function SleepCalculator() {
  const [wakeUpTime, setWakeUpTime] = useState('07:00');
  const [bedtimes, setBedtimes] = useState([]);

  const calculateBedtimes = () => {
    const [hours, minutes] = wakeUpTime.split(':').map(Number);
    const wakeUpDate = new Date();
    wakeUpDate.setHours(hours, minutes, 0, 0);

    const sleepCyclesInMinutes = [
      90 * 6, // 9 hours of sleep (6 cycles)
      90 * 5, // 7.5 hours of sleep (5 cycles)
      90 * 4, // 6 hours of sleep (4 cycles)
    ];

    const calculatedTimes = sleepCyclesInMinutes.map(cycleMinutes => {
      const bedtime = new Date(wakeUpDate.getTime() - cycleMinutes * 60000); // 60000 ms in a minute
      return bedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });

    setBedtimes(calculatedTimes);
  };

  return (
    <div className="calculator-container">
      <h1>Sleep Cycle Calculator</h1>
      <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>
        Calculates the best time to go to bed based on sleep cycles (approx. 90 minutes).
      </p>
      <div className="input-group">
        <label>What time do you want to wake up?</label>
        <input type="time" value={wakeUpTime} onChange={(e) => setWakeUpTime(e.target.value)} style={{padding: '10px'}}/>
      </div>
      <button onClick={calculateBedtimes}>Calculate Bedtimes</button>
      {bedtimes.length > 0 && (
        <div className="result">
          <h2>Recommended Bedtimes</h2>
          <p>To feel refreshed, you should try to go to sleep at one of the following times:</p>
          <div style={{display: 'flex', justifyContent: 'space-around', margin: '20px 0'}}>
            {bedtimes.map((time, index) => (
              <strong key={index} style={{fontSize: '20px'}}>{time}</strong>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default SleepCalculator;