import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

marker('HOME.DUBAI_BRANCH');
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo_or.png'; // Change Logo
  
  public products: Product[] = [];
  
  public ProductSliderConfig: any = ProductSlider;
  trSub: Subscription;
  constructor(public productService: ProductService, private translate: TranslateService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'pets');
    });
    this.syncTR();
  }

  public sliders = [
    {
    title: 'every pet is different',
    subTitle: 'lets shop',
    image: 'assets/images/slider/17.jpg'
  }, {
    title: 'Any thing that pets want',
    subTitle: 'save 20%',
    image: 'assets/images/slider/18.jpg'
  }];

   // Blog
   public blogs = [{
    image: 'assets/images/yas/background_d.jpeg',
    date: '02 January 2019',
    title: 'Dubai',
    details: 'Dubai',
    by: ''
  }, 
  {
    image: 'assets/images/slider/123/sh.jpg',
    date: '07 Feb 2020',
    title: 'Sharjah',
    details: 'We will find you the best',
    by: ''
  }, 
  {
    image: 'assets/images/slider/123/Ajman_2.jpg',
    date: '27 January 2018',
    title: 'Ajman',
    details: 'According to your needs',
    by: ''
  }];
  // Logo
  public logos = [{
    image: 'assets/images/yas/background_d.jpeg',
  },
   {
    image: 'assets/images/slider/123/sh.jpg',
  },
   {
    image: 'assets/images/slider/123/Ajman_2.jpg',
  }
  ]

  // Collection banner
  public collections1 = [{
    image: 'assets/images/collection/pets/1.jpg',
    title: 'Clothes'
  }, 
  {
    image: 'assets/images/collection/pets/2.jpg',
    title: 'Groom'
  },
  {
    image: 'assets/images/collection/pets/3.jpg',
    title: 'food'
  }];

  public collections2 = [{
    image: 'assets/images/collection/pets/4.jpg',
    title: 'Home'
  },
  {
    image: 'assets/images/collection/pets/5.jpg',
    title: 'cats'
  },
  {
    image: 'assets/images/collection/pets/6.jpg',
    title: 'bowls'
  }];

 

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#ff9944');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }
  syncTR() {
    this.blogs[0].details = this.translate.instant('HOME.WELCOME_UAE');
    this.blogs[1].details = this.translate.instant('HOME.FIND_BEST');
    this.blogs[2].details = this.translate.instant('HOME.ACC_NEEDS');

    this.blogs[0].title = this.translate.instant('HOME.DUBAI');
    this.blogs[1].title = this.translate.instant('HOME.SHARJAH');
    this.blogs[2].title = this.translate.instant('HOME.AJMAN');

    this.trSub = this.translate.onLangChange.subscribe((data: any) => {
      this.blogs[0].details = this.translate.instant('HOME.WELCOME_UAE');
      this.blogs[1].details = this.translate.instant('HOME.FIND_BEST');
      this.blogs[2].details = this.translate.instant('HOME.ACC_NEEDS');
  
      this.blogs[0].title = this.translate.instant('HOME.DUBAI');
      this.blogs[1].title = this.translate.instant('HOME.SHARJAH');
      this.blogs[2].title = this.translate.instant('HOME.AJMAN');
  
    });
  }
}
