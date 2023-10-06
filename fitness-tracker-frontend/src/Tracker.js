import React, { useState } from 'react';

function Tracker() {
  const [userId, setUserId] = useState('');
  const [steps, setSteps] = useState('');
  const [workout, setWorkout] = useState('');
  const [calories, setCalories] = useState('');

  const logData = () => {
    // Log steps
    fetch('http://localhost:3000/log-steps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, steps })
    });
  
    // Log workout
    fetch('http://localhost:3000/log-workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, workout })
    });
  
    // Log calories
    fetch('http://localhost:3000/log-calories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, calories })
    });
  };  

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Steps:</label>
        <input type="text" value={steps} onChange={(e) => setSteps(e.target.value)} />
      </div>
      <div>
        <label>Workout:</label>
        <input type="text" value={workout} onChange={(e) => setWorkout(e.target.value)} />
      </div>
      <div>
        <label>Calories:</label>
        <input type="text" value={calories} onChange={(e) => setCalories(e.target.value)} />
      </div>
      <button onClick={logData}>Log Data</button>
    </div>
  );
}

export default Tracker;
