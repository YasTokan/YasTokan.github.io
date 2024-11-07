import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  @Input() class: string;
  @Input() themeLogo: string = 'assets/images/icon/p_logo.png'///'assets/images/icon/logo.png'; // Default Logo
  @Input() topbar: boolean = true; // Default True
  @Input() sticky: boolean = false; // Default false

  public stick: boolean = false;
  phoneNumber: string = '00971 50 319 8324'; // Enter the phone number here (international format without "+")

  isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    }
  }

  ngOnInit() {
    if (this.isMobile) {
      console.log('Running on a mobile device');
      // Add mobile-specific logic here
    } else {
      console.log('Running on a desktop');
      // Add desktop-specific logic here
    }
  }


  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150 && window.innerWidth > 400) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
  openWhatsApp(): void {
    let phoneNumber = '+971 50 319 8324'
    const url = this.isMobileDevice()
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(url, '_blank');
  }
  isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  openDialer(): void {
    if (this.isMobileDevice()) {
      window.open(`tel:${this.phoneNumber}`, '_self'); // Opens dialer on mobile
    } else {
      alert('This feature is only available on mobile devices.');
    }
  }
}
