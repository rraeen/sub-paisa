import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarChart() {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [
          10000,
          40000,
          30000,
          30000,
          10000,
          40000,
          20000,
          30000,
          40000,
          45000,
          50000,
          30000,
        ],
        backgroundColor: '#1A9CED',
        hoverBackgroundColor: ['#FF8800', '#1A9CED'],
      },
    ],
  }
  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 50000,
        ticks: {
          stepSize: 10000,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },

    responsive: true,
    borderRadius: 10,
  }

  return (
    <div className="just-center" style={{ height: '240px' }}>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart
