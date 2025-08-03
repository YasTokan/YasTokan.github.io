import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.scss']
})
export class BgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  bigDataChartData = {
    labels: ['Social Media', 'IoT Devices', 'Transactional Systems', 'Logs & Sensors', 'Cloud Storage'],
    datasets: [
      {
        label: 'Data Volume (Relative Scale)',
        data: [90, 70, 80, 60, 85],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  bigDataChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Big Data Sources by Volume – 2025'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Volume Score (0–100)'
        }
      }
    }
  };


}
