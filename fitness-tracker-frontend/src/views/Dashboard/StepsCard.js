import React from 'react';

const StepCard = ({ totalSteps }) => {
    return (
        <div className="card">
            <h3>Total Steps</h3>
            <p>{totalSteps}</p>
        </div>
    );
}

export default StepCard;
