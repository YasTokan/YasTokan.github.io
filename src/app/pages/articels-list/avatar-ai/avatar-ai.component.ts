import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-ai',
  templateUrl: './avatar-ai.component.html',
  styleUrls: ['./avatar-ai.component.scss']
})
export class AvatarAIComponent implements OnInit {


  avatarChartData = {
    labels: ['Realism', 'TTS Quality', 'Custom Avatars', 'Ease of Use', 'Multilingual Support'],
    datasets: [
      {
        label: 'HeyGen',
        data: [9, 10, 9, 9, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Synthesia',
        data: [8, 9, 7, 9, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'D-ID',
        data: [7, 8, 8, 8, 8],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
    ]
  };

  avatarChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      title: {
        display: true,
        text: 'AI Avatar Tools Comparison - 2025'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10
      }
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
