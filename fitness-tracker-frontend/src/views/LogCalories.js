import React, { useState } from 'react';

const LogCalories = () => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send this data to the backend, for now we'll just log it
        console.log({ food, calories });

        // Reset the form after submission
        setFood('');
        setCalories('');
    };

    return (
        <div className="log-calories">
            <h2>Log Calories</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Food Item:</label>
                    <input 
                        type="text" 
                        value={food} 
                        onChange={(e) => setFood(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Calories:</label>
                    <input 
                        type="number" 
                        value={calories} 
                        onChange={(e) => setCalories(e.target.value)} 
                    />
                </div>
                <button type="submit">Log Calories</button>
            </form>
        </div>
    );
}

export default LogCalories;
