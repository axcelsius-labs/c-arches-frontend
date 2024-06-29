import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() title: string = "C-ARCHES";
  @Input() showBackButton: Boolean = false;
  @Input() showProgressBar: Boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHomeScreen() {
    this.router.navigate(['/']);
  }
}
