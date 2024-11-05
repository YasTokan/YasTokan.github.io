import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {

  @Input() class: string = 'footer-light' // Default class 
  @Input() themeLogo: string = 'assets/images/icon/p_logo.png' // Default Logo
  @Input() newsletter: boolean = true; // Default True

  public today: number = Date.now();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  golink(l){
    this.router.navigate([l])
  }
}
