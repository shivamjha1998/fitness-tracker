import React from 'react';

const ActivityFeed = ({ activities }) => {
    return (
        <div className="activity-feed">
            <h3>Recent Activities</h3>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    );
}

export default ActivityFeed;
