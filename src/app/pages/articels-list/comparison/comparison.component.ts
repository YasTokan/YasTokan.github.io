import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartModule } from "primeng/chart";

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],

})


export class ArticleDetailsComponent implements OnInit {

  radarChartData: any;
  radarChartOptions: any;

  ngOnInit(): void {
    this.init();
    this.radarChartData = {
      labels: [
        'Model Strength',
        'Safety & Alignment',
        'Openness',
        'Multilingual Support',
        'API Ecosystem'
      ],
      datasets: [
        {
          label: 'OpenAI',
          data: [9, 8, 5, 7, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
        },
        {
          label: 'Anthropic',
          data: [8, 10, 6, 6, 7],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        },
        {
          label: 'DeepSeek',
          data: [8, 7, 9, 9, 6],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
        }
      ]
    };

    this.radarChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'AI Labs Comparison Radar'
        }
      },
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 10
        }
      }
    };
  }


costChartData: any;
costChartOptions: any;
processingChartData: any;
processingChartOptions: any;


processingChartData1: any;
processingChartOptions1: any;


crashChartData: any;
crashChartOptions: any;


  init() {

    this.crashChartData = {
  labels: ['OpenAI', 'Anthropic', 'DeepSeek'],
  datasets: [
    {
      label: 'Estimated Crash Risk (%)',
      data: [40, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ]
};

this.crashChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    title: {
      display: true,
      text: 'Crash Risk Comparison'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 50,
      title: {
        display: true,
        text: 'Crash Risk (%)'
      }
    }
  }
};




    this.processingChartData1 = {
  labels: ['OpenAI', 'Anthropic', 'DeepSeek'],
  datasets: [
    {
      label: 'Processing & Modeling Efficiency (score / 10)',
      data: [8, 8, 9],
      backgroundColor: [
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
};

    this.processingChartData = {
  labels: ['OpenAI', 'Anthropic', 'DeepSeek'],
  datasets: [
    {
      label: 'Processing & Modeling Efficiency (score / 10)',
      data: [9, 8, 7],
      backgroundColor: [
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 205, 86, 0.6)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)'
      ],
      borderWidth: 1
    }
  ]
};

this.processingChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    title: {
      display: true,
      text: 'Data Processing & Modeling Efficiency'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 10,
      title: {
        display: true,
        text: 'Efficiency Score'
      }
    }
  }
};



    this.costChartData = {
      labels: ['OpenAI', 'Anthropic', 'DeepSeek'],
      datasets: [
        {
          label: 'Estimated Cost per 1M tokens (USD)',
          data: [30, 20, 5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }
      ]
    };

    this.costChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Relative Cost per 1M Tokens'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'USD ($)'
          }
        }
      }
    };

  }
  constructor() { }

  ngAfterViewInit(): void {
    // Any additional initialization after view is ready
  }
}
