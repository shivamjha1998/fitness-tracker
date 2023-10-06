import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Fitness Tracker</h1>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/log-workout">Log Workout</Link>
                <Link to="/log-steps">Log Steps</Link>
                <Link to="/log-calories">Log Calories</Link>
            </nav>
        </header>
    );
}

export default Header;
