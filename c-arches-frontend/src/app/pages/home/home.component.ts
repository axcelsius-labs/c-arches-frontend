import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToChapter(chapterNumber: number): void {
    switch (chapterNumber) {
      case 1:
        this.router.navigate(['/chapter1']);
        break;
      case 2:
        this.router.navigate(['/chapter2']);
        break;
      case 3:
        this.router.navigate(['/chapter3']);
        break;
      default:
        break;
    }
  }

  exit(): void {
    // Implement exit logic, e.g., close window or navigate to home
  }
}
