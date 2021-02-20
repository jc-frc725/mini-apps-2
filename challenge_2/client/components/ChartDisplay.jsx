import React, {useEffect} from 'react';
import ChartJS from 'chart.js';

const ChartDisplay = ({ data, values }) => {

  useEffect(() => {
    let ctx = document.getElementById('myChart').getContext('2d');
      let myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data,
          datasets: [{
            label: 'USD',
            data: values,
            borderWidth: 2,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          }
        }
      });
  });

  return (
    <div>
      <canvas className="chart" id="myChart" width="400" height="400"></canvas>
    </div>
  );


}

export default ChartDisplay;