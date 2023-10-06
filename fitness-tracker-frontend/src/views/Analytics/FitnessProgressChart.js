import React from 'react';
import { Line } from 'react-chartjs-2';

const FitnessProgressChart = ({ title = "My Progress" }) => {
    const chartData = {
        labels: ['01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023'], // Example dates
        datasets: [
            {
                label: title,
                data: [5, 8, 2, 6, 9], // Example data values
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div className="chart">
            <Line data={chartData} />
        </div>
    );
}

export default FitnessProgressChart;
