import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from '../../models/chapter.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input() showText: Boolean = false;
  @Input() previousChapter!: Chapter;
  @Input() nextChapter!: Chapter;
  constructor(private router: Router) { }

  goToResources() {
    this.router.navigate(['/resources']);
  }
  
  exit() {
    this.router.navigate(['']);
  }
  
}
