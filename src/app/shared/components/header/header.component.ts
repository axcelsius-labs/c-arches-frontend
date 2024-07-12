import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "C-ARCHES";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomeScreen() {
    this.router.navigate(['/']);
  }

  goToResources() {
    this.router.navigate(['/resources']);
  }
  
  exit() {
    window.location.href = 'https://weather.com/';
  }
}
