import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductSlider } from '../../../shared/data/slider';
import { Product } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

marker('FASHION_ONE.COLLECTIONS.FAIR.TITLE');
marker('FASHION_ONE.COLLECTIONS.FAIR.DESC');
marker('FASHION_ONE.COLLECTIONS.HAYAT.TITLE');
marker('FASHION_ONE.COLLECTIONS.HAYAT.DESC');
marker('FASHION_ONE.COLLECTIONS.NAK.TITLE');
marker('FASHION_ONE.COLLECTIONS.NAK.DESC');
marker('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
marker('FASHION_ONE.COLLECTIONS.MARINA.DESC');
@Component({
  selector: 'app-fashion-one',
  templateUrl: './fashion-one.component.html',
  styleUrls: ['./fashion-one.component.scss'],
})
export class FashionOneComponent implements OnInit {
  public products: Product[] = [];
  public productCollections: any[] = [];
  public active;
  trSub: Subscription;
  constructor(public productService: ProductService, private translate: TranslateService) {
    this.syncTR();
    this.productService.getProducts.subscribe((response) => {
      this.products = response.filter((item) => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        });
      });
    });
  }

  public ProductSliderConfig: any = ProductSlider;

  public sliders = [
    {
      title: 'welcome UAE',
      subTitle: 'Dubai',
      image: 'assets/images/slider/123/3.webp',
    },
    {
      title: 'According to your needs',
      subTitle: 'Nakhlat Deira',
      image: 'assets/images/slider/123/dubai-island.jpg',
    },
    {
      title: 'We will find you the best',
      subTitle: 'Marina',
      image: 'assets/images/slider/123/marina.avif',
    }

  ];

  // Collection banner
  public collections = [
    {
      //image: 'assets/images/collection/hotels/gh310.jpg',
      save: 'Grand Hyatt Dubai',
      title: 'Dubai',
      subTitle: 'Nakhlat Deira',
      image: 'https://www.namasteui.com/wp-content/uploads/2018/08/front-end-web-development.jpg',
    },
    {
      //image: 'assets/images/collection/hotels/ajm310.jpg',
      save: 'Fairmont Ajman',
      title: 'Marina',
      subTitle: 'We will find you the best',
      image: 'https://saigontechnology.com/assets/media/Blog/typical-process-for-a-successful-mobile-development.jpeg',
    },
    {
      //image: 'assets/images/collection/hotels/ajm310.jpg',
      save: 'Fairmont Ajman',
      title: 'Marina',
      subTitle: 'We will find you the best',
      image: 'https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg',
    },
    {
      //image: 'assets/images/collection/hotels/ajm310.jpg',
      save: 'Fairmont Ajman',
      title: 'Marina',
      subTitle: 'We will find you the best',
      image: 'https://ik.imagekit.io/mdzi40eohii/tsc/Full_Stack_Image_daa0e85929_mkCd6n2su.png?tr=w-3840,q-75',
    },
  ];

  // Blog
  public blog = [
    {
      image: 'assets/images/blog/1.jpg',
      date: '25 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio',
    },
    {
      image: 'assets/images/blog/2.jpg',
      date: '26 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio',
    },
    {
      image: 'assets/images/blog/3.jpg',
      date: '27 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio',
    },
    {
      image: 'assets/images/blog/4.jpg',
      date: '28 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio',
    },
  ];

  // Logo
  public logo = [
    {
      image: 'assets/images/logos/1.png',
    },
    {
      image: 'assets/images/logos/2.png',
    },
    {
      image: 'assets/images/logos/3.png',
    },
    {
      image: 'assets/images/logos/4.png',
    },
    {
      image: 'assets/images/logos/5.png',
    },
    {
      image: 'assets/images/logos/6.png',
    },
    {
      image: 'assets/images/logos/7.png',
    },
    {
      image: 'assets/images/logos/8.png',
    },
  ];

  ngOnInit(): void { }
  syncTR() {
    this.sliders[0].title = this.translate.instant('HOME.WELCOME_UAE');
    this.sliders[1].title = this.translate.instant('HOME.FIND_BEST');
    this.sliders[2].title = this.translate.instant('HOME.ACC_NEEDS');

    this.sliders[0].subTitle = this.translate.instant('HOME.DUBAI');
    this.sliders[1].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
    this.sliders[2].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');


    this.collections[0].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
    this.collections[0].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');
    this.collections[1].title = this.translate.instant('FASHION_ONE.COLLECTIONS.HAYAT.TITLE');
    this.collections[1].save = this.translate.instant('FASHION_ONE.COLLECTIONS.HAYAT.DESC');


    this.collections[3].title = this.translate.instant('FASHION_ONE.COLLECTIONS.FAIR.TITLE');
    this.collections[3].save = this.translate.instant('FASHION_ONE.COLLECTIONS.FAIR.DESC');
    this.collections[2].title = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');
    this.collections[2].save = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.DESC');

    this.trSub = this.translate.onLangChange.subscribe((data: any) => {
      this.sliders[0].title = this.translate.instant('HOME.WELCOME_UAE');
      this.sliders[1].title = this.translate.instant('HOME.FIND_BEST');
      this.sliders[2].title = this.translate.instant('HOME.ACC_NEEDS');

      this.sliders[0].subTitle = this.translate.instant('HOME.DUBAI');
      this.sliders[1].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
      this.sliders[2].subTitle = this.translate.instant('FASHION_ONE.COLLECTIONS.MARINA.TITLE');

      this.collections[0].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
      this.collections[0].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');
      this.collections[2].title = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.TITLE');
      this.collections[2].save = this.translate.instant('FASHION_ONE.COLLECTIONS.NAK.DESC');

    });
  }
  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find((i) => i === collection)) {
        return item;
      }
    });
  }
  OnDestroy() {
    this.trSub = null;
  }
}
