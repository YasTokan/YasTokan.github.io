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

  filterbyBrand = [{ val: 'LAYOUTS.CONTACT.BUY' }, { val: 'LAYOUTS.CONTACT.RENT' }];
  constructor() { }
  visible: boolean = false;
  pdfSrc = '../assets/data/Yasine_Tokan_Full_Stack_Developer_CV.pdf'
  cv = '../assets/data/Yasine_Tokan_Full_Stack_Developer_CV.pdf'
  resume = '../assets/data/Yasine_Tokan_Full_Stack_Developer_Resume.pdf'
  /*   pdfSrc='https://shoofbook.s3.ap-southeast-1.amazonaws.com/Yasine_Tokan_Full_Stack_Developer_CV.pdf'  Yasine_Tokan_Full_Stack_Developer_Resume.pdf*/

  isCV = true;
  downloadFile(data) {
    const url = window.URL.createObjectURL(data);
    window.open(url);
  }
  getHeader() {
    if (!this.isCV) {
      return 'Yasine Tokan Resume'

    }
    return 'Yasine Tokan CV'
  }
  showDialog(res) {
    if (res == 2) {
      this.isCV = false;
    } else {
      this.isCV = true;

    }
    this.visible = true;
  }
  ngOnInit(): void {
  }
  checked(r) {
    //console.log(r);
  }
  appliedFilter(y) {
    //console.log(y);
  }
}
