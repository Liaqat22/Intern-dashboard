import { ArcElement ,Chart as chartjs , BarController, LinearScale, CategoryScale, BarElement, LineElement, PointElement } from 'chart.js';
import React from 'react'
import { Bar, Line ,Pie} from 'react-chartjs-2'
chartjs.register(ArcElement,BarController, LinearScale, CategoryScale,BarElement,LineElement,PointElement);


function Piechart() {

const data = {
    labels: ['Attendance', 'Holidays'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          'lightgreen',
          'red',
          
        ],
       
        data: [65, 25]
      }
    ]
  }
  return (
    <div>
      
      <Bar data={data}/>

    </div>
  )
}

export default Piechart
