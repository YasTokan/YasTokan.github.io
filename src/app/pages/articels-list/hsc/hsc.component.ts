import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hsc',
  templateUrl: './hsc.component.html',
  styleUrls: ['./hsc.component.scss']
})
export class HscComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sparkVsHadoopChartData = {
  labels: ['Speed', 'Streaming Support', 'Ease of Use', 'Scalability', 'Ecosystem'],
  datasets: [
    {
      label: 'Apache Spark',
      data: [9, 9, 8, 9, 8],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'Apache Hadoop',
      data: [5, 3, 5, 9, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

sparkVsHadoopChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    title: {
      display: true,
      text: 'Hadoop vs Spark Feature Comparison'
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
