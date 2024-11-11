
import { Component, OnInit } from '@angular/core';
import { TeamSlider, TestimonialSlider } from '../../shared/data/slider';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

marker('ABOUT.TEAM.CEO');
marker('ABOUT.TEAM.CTO');
marker('ABOUT.TEAM.SEN_PR_ADVISOR');
marker('ABOUT.TEAM.PR_ADVISOR_AL');
marker('ABOUT.TEAM.PR_ADVISOR_SH');
marker('ABOUT.TEAM.PR_ADVISOR_YO');
marker('ABOUT.TEAM.PR_ADVISOR_LE');
marker('ABOUT.TEAM.PR_ADVISOR_AM');
marker('ABOUT.TEAM.PR_ADVISOR_JA');
marker('ABOUT.TEAM.PR_ADVISOR_RA');
marker('ABOUT.TEAM.SALES_MAN');
marker('ABOUT.TEAM.PR_ADVISOR');


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;
  public MobileApps = [
    {
      image: '../assets/images/APX/logo.png',
      name: 'UberMe',
      designation: 'https://uberme-gold.vercel.app/#/',
      description: '<strong>UberME</strong> is a sleek, user-friendly <strong>car rental app</strong> that connects car owners with people seeking rentals. Right from the start, users choose whether they want to <strong>rent a car</strong> or <strong>list their own</strong>, diving into a marketplace of high-end vehicles like <strong>Lamborghinis</strong> and <strong>Ferraris</strong>, complete with photos and detailed specs. <strong>Advanced filters</strong> help renters narrow down options by make, color, horsepower, and more, while a <strong>map view</strong> shows available cars nearby. The <strong>booking process</strong> is simple and intuitive: find the car you want, check its details, and hit "Book Now." Car owners can effortlessly list their vehicles, setting rates and highlighting unique features to attract renters. With <strong>smooth navigation</strong>, personalized profiles, and a <strong>demo mode</strong> for new users, UberME makes renting or listing a car as exciting and easy as possible. Perfect for anyone who wants a <strong>convenient</strong> and <strong>luxurious car-sharing experience</strong>!',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/chatAI.png',
      name: 'TSD AI',
      designation: 'https://www.topspotsdubai.com/',
      description: 'The "<strong>TopSpots x ChatGPT</strong>" app is a unique, fully custom-built application that seamlessly integrates <strong>advanced AI</strong> for exploring top <strong>travel destinations</strong>. Created entirely from scratch, including the <strong>back-end architecture</strong>, this app offers a <strong>flexible</strong>, user-centered <strong>chat experience</strong>. At its core, users can select from various <strong>interaction modes</strong>. Start a <strong>text chat</strong> for traditional messaging, <strong>voice chat</strong> powered by <strong>11 Labs</strong> for spoken interaction, or engage with a <strong>Heygen avatar chat</strong>, where an AI-powered avatar converses with you, making the experience even more engaging and lifelike. The chat experience is versatile and interactive, combining <strong>local insights</strong> with AI to answer questions about <strong>popular locations</strong>, relaxing spots, or hidden gems. With each mode, users are guided by their preferred style of interaction, whether they’re looking for quick text replies, immersive voice guidance, or an engaging visual chat with an avatar. This entire system, from the <strong>user interface</strong> to the <strong>complex back-end</strong>, was crafted with precision, making it a robust, user-friendly travel companion. For a deeper dive into the <strong>back-end functionality</strong>, check out the backend projects for detailed insights into the infrastructure supporting this innovative app.',
      usrKey: 'PR_ADVISOR_AL'
    },
  ]


