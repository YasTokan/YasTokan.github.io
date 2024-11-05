import { Component, OnInit, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../classes/product";
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

marker('ABOUT.TEAM.A');
marker('ABOUT.TEAM.Y');
marker('ABOUT.TEAM.ANN');

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public products: Product[] = [];
  public search: boolean = false;
  
  public languages = [{ 
    name: 'English',
    code: 'en'
  }, {
    name: 'French',
    code: 'fr'
  },
{
  name:'Arabic',
  code:'ar'
}
];

  public currencies = [{
    name: 'Euro',
    currency: 'EUR',
    price: 0.90 // price of euro
  }, {
    name: 'Rupees',
    currency: 'INR',
    price: 70.93 // price of inr
  }, {
    name: 'Pound',
    currency: 'GBP',
    price: 0.78 // price of euro
  }, {
    name: 'Dollar',
    currency: 'USD',
    price: 1 // price of usd
  }]
  trSub: Subscription;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    public productService: ProductService) {
    this.productService.cartItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    this.syncTR();
  }

  searchToggle(){
    this.search = !this.search;
  }

  changeLanguage(code){
    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(code);
      if(code == 'ar') {
        document.body.classList.remove('ltr')
        document.body.classList.add('rtl')
      } else {
        document.body.classList.remove('rtl')
        document.body.classList.add('ltr')
      }
    }
  }

  get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }
  customizeLayoutType(val) {
    if(val == 'rtl') {
      document.body.classList.remove('ltr')
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
      document.body.classList.add('ltr')
    }
  }

  removeItem(product: any) {
    this.productService.removeCartItem(product);
  }

  changeCurrency(currency: any) {
    this.productService.Currency = currency
  }
  syncTR() {
    this.languages[0].name = this.translate.instant('SETTINGS.LANG_MENU.EN');
    this.languages[1].name = this.translate.instant('SETTINGS.LANG_MENU.FR');
    this.languages[2].name = this.translate.instant('SETTINGS.LANG_MENU.AR');

    this.trSub = this.translate.onLangChange.subscribe((data: any) => {
      this.languages[0].name = this.translate.instant('SETTINGS.LANG_MENU.EN');
      this.languages[1].name = this.translate.instant('SETTINGS.LANG_MENU.FR');
      this.languages[2].name = this.translate.instant('SETTINGS.LANG_MENU.AR');
      
    });
  }
  OnDestroy(){
    this.trSub = null;
  }
}
