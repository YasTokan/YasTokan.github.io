import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {


  constructor() { }

  radarChartData
  ngOnInit() {
    this.radarChartData = {
      labels: [
        'Frontend (Angular, Ionic)',
        'Backend (NodeJS, .NET)',
        'Databases (SQL/NoSQL)',
        'Cloud & DevOps',
        'Mobile Development',
        'AI & Automation',
        'APIs & Integration',
        'Architecture & Security'
      ],
      datasets: [
        {
          label: 'Technical Skill Overview',
          data: [95, 90, 85, 80, 85, 80, 90, 85],
          backgroundColor: 'rgba(255, 76, 59, 0.2)',   // semi-transparent fill
          borderColor: '#ff4c3b',                      // main border
          pointBackgroundColor: '#ff4c3b',             // dot color
          pointBorderColor: '#fff',                    // border of dots
          pointHoverBackgroundColor: '#fff',           // on hover
          pointHoverBorderColor: '#ff4c3b'
        }
      ]
    };
  }

  radarChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    scales: {
      r: {
        suggestedMin: 50,
        suggestedMax: 100
      }
    }
  };

}
