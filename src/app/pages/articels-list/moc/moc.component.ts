import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moc',
  templateUrl: './moc.component.html',
  styleUrls: ['./moc.component.scss']
})
export class MocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mapReduceVsOrangeChartData = {
    labels: ['Ease of Use', 'Scalability', 'Speed (Small Data)', 'Learning Curve', 'ML Integration'],
    datasets: [
      {
        label: 'MapReduce',
        data: [3, 10, 4, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Orange',
        data: [9, 4, 8, 9, 9],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  mapReduceVsOrangeChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'MapReduce vs Orange Feature Comparison'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10
      }
    }
  };


}