/*   public MobileApps = [
    {
      image: '../assets/images/APX/logo.png',
      name: 'UberMe',
      designation: 'https://uberme-gold.vercel.app/#/',
      description: 'UberME is a sleek, user-friendly car rental app that connects car owners with people seeking rentals. Right from the start, users choose whether they want to rent a car or list their own, diving into a marketplace of high-end vehicles like Lamborghinis and Ferraris, complete with photos and detailed specs. Advanced filters help renters narrow down options by make, color, horsepower, and more, while a map view shows available cars nearby. The booking process is simple and intuitive: find the car you want, check its details, and hit "Book Now." Car owners can effortlessly list their vehicles, setting rates and highlighting unique features to attract renters. With smooth navigation, personalized profiles, and a demo mode for new users, UberME makes renting or listing a car as exciting and easy as possible. Perfect for anyone who wants a convenient and luxurious car-sharing experience!',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/chatAI.png',
      name: 'TSD AI',
      designation: 'https://www.topspotsdubai.com/',
      description: ' The "TopSpots x ChatGPT" app is a unique, fully custom-built application that seamlessly integrates advanced AI for exploring top travel destinations. Created entirely from scratch, including the back-end architecture, this app offers a flexible, user-centered chat experience.  At its core, users can select from various interaction modes. Start a text chat for traditional messaging, voice chat powered by 11 Labs for spoken interaction, or engage with a Heygen avatar chat, where an AI-powered avatar converses with you, making the experience even more engaging and lifelike.  The chat experience is versatile and interactive, combining local insights with AI to answer questions about popular locations, relaxing spots, or hidden gems. With each mode, users are guided by their preferred style of interaction, whether they’re looking for quick text replies, immersive voice guidance, or an engaging visual chat with an avatar. This entire system, from the user interface to the complex back-end, was crafted with precision, making it a robust, user-friendly travel companion. For a deeper dive into the back-end functionality, check out the backend projects for detailed insights into the infrastructure supporting this innovative app.',
      usrKey: 'PR_ADVISOR_AL'
    },
  ] */
  public frontEnd = [
    {
      image: 'https://cdn.prod.website-files.com/6231428007cca207d2265464/645c738fa80d019944e577c7_ChatFood%20by%20Deliverect%20Logo%20Color%20-%20Blue.svg',
      name: 'ChatFood',
      designation: 'https://www.chatfood.io/',
      description: 'Chatfood is a platform that empowers businesses to manage <strong>online ordering</strong>, <strong>marketing</strong>, and <strong>analytics</strong> for food services. My role involved creating a <strong>responsive, modern interface</strong> that caters to both end-users and administrators. Highlights: I utilized <strong>Angular</strong> and <strong>Bootstrap</strong> to build <strong>dynamic, responsive layouts</strong> that look and function well on any device. I worked closely with <strong>UX designers</strong> to ensure the platform\'s aesthetic matched its functionality, optimizing key areas for <strong>mobile performance</strong>. Through custom <strong>SCSS</strong>, I maintained design consistency while allowing easy scaling of the UI components. This project required meticulous attention to <strong>usability</strong>, as the platform had to support a range of users with varying technical backgrounds. Technologies: <strong>Angular 7</strong>, <strong>SCSS</strong> for styling, <strong>Bootstrap 4</strong> for responsive layout design.',
      usrKey: 'SALES_MAN'
    },
    {
      image: 'https://au.edu.sy/images/logo-wide-ar.png',
      name: 'Al Andalus University',
      designation: 'https://au.edu.sy/en/home',
      description: 'Al Andalus University is a <strong>visually engaging</strong> and <strong>user-centric platform</strong> designed to provide <strong>students</strong>, <strong>faculty</strong>, and <strong>visitors</strong> with easy access to university resources, news, and academic information. Built with a <strong>modern, responsive front-end</strong>, the website offers <strong>seamless navigation</strong> across all devices, from desktops to mobile, ensuring a consistent and intuitive user experience. As the <strong>front-end developer</strong>, you focused on crafting an interface that reflects AIU\'s <strong>academic professionalism</strong> while remaining approachable for users. The design emphasizes <strong>clarity</strong> and <strong>accessibility</strong>, making it simple for prospective students to learn about the university\'s programs, admissions requirements, and campus life. The website also incorporates <strong>interactive elements</strong>, such as dynamic menus and responsive layouts, to enhance <strong>user engagement</strong> and ease of use. Your front-end development work leverages the <strong>latest technologies</strong> to create a fast and reliable experience. Each page loads efficiently, with optimized visuals and well-structured code that aligns with <strong>modern web standards</strong>. The interface is clean and polished, with thoughtful typography, balanced color schemes, and a layout that guides users effortlessly to essential information, from academic departments to recent news and events. Overall, the Arab International University website stands as a testament to your expertise in <strong>front-end development</strong>, showcasing a robust, well-crafted online presence that serves the university\’s community and enhances its <strong>digital identity</strong>.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/p_logo.png',
      name: 'Penta Realestat',
      designation: 'https://penta--one.vercel.app/',
      description: 'As the <strong>front-end developer</strong> for Penta Brokers, I was tasked with designing a <strong>responsive and professional website</strong> that reflects Penta’s position as a <strong>trusted brokerage firm</strong>. The site is crafted to provide clients with a <strong>seamless</strong> and <strong>intuitive experience</strong>, showcasing Penta’s services and expertise in the brokerage industry through a <strong>sleek, user-friendly interface</strong>. With a focus on <strong>clarity</strong> and <strong>accessibility</strong>, I developed the front-end to ensure <strong>easy navigation</strong> and a polished look across all devices, from desktop to mobile. The design features an <strong>organized layout</strong>, interactive elements, and responsive visuals that guide users effortlessly through Penta’s offerings, from brokerage services to client resources. My work emphasized <strong>performance</strong> and <strong>efficiency</strong>, ensuring fast load times and smooth interactions, which are essential for a professional financial services platform. By leveraging the <strong>latest front-end technologies</strong>, I aimed to create a <strong>reliable</strong> and <strong>visually appealing online presence</strong> that strengthens Penta’s brand and supports its client relationships. This project reflects my commitment to building high-quality digital experiences that effectively meet business and client needs.',
      usrKey: 'SALES_MAN'
    },
  ]

 /*  public frontEnd = [
    {
      image: 'https://cdn.prod.website-files.com/6231428007cca207d2265464/645c738fa80d019944e577c7_ChatFood%20by%20Deliverect%20Logo%20Color%20-%20Blue.svg',
      name: 'ChatFood',
      designation: 'https://www.chatfood.io/',
      description: 'Chatfood is a platform that empowers businesses to manage online ordering, marketing, and analytics for food services. My role involved creating a responsive, modern interface that caters to both end-users and administrators. Highlights: I utilized Angular and Bootstrap to build dynamic, responsive layouts that look and function well on any device. I worked closely with UX designers to ensure the platform\'s aesthetic matched its functionality, optimizing key areas for mobile performance. Through custom SCSS, I maintained design consistency while allowing easy scaling of the UI components. This project required meticulous attention to usability, as the platform had to support a range of users with varying technical backgrounds. Technologies: Angular 7, SCSS for styling, Bootstrap 4 for responsive layout design.',
      usrKey: 'SALES_MAN'
    },
    {
      image: 'https://au.edu.sy/images/logo-wide-ar.png',
      name: 'Al Andalus University',
      designation: 'https://au.edu.sy/en/home',
      description: ' Al Andalus University is a visually engaging and user-centric platform designed to provide students, faculty, and visitors with easy access to university resources, news, and academic information. Built with a modern, responsive front-end, the website offers seamless navigation across all devices, from desktops to mobile, ensuring a consistent and intuitive user experience. As the front-end developer, you focused on crafting an interface that reflects AIU\'s academic professionalism while remaining approachable for users. The design emphasizes clarity and accessibility, making it simple for prospective students to learn about the university\'s programs, admissions requirements, and campus life. The website also incorporates interactive elements, such as dynamic menus and responsive layouts, to enhance user engagement and ease of use.Your front-end development work leverages the latest technologies to create a fast and reliable experience. Each page loads efficiently, with optimized visuals and well-structured code that aligns with modern web standards. The interface is clean and polished, with thoughtful typography, balanced color schemes, and a layout that guides users effortlessly to essential information, from academic departments to recent news and events.Overall, the Arab International University website stands as a testament to your expertise in front-end development, showcasing a robust, well-crafted online presence that serves the university\’s community and enhances its digital identity.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/p_logo.png',
      name: 'Penta Realestat',
      designation: 'https://penta--one.vercel.app/',
      description: 'As the front-end developer for Penta Brokers, I was tasked with designing a responsive and professional website that reflects Penta’s position as a trusted brokerage firm. The site is crafted to provide clients with a seamless and intuitive experience, showcasing Penta’s services and expertise in the brokerage industry through a sleek, user-friendly interface.With a focus on clarity and accessibility, I developed the front-end to ensure easy navigation and a polished look across all devices, from desktop to mobile. The design features an organized layout, interactive elements, and responsive visuals that guide users effortlessly through Penta’s offerings, from brokerage services to client resources.My work emphasized performance and efficiency, ensuring fast load times and smooth interactions, which are essential for a professional financial services platform. By leveraging the latest front-end technologies, I aimed to create a reliable and visually appealing online presence that strengthens Penta’s brand and supports its client relationships. This project reflects my commitment to building high-quality digital experiences that effectively meet business and client needs.',
      usrKey: 'SALES_MAN'
    },

  ] */
  public backendProj = [
    {
      image: '../assets/images/APX/chatAI.png',
      name: 'Top Spots AI',
      designation: 'https://www.chatfood.io/',
      description: 'The <strong>TopSpots x ChatGPT</strong> project features a robust back-end architecture designed to deliver a seamless, AI-driven user experience, which I built with advanced integrations and secure data handling. At the core is <strong>ChatGPT-4.0 Turbo</strong>, which processes user queries and, through natural language processing, finds the most relevant answers from a repository of pre-processed data and blogs. This intelligent query handling is complemented by integrations with <strong>11 Labs</strong> for voice streaming, allowing responses to be spoken, and <strong>HeyGen</strong> for avatar interactions, where a virtual character delivers answers through video. The back end supports real-time streaming for both voice and avatars, enhancing user engagement. Built using a modular, cloud-hosted microservices architecture, it ensures scalability, fault tolerance, and optimized performance. Security is a priority, with user queries encrypted and anonymized for privacy, while session management and caching ensure smooth, fast responses. The result is a sophisticated and interactive platform that offers users personalized, real-time answers through text, voice, and avatar, showcasing the capabilities of modern AI to deliver a truly immersive experience.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/logo.png',
      name: 'UberME',
      designation: 'https://uberme-gold.vercel.app/#/',
      description: 'The <strong>UberME</strong> backend system was expertly developed to support a seamless car rental platform that caters to both types of users: those looking to rent a car and those wanting to list their cars for rent. This backend includes a powerful <strong>admin dashboard</strong> that allows administrators to manage user interactions, oversee bookings, and handle car listings efficiently. The system features a dynamic and complex <strong>filtering mechanism</strong> for renters, enabling them to search through a wide range of options with filters such as make, model, year, horsepower, distance, and more, ensuring users can easily find a car that suits their exact needs. Integrated with <strong>Google Maps</strong> for location-based services, the platform can automatically find the nearest available car for a user’s location. The booking process is fully automated, allowing users to reserve cars in real-time without requiring admin intervention, while the admin dashboard provides visibility over operations with tools for monitoring and troubleshooting if needed. Both the backend and dashboard were designed with a robust, scalable architecture that ensures smooth, responsive, and secure operations, making UberME a reliable and user-centered car-sharing solution.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/icon.png',
      name: 'ECSC',
      designation: 'https://www.ecsc-expat.sy/',
      description: 'The <strong>ECSC</strong> project is a large-scale government platform designed to streamline complex public processes, allowing citizens to perform essential tasks—like obtaining a new trading license or renewing a passport—directly online. As a <strong>backend developer</strong> on a team of around 12 experts, I contributed to building a robust, highly secure system that meticulously manages user data and handles a vast array of government services with flexibility to accommodate intricate workflows and unique exceptions. Developed over three years, this project demanded advanced technologies and significant coordination due to its size and complexity. I worked extensively with <strong>ExpressJS</strong>, <strong>Oracle</strong>, and <strong>Java Spring</strong> to create a scalable, secure backend capable of managing high volumes of data, ensuring smooth, reliable performance. We incorporated numerous security tools and packages to protect sensitive user information, meeting strict government standards for data integrity and privacy. The ECSC platform stands as a powerful example of modern digital governance, making complex government services accessible to users while maintaining the utmost levels of security and data management.',
      usrKey: 'SALES_MAN'
    },
  ]

 /*  public backendProj = [
    {
      image: '../assets/images/APX/chatAI.png',
      name: 'Top Spots AI',
      designation: 'https://www.chatfood.io/',
      description: 'The **TopSpots x ChatGPT** project features a robust back-end architecture designed to deliver a seamless, AI-driven user experience, which I built with advanced integrations and secure data handling. At the core is **ChatGPT-4.0 Turbo**, which processes user queries and, through natural language processing, finds the most relevant answers from a repository of pre-processed data and blogs. This intelligent query handling is complemented by integrations with **11 Labs** for voice streaming, allowing responses to be spoken, and **HeyGen** for avatar interactions, where a virtual character delivers answers through video. The back end supports real-time streaming for both voice and avatars, enhancing user engagement. Built using a modular, cloud-hosted microservices architecture, it ensures scalability, fault tolerance, and optimized performance. Security is a priority, with user queries encrypted and anonymized for privacy, while session management and caching ensure smooth, fast responses. The result is a sophisticated and interactive platform that offers users personalized, real-time answers through text, voice, and avatar, showcasing the capabilities of modern AI to deliver a truly immersive experience.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/logo.png',
      name: 'UberME',
      designation: 'https://uberme-gold.vercel.app/#/',
      description: 'The **UberME** backend system was expertly developed to support a seamless car rental platform that caters to both types of users: those looking to rent a car and those wanting to list their cars for rent. This backend includes a powerful **admin dashboard** that allows administrators to manage user interactions, oversee bookings, and handle car listings efficiently. The system features a dynamic and complex **filtering mechanism** for renters, enabling them to search through a wide range of options with filters such as make, model, year, horsepower, distance, and more, ensuring users can easily find a car that suits their exact needs. Integrated with **Google Maps** for location-based services, the platform can automatically find the nearest available car for a user’s location. The booking process is fully automated, allowing users to reserve cars in real-time without requiring admin intervention, while the admin dashboard provides visibility over operations with tools for monitoring and troubleshooting if needed. Both the backend and dashboard were designed with a robust, scalable architecture that ensures smooth, responsive, and secure operations, making UberME a reliable and user-centered car-sharing solution.',
      usrKey: 'SALES_MAN'
    },
    {
      image: '../assets/images/APX/icon.png',
      name: 'ECSC',
      designation: 'https://www.ecsc-expat.sy/',
      description: 'The **ECSC** project is a large-scale government platform designed to streamline complex public processes, allowing citizens to perform essential tasks—like obtaining a new trading license or renewing a passport—directly online. As a **backend developer** on a team of around 12 experts, I contributed to building a robust, highly secure system that meticulously manages user data and handles a vast array of government services with flexibility to accommodate intricate workflows and unique exceptions. Developed over three years, this project demanded advanced technologies and significant coordination due to its size and complexity. I worked extensively with **ExpressJS**, **Oracle**, and **Java Spring** to create a scalable, secure backend capable of managing high volumes of data, ensuring smooth, reliable performance. We incorporated numerous security tools and packages to protect sensitive user information, meeting strict government standards for data integrity and privacy. The ECSC platform stands as a powerful example of modern digital governance, making complex government services accessible to users while maintaining the utmost levels of security and data management.',
      usrKey: 'SALES_MAN'
    },
  ] */
    public FullStackProjects = [
      {
        image: 'https://www.topspotsdubai.com/assets/images/logo.png',
        name: 'Top Spots Dubai',
        designation: 'https://www.topspotsdubai.com/',
        description: '<strong>Top Spots Dubai</strong> is a comprehensive platform aimed at enhancing <strong>tourism</strong> and <strong>reservation services</strong> in Dubai. I took on a <strong>full-stack role</strong>, contributing to the entire development lifecycle from initial setup to final deployment. <strong>Highlights</strong>: I designed and implemented both the front end and back end, focusing on <strong>user experience</strong> and <strong>performance optimization</strong>. I enhanced <strong>site speed by 65%</strong>, which significantly improved user engagement and SEO. Additionally, I integrated various <strong>third-party APIs</strong>, including <strong>payment gateways</strong> like <strong>N-Genius</strong> and location services such as <strong>Google Maps</strong>, ensuring smooth functionality for users seeking services across the city. The project required ongoing <strong>optimization</strong> and <strong>troubleshooting</strong> to ensure compatibility across devices and platforms. Technologies: <strong>Angular</strong> for the frontend, <strong>NodeJS</strong> with <strong>ExpressJS</strong> for the backend, <strong>MongoDB</strong> for data management, and <strong>API integrations</strong> for payment and mapping.',
        usrKey: 'CEO'
      },
      {
        image: 'http://shoofbook.com/home/assets/images/header/sh-logo-header-large.svg',
        name: 'ShoofBook',
        designation: 'http://shoofbook.com/home/',
        description: '<strong>ShoofBook</strong> is a classified advertising platform akin to <strong>Dubizzle</strong>, built to handle high volumes of <strong>user-generated content</strong> in <strong>real time</strong>. <strong>Highlights</strong>: As the sole developer, I took this project from <strong>concept to launch</strong>, building a <strong>dynamic, scalable platform</strong> that allows users to post ads, browse categories, and manage profiles seamlessly. I focused heavily on <strong>database efficiency</strong> to handle large data volumes and implemented <strong>caching strategies</strong> to reduce load times. A <strong>custom search algorithm</strong> was also developed to enhance the accuracy and speed of search results, making it easy for users to find what they’re looking for. Technologies: <strong>PrimeNG</strong> and <strong>Angular</strong> for the front end, <strong>NodeJS</strong> and <strong>ExpressJS</strong> for the back end, with <strong>MongoDB</strong> for scalable data storage and <strong>Redis</strong> for caching.',
        usrKey: 'SEN_PR_ADVISOR'
      },
    ]
    
  // Testimonial Carousel  
  /* public FullStackProjects = [{
    image: 'https://www.topspotsdubai.com/assets/images/logo.png',
    name: 'Top Spots Dubai',
    designation: 'https://www.topspotsdubai.com/',
    description: 'Top Spots Dubai is a comprehensive platform aimed at enhancing tourism and reservation services in Dubai. I took on a full-stack role, contributing to the entire development lifecycle from initial setup to final deployment.Highlights: I designed and implemented both the front end and back end, focusing on user experience and performance optimization. I enhanced site speed by 65%, which significantly improved user engagement and SEO. Additionally, I integrated various third-party APIs, including payment gateways like N-Genius and location services such as Google Maps, ensuring smooth functionality for users seeking services across the city. The project required ongoing optimization and troubleshooting to ensure compatibility across devices and platforms. Technologies: Angular for the frontend, NodeJS with ExpressJS for the backend, MongoDB for data management, and API integrations for payment and mapping.',
    usrKey: 'CEO'
  },
  {
    image: 'http://shoofbook.com/home/assets/images/header/sh-logo-header-large.svg',
    name: 'ShoofBook',
    designation: 'http://shoofbook.com/home/',
    description: 'ShoofBook is a classified advertising platform akin to Dubizzle, built to handle high volumes of user-generated content in real time. Highlights: As the sole developer, I took this project from concept to launch, building a dynamic, scalable platform that allows users to post ads, browse categories, and manage profiles seamlessly. I focused heavily on database efficiency to handle large data volumes and implemented caching strategies to reduce load times. A custom search algorithm was also developed to enhance the accuracy and speed of search results, making it easy for users to find what they’re looking for. Technologies: PrimeNG and Angular for the front end, NodeJS and ExpressJS for the back end, with MongoDB for scalable data storage and Redis for caching.ation is attached.',
    usrKey: 'SEN_PR_ADVISOR'
  },

  ] */
  // Testimonial Carousel
  public testimonial = [{
    image: 'https://www.topspotsdubai.com/assets/images/logo.png',
    name: 'Top Spots Dubai',
    designation: 'https://www.topspotsdubai.com/',
    description: 'Top Spots Dubai is a comprehensive platform aimed at enhancing tourism and reservation services in Dubai. I took on a full-stack role, contributing to the entire development lifecycle from initial setup to final deployment.Highlights: I designed and implemented both the front end and back end, focusing on user experience and performance optimization. I enhanced site speed by 65%, which significantly improved user engagement and SEO. Additionally, I integrated various third-party APIs, including payment gateways like N-Genius and location services such as Google Maps, ensuring smooth functionality for users seeking services across the city. The project required ongoing optimization and troubleshooting to ensure compatibility across devices and platforms. Technologies: Angular for the frontend, NodeJS with ExpressJS for the backend, MongoDB for data management, and API integrations for payment and mapping.',
    usrKey: 'CEO'
  },
  {
    image: 'http://shoofbook.com/home/assets/images/header/sh-logo-header-large.svg',
    name: 'ShoofBook',
    designation: 'http://shoofbook.com/home/',
    description: 'ShoofBook is a classified advertising platform akin to Dubizzle, built to handle high volumes of user-generated content in real time. Highlights: As the sole developer, I took this project from concept to launch, building a dynamic, scalable platform that allows users to post ads, browse categories, and manage profiles seamlessly. I focused heavily on database efficiency to handle large data volumes and implemented caching strategies to reduce load times. A custom search algorithm was also developed to enhance the accuracy and speed of search results, making it easy for users to find what they’re looking for. Technologies: PrimeNG and Angular for the front end, NodeJS and ExpressJS for the back end, with MongoDB for scalable data storage and Redis for caching.ation is attached.',
    usrKey: 'SEN_PR_ADVISOR'
  },
  {
    image: 'assets/images/testimonial/alaa_saleh_th.jpg',
    name: 'Alaa Saleh',
    designation: 'Sales Manager',
    description: 'Chatfood is a platform that empowers businesses to manage online ordering, marketing, and analytics for food services. My role involved creating a responsive, modern interface that caters to both end-users and administrators. Highlights: I utilized Angular and Bootstrap to build dynamic, responsive layouts that look and function well on any device. I worked closely with UX designers to ensure the platform\'s aesthetic matched its functionality, optimizing key areas for mobile performance. Through custom SCSS, I maintained design consistency while allowing easy scaling of the UI components. This project required meticulous attention to usability, as the platform had to support a range of users with varying technical backgrounds. Technologies: Angular 7, SCSS for styling, Bootstrap 4 for responsive layout design.', usrKey: 'SALES_MAN'
  },
  {
    image: 'assets/images/testimonial/alaa_th.jpg',
    name: 'Alaa Hassan',
    designation: 'Property advisor',
    description: 'A rising star in real estate investment consulting, combines innovative thinking with solid market analysis. She excels in identifying undervalued properties and off-plan projects with high growth potential. Alaa\'s personalized investment strategies cater to each client\'s unique financial goals and risk tolerance. Outside the office, Alaa is an amateur botanist and enjoys cultivating rare plants. She\'s also passionate about sustainable living and often advises on eco-friendly property investments. Looking to grow your wealth through smart property investments? Alaa Hassan is your go-to expert.',
    usrKey: 'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Shakir Ibrahim',
    designation: 'Property advisor',
    description: 'A veteran in the off-plan and investment property sector, brings decades of experience to every client interaction. His deep understanding of market cycles and economic indicators allows him to guide investors towards opportunities that withstand market fluctuations. Shakir\'s track record of successful investments speaks volumes about his expertise. When not advising clients, Shakir is an avid sailor and participates in regional regattas. He also enjoys collecting and restoring vintage watches. For time-tested wisdom in real estate investments, trust Shakir Ibrahim to navigate the market.',
    usrKey: 'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/yousef_th.jpg',
    name: 'Yousef Najjar',
    designation: 'Property advisor',
    description: 'Yousef Najjar specializes in high-yield off-plan investments, focusing on emerging markets and up-and-coming neighborhoods. His analytical approach to assessing development projects helps clients maximize their returns. Yousef\'s expertise in negotiating favorable terms with developers adds significant value to his services. In his leisure time, Yousef is a skilled oud player and often performs at local cultural events. He\'s also passionate about preserving traditional architecture in modern developments. Ready to explore high-potential off-plan investments? Let Yousef Najjar be your guide.',
    usrKey: 'PR_ADVISOR_YO'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Lerwan Al Youseif',
    designation: 'Property advisor',
    description: 'Excels in crafting bespoke investment strategies for high-net-worth individuals. Her expertise spans both off-plan and existing properties, with a focus on creating balanced, diversified portfolios. Lerwan\'s discretion and attention to detail make her the preferred consultant for clients seeking privacy and personalized service. Outside of work, Lerwan is an accomplished equestrian and participates in show jumping competitions. She also supports local animal welfare organizations. For tailored, high-end real estate investment advice, connect with Lerwan Al Youseif.',
    usrKey: 'PR_ADVISOR_LE'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Amer Al Deeb',
    designation: 'Property advisor',
    description: 'Amer Al Deeb is known for his innovative approach to real estate investments, particularly in the off-plan sector. He leverages cutting-edge market analysis tools and AI-driven predictive models to identify promising opportunities. Amer\'s forward-thinking strategies help clients stay ahead in a competitive market. When not revolutionizing investment approaches, Amer enjoys drone racing and virtual reality gaming. He\'s also actively involved in local tech startups focused on property technology. To future-proof your real estate investments, reach out to Amer Al Deeb.',
    usrKey: 'PR_ADVISOR_AM'
  },
  {
    image: 'assets/images/testimonial/jameel_th.jpg',
    name: 'Jameel Haydar',
    designation: 'Property advisor',
    description: 'Specializes in commercial real estate investments and off-plan developments. His expertise in analyzing business districts and future urban planning helps investors make informed decisions. Jameel\'s background in corporate finance adds depth to his investment advice, particularly for business owners looking to diversify. In his free time, Jameel is a history buff and enjoys exploring archaeological sites. He also mentors young professionals in the real estate industry. For strategic commercial property investments, let Jameel Haydar guide your decisions.',
    usrKey: 'PR_ADVISOR_JA'
  },
  {
    image: 'assets/images/testimonial/anna.jpg',
    name: 'Rana Hashish',
    designation: 'Property advisor',
    description: 'Is a rising star in sustainable real estate investments, focusing on eco-friendly off-plan developments. She helps environmentally conscious investors find properties that align with their values without compromising on returns. Rana\'s knowledge of green building certifications and sustainable urban planning is unparalleled. Outside the office, Rana is a certified yoga instructor and advocates for wellness in urban living. She\'s also passionate about upcycling and often showcases how to repurpose materials in home decor. For investments that are good for your wallet and the planet, connect with Rana Hashish today.',
    usrKey: 'PR_ADVISOR_RA'
  },
  ]

  // Team 
  public team = [{
    image: 'assets/images/testimonial/ali_ibra.jpg',
    name: 'Ali Ibrahim',
    designation: 'CEO & founder',
    description: 'Ali Ibrahim is a distinguished figure in the UAE real estate market, bringing over a decade of expertise and innovation to the industry. As the founder and CEO of Penta Real Estate, he has established himself as a visionary leader in property development and investment. Ali combines his deep understanding of the UAE market dynamics with a forward-thinking approach to real estate investment. His ability to identify lucrative opportunities in emerging neighborhoods and off-plan developments has earned him a reputation as a trusted advisor to investors seeking to maximize their returns.',
    usrKey: 'CEO'
  },
  {
    image: 'assets/images/testimonial/lawad.jpg',
    name: 'Lawand Khouja',
    designation: 'Senior Property Advisor',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey: 'SEN_PR_ADVISOR'
  },
  {
    image: 'assets/images/testimonial/alaa_saleh.jpg',
    name: 'Alaa Saleh',
    designation: 'Sales Manager',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey: 'SALES_MAN'
  },
  {
    image: 'assets/images/testimonial/alaa.jpg',
    name: 'Alaa Hassan',
    designation: 'Property advisor',
    description: 'A rising star in real estate investment consulting, combines innovative thinking with solid market analysis. She excels in identifying undervalued properties and off-plan projects with high growth potential. Alaa\'s personalized investment strategies cater to each client\'s unique financial goals and risk tolerance. Outside the office, Alaa is an amateur botanist and enjoys cultivating rare plants. She\'s also passionate about sustainable living and often advises on eco-friendly property investments. Looking to grow your wealth through smart property investments? Alaa Hassan is your go-to expert.',
    usrKey: 'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Shakir Ibrahim',
    designation: 'Property advisor',
    description: 'A veteran in the off-plan and investment property sector, brings decades of experience to every client interaction. His deep understanding of market cycles and economic indicators allows him to guide investors towards opportunities that withstand market fluctuations. Shakir\'s track record of successful investments speaks volumes about his expertise. When not advising clients, Shakir is an avid sailor and participates in regional regattas. He also enjoys collecting and restoring vintage watches. For time-tested wisdom in real estate investments, trust Shakir Ibrahim to navigate the market.',
    usrKey: 'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/yousef.jpg',
    name: 'Yousef Najjar',
    designation: 'Property advisor',
    description: 'Yousef Najjar specializes in high-yield off-plan investments, focusing on emerging markets and up-and-coming neighborhoods. His analytical approach to assessing development projects helps clients maximize their returns. Yousef\'s expertise in negotiating favorable terms with developers adds significant value to his services. In his leisure time, Yousef is a skilled oud player and often performs at local cultural events. He\'s also passionate about preserving traditional architecture in modern developments. Ready to explore high-potential off-plan investments? Let Yousef Najjar be your guide.',
    usrKey: 'PR_ADVISOR_YO'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Lerwan Al Youseif',
    designation: 'Property advisor',
    description: 'Excels in crafting bespoke investment strategies for high-net-worth individuals. Her expertise spans both off-plan and existing properties, with a focus on creating balanced, diversified portfolios. Lerwan\'s discretion and attention to detail make her the preferred consultant for clients seeking privacy and personalized service. Outside of work, Lerwan is an accomplished equestrian and participates in show jumping competitions. She also supports local animal welfare organizations. For tailored, high-end real estate investment advice, connect with Lerwan Al Youseif.',
    usrKey: 'PR_ADVISOR_LE'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Amer Al Deeb',
    designation: 'Property advisor',
    description: 'Amer Al Deeb is known for his innovative approach to real estate investments, particularly in the off-plan sector. He leverages cutting-edge market analysis tools and AI-driven predictive models to identify promising opportunities. Amer\'s forward-thinking strategies help clients stay ahead in a competitive market. When not revolutionizing investment approaches, Amer enjoys drone racing and virtual reality gaming. He\'s also actively involved in local tech startups focused on property technology. To future-proof your real estate investments, reach out to Amer Al Deeb.',
    usrKey: 'PR_ADVISOR_AM'
  },
  {
    image: 'assets/images/testimonial/jameel.jpg',
    name: 'Jameel Haydar',
    designation: 'Property advisor',
    description: 'Specializes in commercial real estate investments and off-plan developments. His expertise in analyzing business districts and future urban planning helps investors make informed decisions. Jameel\'s background in corporate finance adds depth to his investment advice, particularly for business owners looking to diversify. In his free time, Jameel is a history buff and enjoys exploring archaeological sites. He also mentors young professionals in the real estate industry. For strategic commercial property investments, let Jameel Haydar guide your decisions.',
    usrKey: 'PR_ADVISOR_JA'
  },
  {
    image: 'assets/images/testimonial/anna.jpg',
    name: 'Rana Hashish',
    designation: 'Property advisor',
    description: 'Is a rising star in sustainable real estate investments, focusing on eco-friendly off-plan developments. She helps environmentally conscious investors find properties that align with their values without compromising on returns. Rana\'s knowledge of green building certifications and sustainable urban planning is unparalleled. Outside the office, Rana is a certified yoga instructor and advocates for wellness in urban living. She\'s also passionate about upcycling and often showcases how to repurpose materials in home decor. For investments that are good for your wallet and the planet, connect with Rana Hashish today.',
    usrKey: 'PR_ADVISOR_RA'
  },
  ]

}
