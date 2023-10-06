import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './views/Dashboard/Dashboard';
import Analytics from './views/Analytics/Analytics';
import LogWorkout from './views/LogWorkout';
import LogSteps from './views/LogSteps';
import LogCalories from './views/LogCalories';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/log-workout" element={<LogWorkout />} />
          <Route path="/log-steps" element={<LogSteps />} />
          <Route path="/log-calories" element={<LogCalories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
