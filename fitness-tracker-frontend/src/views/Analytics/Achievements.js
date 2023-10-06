import React from 'react';

const Achievements = ({ achievements }) => {
    return (
        <div className="achievements">
            <h2>Achievements</h2>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>
                        <strong>{achievement.title}</strong>: {achievement.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

Achievements.defaultProps = {
    achievements: []
};


export default Achievements;
