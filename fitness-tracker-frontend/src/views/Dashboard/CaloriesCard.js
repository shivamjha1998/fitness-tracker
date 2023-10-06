import React from 'react';

const CaloriesCard = ({ totalCalories }) => {
    return (
        <div className="card">
            <h3>Total Steps</h3>
            <p>{totalCalories}</p>
        </div>
    );
}

export default CaloriesCard;
