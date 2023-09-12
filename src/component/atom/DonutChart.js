import React from 'react'
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

function DonutChart() {
  const data = {
    labels: ['UPI', 'Net Banking'],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ['#FF8800', '#1A9CED'],
        hoverBackgroundColor: ['#FF8800', '#1A9CED'],
      },
    ],
  }

  return (
    <div className="just-center" style={{ height: '12vw', width: '18vw' }}>
      <Doughnut data={data} />
    </div>
  )
}

export default DonutChart
