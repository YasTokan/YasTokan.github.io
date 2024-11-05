import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  trSub: Subscription;
  lang='en';
  constructor(private translate:TranslateService) { this.syncTR()}

  ngOnInit(): void {
    
  }
  syncTR() {
    
    this.trSub = this.translate.onLangChange.subscribe((data: any) => {
      console.log(data,data.lang);
      this.lang = data.lang;
    });
  }

}
