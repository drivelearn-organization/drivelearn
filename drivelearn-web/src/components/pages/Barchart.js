import React from 'react';
import {Bar} from 'react-chartjs-2';
import '../css/Barchart.css';
mport React from 'react';
import {Bar} from 'react-chartjs-2';
import '../css/Barchart.css';

const Barchart = () => {
    return (
        <div className="barchart">
        
            <Bar 
            data = {{
                labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.','Aug','Sep.','Oct.','Nov.','	Dec.'],
                datasets: [
                    {
                        label: '2021',
                        data:[12, 19, 3,5,7,9], 
                        backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                        ],

                        borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: '2020',
                        data:[14, 1, 8,2,17,6,6], 
                        backgroundColor: 'rgba(255, 99, 132, 1)',
                        borderColor: 'black',
                        borderWidth: 1

                    }

                ],
            }}
                height = {250}
                width ={550}
                options= {{
                    maintainAspectRatio:false,
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                   }
                }}
            />
        </div>
    )
}

export default Barchart;
