import React from 'react';

const WorkoutCard = ({ totalWorkouts }) => {
    return (
        <div className="card">
            <h3>Total Workouts</h3>
            <p>{totalWorkouts}</p>
        </div>
    );
}

export default WorkoutCard;
