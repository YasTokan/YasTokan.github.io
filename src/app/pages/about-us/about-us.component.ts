
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
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/testimonial/ali_ibra_th.jpg',
    name: 'Ali Ibrahim',
    designation: 'CEO & founder',
    description: 'Ali Ibrahim is a distinguished figure in the UAE real estate market, bringing over a decade of expertise and innovation to the industry. As the founder and CEO of Penta Real Estate, he has established himself as a visionary leader in property development and investment. Ali combines his deep understanding of the UAE market dynamics with a forward-thinking approach to real estate investment. His ability to identify lucrative opportunities in emerging neighborhoods and off-plan developments has earned him a reputation as a trusted advisor to investors seeking to maximize their returns.',
    usrKey:'CEO'
  },
  {
    image: 'assets/images/testimonial/lawad_th.jpg',
    name: 'Lawand Khouja',
    designation: 'Senior Property Advisor',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey:'SEN_PR_ADVISOR'
  },
  {
    image: 'assets/images/testimonial/alaa_saleh_th.jpg',
    name: 'Alaa Saleh',
    designation: 'Sales Manager',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey:'SALES_MAN'
  },
  {
    image: 'assets/images/testimonial/alaa_th.jpg',
    name: 'Alaa Hassan',
    designation: 'Property advisor',
    description: 'A rising star in real estate investment consulting, combines innovative thinking with solid market analysis. She excels in identifying undervalued properties and off-plan projects with high growth potential. Alaa\'s personalized investment strategies cater to each client\'s unique financial goals and risk tolerance. Outside the office, Alaa is an amateur botanist and enjoys cultivating rare plants. She\'s also passionate about sustainable living and often advises on eco-friendly property investments. Looking to grow your wealth through smart property investments? Alaa Hassan is your go-to expert.',
    usrKey:'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Shakir Ibrahim',
    designation: 'Property advisor',
    description: 'A veteran in the off-plan and investment property sector, brings decades of experience to every client interaction. His deep understanding of market cycles and economic indicators allows him to guide investors towards opportunities that withstand market fluctuations. Shakir\'s track record of successful investments speaks volumes about his expertise. When not advising clients, Shakir is an avid sailor and participates in regional regattas. He also enjoys collecting and restoring vintage watches. For time-tested wisdom in real estate investments, trust Shakir Ibrahim to navigate the market.',
    usrKey:'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/yousef_th.jpg',
    name: 'Yousef Najjar',
    designation: 'Property advisor',
    description: 'Yousef Najjar specializes in high-yield off-plan investments, focusing on emerging markets and up-and-coming neighborhoods. His analytical approach to assessing development projects helps clients maximize their returns. Yousef\'s expertise in negotiating favorable terms with developers adds significant value to his services. In his leisure time, Yousef is a skilled oud player and often performs at local cultural events. He\'s also passionate about preserving traditional architecture in modern developments. Ready to explore high-potential off-plan investments? Let Yousef Najjar be your guide.',
    usrKey:'PR_ADVISOR_YO'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Lerwan Al Youseif',
    designation: 'Property advisor',
    description: 'Excels in crafting bespoke investment strategies for high-net-worth individuals. Her expertise spans both off-plan and existing properties, with a focus on creating balanced, diversified portfolios. Lerwan\'s discretion and attention to detail make her the preferred consultant for clients seeking privacy and personalized service. Outside of work, Lerwan is an accomplished equestrian and participates in show jumping competitions. She also supports local animal welfare organizations. For tailored, high-end real estate investment advice, connect with Lerwan Al Youseif.',
    usrKey:'PR_ADVISOR_LE'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Amer Al Deeb',
    designation: 'Property advisor',
    description: 'Amer Al Deeb is known for his innovative approach to real estate investments, particularly in the off-plan sector. He leverages cutting-edge market analysis tools and AI-driven predictive models to identify promising opportunities. Amer\'s forward-thinking strategies help clients stay ahead in a competitive market. When not revolutionizing investment approaches, Amer enjoys drone racing and virtual reality gaming. He\'s also actively involved in local tech startups focused on property technology. To future-proof your real estate investments, reach out to Amer Al Deeb.',
    usrKey:'PR_ADVISOR_AM'
  },
  {
    image: 'assets/images/testimonial/jameel_th.jpg',
    name: 'Jameel Haydar',
    designation: 'Property advisor',
    description: 'Specializes in commercial real estate investments and off-plan developments. His expertise in analyzing business districts and future urban planning helps investors make informed decisions. Jameel\'s background in corporate finance adds depth to his investment advice, particularly for business owners looking to diversify. In his free time, Jameel is a history buff and enjoys exploring archaeological sites. He also mentors young professionals in the real estate industry. For strategic commercial property investments, let Jameel Haydar guide your decisions.',
    usrKey:'PR_ADVISOR_JA'
  },
  {
    image: 'assets/images/testimonial/anna.jpg',
    name: 'Rana Hashish',
    designation: 'Property advisor',
    description: 'Is a rising star in sustainable real estate investments, focusing on eco-friendly off-plan developments. She helps environmentally conscious investors find properties that align with their values without compromising on returns. Rana\'s knowledge of green building certifications and sustainable urban planning is unparalleled. Outside the office, Rana is a certified yoga instructor and advocates for wellness in urban living. She\'s also passionate about upcycling and often showcases how to repurpose materials in home decor. For investments that are good for your wallet and the planet, connect with Rana Hashish today.',
    usrKey:'PR_ADVISOR_RA'
  },
]

  // Team 
  public team = [{
    image: 'assets/images/testimonial/ali_ibra.jpg',
    name: 'Ali Ibrahim',
    designation: 'CEO & founder',
    description: 'Ali Ibrahim is a distinguished figure in the UAE real estate market, bringing over a decade of expertise and innovation to the industry. As the founder and CEO of Penta Real Estate, he has established himself as a visionary leader in property development and investment. Ali combines his deep understanding of the UAE market dynamics with a forward-thinking approach to real estate investment. His ability to identify lucrative opportunities in emerging neighborhoods and off-plan developments has earned him a reputation as a trusted advisor to investors seeking to maximize their returns.',
    usrKey:'CEO'
  },
  {
    image: 'assets/images/testimonial/lawad.jpg',
    name: 'Lawand Khouja',
    designation: 'Senior Property Advisor',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey:'SEN_PR_ADVISOR'
  },
  {
    image: 'assets/images/testimonial/alaa_saleh.jpg',
    name: 'Alaa Saleh',
    designation: 'Sales Manager',
    description: 'A master of real estate investment strategies with more than 5 years experience in UAE market , brings a wealth of financial acumen to every client interaction. He specializes in creating diverse property portfolios that balance risk and reward. Lawand\'s ability to foresee market trends makes him invaluable for both seasoned and novice investors. When not crunching numbers, Lawand enjoys long-distance running and has completed several marathons. He\'s also a mentor for young entrepreneurs interested in real estate. Ready to build a robust investment portfolio? Let Lawand Khouja guide your real estate journey.',
    usrKey:'SALES_MAN'
  },
  {
    image: 'assets/images/testimonial/alaa.jpg',
    name: 'Alaa Hassan',
    designation: 'Property advisor',
    description: 'A rising star in real estate investment consulting, combines innovative thinking with solid market analysis. She excels in identifying undervalued properties and off-plan projects with high growth potential. Alaa\'s personalized investment strategies cater to each client\'s unique financial goals and risk tolerance. Outside the office, Alaa is an amateur botanist and enjoys cultivating rare plants. She\'s also passionate about sustainable living and often advises on eco-friendly property investments. Looking to grow your wealth through smart property investments? Alaa Hassan is your go-to expert.',
    usrKey:'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Shakir Ibrahim',
    designation: 'Property advisor',
    description: 'A veteran in the off-plan and investment property sector, brings decades of experience to every client interaction. His deep understanding of market cycles and economic indicators allows him to guide investors towards opportunities that withstand market fluctuations. Shakir\'s track record of successful investments speaks volumes about his expertise. When not advising clients, Shakir is an avid sailor and participates in regional regattas. He also enjoys collecting and restoring vintage watches. For time-tested wisdom in real estate investments, trust Shakir Ibrahim to navigate the market.',
    usrKey:'PR_ADVISOR_AL'
  },
  {
    image: 'assets/images/testimonial/yousef.jpg',
    name: 'Yousef Najjar',
    designation: 'Property advisor',
    description: 'Yousef Najjar specializes in high-yield off-plan investments, focusing on emerging markets and up-and-coming neighborhoods. His analytical approach to assessing development projects helps clients maximize their returns. Yousef\'s expertise in negotiating favorable terms with developers adds significant value to his services. In his leisure time, Yousef is a skilled oud player and often performs at local cultural events. He\'s also passionate about preserving traditional architecture in modern developments. Ready to explore high-potential off-plan investments? Let Yousef Najjar be your guide.',
    usrKey:'PR_ADVISOR_YO'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Lerwan Al Youseif',
    designation: 'Property advisor',
    description: 'Excels in crafting bespoke investment strategies for high-net-worth individuals. Her expertise spans both off-plan and existing properties, with a focus on creating balanced, diversified portfolios. Lerwan\'s discretion and attention to detail make her the preferred consultant for clients seeking privacy and personalized service. Outside of work, Lerwan is an accomplished equestrian and participates in show jumping competitions. She also supports local animal welfare organizations. For tailored, high-end real estate investment advice, connect with Lerwan Al Youseif.',
    usrKey:'PR_ADVISOR_LE'
  },
  {
    image: 'assets/images/testimonial/p2.png',
    name: 'Amer Al Deeb',
    designation: 'Property advisor',
    description: 'Amer Al Deeb is known for his innovative approach to real estate investments, particularly in the off-plan sector. He leverages cutting-edge market analysis tools and AI-driven predictive models to identify promising opportunities. Amer\'s forward-thinking strategies help clients stay ahead in a competitive market. When not revolutionizing investment approaches, Amer enjoys drone racing and virtual reality gaming. He\'s also actively involved in local tech startups focused on property technology. To future-proof your real estate investments, reach out to Amer Al Deeb.',
    usrKey:'PR_ADVISOR_AM'
  },
  {
    image: 'assets/images/testimonial/jameel.jpg',
    name: 'Jameel Haydar',
    designation: 'Property advisor',
    description: 'Specializes in commercial real estate investments and off-plan developments. His expertise in analyzing business districts and future urban planning helps investors make informed decisions. Jameel\'s background in corporate finance adds depth to his investment advice, particularly for business owners looking to diversify. In his free time, Jameel is a history buff and enjoys exploring archaeological sites. He also mentors young professionals in the real estate industry. For strategic commercial property investments, let Jameel Haydar guide your decisions.',
    usrKey:'PR_ADVISOR_JA'
  },
  {
    image: 'assets/images/testimonial/anna.jpg',
    name: 'Rana Hashish',
    designation: 'Property advisor',
    description: 'Is a rising star in sustainable real estate investments, focusing on eco-friendly off-plan developments. She helps environmentally conscious investors find properties that align with their values without compromising on returns. Rana\'s knowledge of green building certifications and sustainable urban planning is unparalleled. Outside the office, Rana is a certified yoga instructor and advocates for wellness in urban living. She\'s also passionate about upcycling and often showcases how to repurpose materials in home decor. For investments that are good for your wallet and the planet, connect with Rana Hashish today.',
    usrKey:'PR_ADVISOR_RA'
  },
]

}
