import React from 'react';
import FitnessProgressChart from './FitnessProgressChart';
import Achievements from './Achievements';

const Analytics = ({ workoutData, stepsData, caloriesData, userAchievements }) => {
    return (
        <div className="analytics">
            <h1>Your Fitness Analytics</h1>
            
            <FitnessProgressChart data={workoutData} title="Workouts" />
            <FitnessProgressChart data={stepsData} title="Steps" />
            <FitnessProgressChart data={caloriesData} title="Calories" />

            <Achievements achievements={userAchievements} />
        </div>
    );
}

export default Analytics;
