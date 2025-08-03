import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articals',
  templateUrl: './articals.component.html',
  styleUrls: ['./articals.component.scss']
})
export class ArticalsComponent implements OnInit {

  constructor(private router: Router) { }

  articles = [
    {
      title: 'OpenAI vs Anthropic vs DeepSeek: A Comprehensive Comparison',
      summary: 'This article explores the differences and similarities between OpenAI, Anthropic, and DeepSeek, covering models, alignment strategies, safety, performance benchmarks, and ecosystem impact.'
    },
    {
      title: 'Understanding Big Data: Concepts, Challenges, and Opportunities',
      summary: 'Big Data has transformed how businesses and governments operate. This article introduces the 5 V\'s of Big Data, common technologies, and how it enables advanced analytics.'
    },
    {
      title: 'Top AI Avatar Tools in 2025: A New Era of Virtual Representation',
      summary: 'AI-generated avatars are booming in popularity. We examine the most powerful AI avatar platforms, their use cases, customization features, and real-world applications.'
    },
    {
      title: 'MapReduce vs Orange: Battle Between Classic and Modern Data Tools',
      summary: 'This article compares the traditional MapReduce paradigm with the user-friendly Orange platform, focusing on usability, flexibility, and real-world applications.'
    },

    {
      title: 'Hadoop vs Apache Spark: A Deep Dive into Big Data Engines',
      summary: 'We compare Hadoop and Apache Spark across performance, use cases, scalability, and ecosystem integration to help you choose the right big data engine.'
    },

    {
      title: 'How LLMs Are Changing Software Development',
      summary: 'Large Language Models (LLMs) are becoming integral tools for software engineers. We explore how models like GPT, Claude, and DeepSeekCoder are reshaping coding workflows.'
    },
    {
      title: 'Edge AI in 2025: Smarter Devices, Faster Decisions',
      summary: 'Edge AI pushes intelligence to the device level. Learn how Edge AI is used in autonomous vehicles, smart homes, and industrial IoT with minimal latency.'
    },
    {
      title: 'The Future of AI Ethics and Regulation',
      summary: 'With AI systems affecting billions, ethical concerns and regulations are more important than ever. This article explores major frameworks and global initiatives shaping AI governance.'
    }
  ];

  ngOnInit(): void {
  }

  toarticleDetails(index: any) {
    let i = index + 1;
    this.router.navigate(['pages/articals/' + i]);
  }
}
