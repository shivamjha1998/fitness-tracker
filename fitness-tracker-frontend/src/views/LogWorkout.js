import React, { useState } from 'react';

const LogWorkout = () => {
    const [workoutType, setWorkoutType] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send this data to the backend, for now we'll just log it
        console.log({ workoutType, duration, notes });

        // Reset the form after submission
        setWorkoutType('');
        setDuration('');
        setNotes('');
    };

    return (
        <div className="log-workout">
            <h2>Log a Workout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Type of Workout:</label>
                    <input 
                        type="text" 
                        value={workoutType} 
                        onChange={(e) => setWorkoutType(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Duration (in minutes):</label>
                    <input 
                        type="number" 
                        value={duration} 
                        onChange={(e) => setDuration(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea 
                        value={notes} 
                        onChange={(e) => setNotes(e.target.value)} 
                    />
                </div>
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );
}

export default LogWorkout;
