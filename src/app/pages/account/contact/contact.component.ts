import { Component, OnInit } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
marker('LAYOUTS.CONTACT.ACTION_DESC');
marker('LAYOUTS.CONTACT.BUY');
marker('LAYOUTS.CONTACT.RENT');
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  filterbyBrand=[{val:'LAYOUTS.CONTACT.BUY'},{val:'LAYOUTS.CONTACT.RENT'}];
  constructor() { }

  ngOnInit(): void {
  }
  checked(r){
    //console.log(r);
  }
  appliedFilter(y){
    //console.log(y);
  }
}
