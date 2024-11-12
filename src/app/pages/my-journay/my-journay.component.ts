import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ImportsModule } from './import';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-journay',
  templateUrl: './my-journay.component.html',
  styleUrls: ['./my-journay.component.scss'],
  /*   standalone: true,
    imports: [ImportsModule], */
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyJournayComponent implements OnInit {

  events: EventItem[];

  toCV(){
    this.router.navigate(["pages/contact"])
  }
  constructor(private router: Router) {

    this.events = [
      {
        status: 'Currently',
        location: "Top Spots FZE",
        discreption: "Working as a Full Stack Developer, collaborating in a team using Agile methodologies to ensure high-quality software delivery. Responsible for enhancing user experience with responsive web layouts that improved site speed by 65%. Actively troubleshoot and debug applications to maintain smooth functionality. Integrated multiple APIs such as N-Genius for payments, Google Maps, Firebase, and Dubai's Park API. Spearheaded an AI-powered project using OpenAI, 11 Labs, and HeyGen, creating a multi-modal communication platform that includes text, voice, and avatar interactions.",
        date: '01/01/2022',
        icon: 'pi pi-code',
        color: '#9C27B0'
      },
      {
        status: 'Started Master’s Program',
        location: "Syrian Virtual University",
        discreption: "Began a Master’s in Web Science, focusing on advanced data-driven development, machine learning, and scalable platform design. Key projects include optimizing data structures to boost application speed by 40%, developing a personalized recommendation system, and collaborating with industry experts to design a scalable e-commerce platform with real-time features.",
        date: '01/01/2022',
        icon: 'pi pi-book',
        color: '#4CAF50'
      },
      {
        status: 'Lead Full Stack Developer',
        location: "ShoofBook LLC",
        discreption: "Led the development lifecycle from concept to deployment for a high-performance platform handling large volumes of user-generated content. Designed and developed a responsive front-end interface with PrimeNG and Angular, enabling features like ad posting, category browsing, and profile management. Built a scalable backend with NodeJS and ExpressJS focused on speed and reliability, implemented MongoDB schema management for optimized data handling, and reduced database load times with Redis caching. Enhanced search performance with a custom algorithm to improve response times and accuracy, facilitating a smooth user experience.",
        date: '01/01/2020',
        icon: 'pi pi-cog',
        color: '#673AB7'
      },
      {
        status: 'Frontend Web Developer & Mobile Developer',
        location: "TechnoWave FZ",
        discreption: "Led testing and quality documentation to ensure projects met standards and specifications. Developed responsive front-end applications with Angular (versions 7-15), enhancing performance and interface functionality. Utilized Java Spring and ExpressJS for back-end systems that prioritize scalability and security. Built cross-platform mobile apps using NativeScript, Ionic, and Flutter, delivering smooth mobile experiences. Served as the lead developer on UberME, a car rental app using Flutter, creating advanced search filters, map views, streamlined bookings, and a demo mode for a user-friendly car rental experience.",
        date: '01/01/2019',
        icon: 'pi pi-mobile',
        color: '#FF9800'
      },
      {
        status: 'Full Stack Engineer & Educator',
        location: "Al Andalus University for Medical Sciences",
        discreption: "Led a team of junior developers, providing mentorship to improve their skills and project contributions. Taught web programming with a focus on full-stack development, covering modern technologies. Developed front-end applications using AngularJS and built mobile-friendly versions with Ionic and Flutter. Managed university systems and servers for optimal security and performance. Developed RESTful APIs with NodeJS and integrated with Oracle databases for efficient data operations, supporting the university's digital needs.",
        date: '03/01/2017',
        icon: 'pi pi-book',
        color: '#FF5722'
      },
      {
        status: 'Graduated',
        location: "Jami't Al-Ba'ath",
        discreption: "Earned a Bachelor's degree in Information Technology, building a strong foundation in algorithms, data structures, and system architectures. Key projects included a big data analysis project using Hadoop and Spark, and building a scalable e-commerce platform with real-time features. Developed a proficiency in applying algorithmic and data structure knowledge to solve complex problems.",
        date: '01/01/2017',
        icon: 'pi pi-compass',
        color: '#607D8B'
      },
      {
        status: 'Software Developer',
        location: "Scase",
        discreption: "Gained a foundational understanding of software development, including solution deployment, Object-Oriented Analysis and Design (OOAD), and Rapid Application Development (RAD). Designed and developed GUI applications, working on coding, scripting, debugging, and troubleshooting. This role helped establish essential skills in software fundamentals and best practices.",
        date: '04/01/2015',
        icon: 'pi pi-desktop',
        color: '#2196F3'
      }
    ];


    /*   this.events = [
        { status: 'Currently', location: "Top Spots FZE", discreption: " did 1 2 3 4 ", date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
        { status: 'worked', location: "ShoofBook LLC", discreption: " did 1 2 3 4 ", date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
        { status: 'Worked', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Studied', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Graduated', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
      ]; */

    /*  this.events = [
       {
         status: 'Currently',
         location: "Top Spots FZE",
         discreption: "Working as a Full Stack Developer, collaborating in a team using Agile methodologies to ensure high-quality software delivery. Responsible for enhancing user experience with responsive web layouts that improved site speed by 65%. Actively troubleshoot and debug applications to maintain smooth functionality. Integrated multiple APIs such as N-Genius for payments, Google Maps, Firebase, and Dubai's Park API. Spearheaded an AI-powered project using OpenAI, 11 Labs, and HeyGen, creating a multi-modal communication platform that includes text, voice, and avatar interactions.",
         date: '01/01/2022',
         icon: 'pi pi-shopping-cart',
         color: '#9C27B0'
       },
       {
         status: 'Lead Full Stack Developer',
         location: "ShoofBook LLC",
         discreption: "Led the development lifecycle from concept to deployment for a high-performance platform handling large volumes of user-generated content. Designed and developed a responsive front-end interface with PrimeNG and Angular, enabling features like ad posting, category browsing, and profile management. Built a scalable backend with NodeJS and ExpressJS focused on speed and reliability, implemented MongoDB schema management for optimized data handling, and reduced database load times with Redis caching. Enhanced search performance with a custom algorithm to improve response times and accuracy, facilitating a smooth user experience.",
         date: '01/01/2020',
         icon: 'pi pi-cog',
         color: '#673AB7'
       },
       {
         status: 'Frontend Web Developer & Mobile Developer',
         location: "TechnoWave FZ",
         discreption: "Led testing and quality documentation to ensure projects met standards and specifications. Developed responsive front-end applications with Angular (versions 7-15), enhancing performance and interface functionality. Utilized Java Spring and ExpressJS for back-end systems that prioritize scalability and security. Built cross-platform mobile apps using NativeScript, Ionic, and Flutter, delivering smooth mobile experiences. Served as the lead developer on UberME, a car rental app using Flutter, creating advanced search filters, map views, streamlined bookings, and a demo mode for a user-friendly car rental experience.",
         date: '01/01/2019',
         icon: 'pi pi-mobile',
         color: '#FF9800'
       },
       {
         status: 'Full Stack Engineer & Educator',
         location: "Al Andalus University for Medical Sciences",
         discreption: "Led a team of junior developers, providing mentorship to improve their skills and project contributions. Taught web programming with a focus on full-stack development, covering modern technologies. Developed front-end applications using AngularJS and built mobile-friendly versions with Ionic and Flutter. Managed university systems and servers for optimal security and performance. Developed RESTful APIs with NodeJS and integrated with Oracle databases for efficient data operations, supporting the university's digital needs.",
         date: '03/01/2017',
         icon: 'pi pi-book',
         color: '#FF5722'
       },
       {
         status: 'Software Developer',
         location: "Scase",
         discreption: "Gained a foundational understanding of software development, including solution deployment, Object-Oriented Analysis and Design (OOAD), and Rapid Application Development (RAD). Designed and developed GUI applications, working on coding, scripting, debugging, and troubleshooting. This role helped establish essential skills in software fundamentals and best practices.",
         date: '04/01/2015',
         icon: 'pi pi-desktop',
         color: '#2196F3'
       },
       {
         status: 'Graduated',
         location: "Jami't Al-Ba'ath",
         discreption: "Earned a Bachelor's degree in Information Technology, building a strong foundation in algorithms, data structures, and system architectures. Key projects included a big data analysis project using Hadoop and Spark, and building a scalable e-commerce platform with real-time features. Developed a proficiency in applying algorithmic and data structure knowledge to solve complex problems.",
         date: '01/01/2017',
         icon: 'pi pi-graduation-cap',
         color: '#607D8B'
       },
       {
         status: 'Started Master’s Program',
         location: "Syrian Virtual University",
         discreption: "Began a Master’s in Web Science, focusing on advanced data-driven development, machine learning, and scalable platform design. Key projects include optimizing data structures to boost application speed by 40%, developing a personalized recommendation system, and collaborating with industry experts to design a scalable e-commerce platform with real-time features.",
         date: '01/01/2022',
         icon: 'pi pi-university',
         color: '#4CAF50'
       }
     ]; */

  }
  ngOnInit(): void {
  }

}
interface EventItem {
  status?: string;
  discreption?: string;
  location?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}