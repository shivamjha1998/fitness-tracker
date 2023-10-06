import React from 'react';
import WorkoutCard from './WorkoutCard';
import StepsCard from './StepsCard';
import CaloriesCard from './CaloriesCard';
import ActivityFeed from './ActivityFeed';

const Dashboard = () => {
    // For simplicity, using static data. You'd fetch this from the backend in a real-world scenario.
    const totalWorkouts = 5;
    const totalSteps = 10000;
    const totalCalories = 1500;
    const recentActivities = ["Logged 30 mins of running", "Logged 500 calories lunch", "Walked 5000 steps"];

    return (
        <div className="dashboard">
            <WorkoutCard totalWorkouts={totalWorkouts} />
            <StepsCard totalSteps={totalSteps} />
            <CaloriesCard totalCalories={totalCalories} />
            <ActivityFeed activities={recentActivities} />
        </div>
    );
}

export default Dashboard;
