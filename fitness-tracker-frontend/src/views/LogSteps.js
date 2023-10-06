import React, { useState } from 'react';

const LogSteps = () => {
    const [steps, setSteps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send this data to the backend, for now we'll just log it
        console.log({ steps });

        // Reset the form after submission
        setSteps('');
    };

    return (
        <div className="log-steps">
            <h2>Log Steps</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Number of Steps:</label>
                    <input 
                        type="number" 
                        value={steps} 
                        onChange={(e) => setSteps(e.target.value)} 
                    />
                </div>
                <button type="submit">Log Steps</button>
            </form>
        </div>
    );
}

export default LogSteps;
