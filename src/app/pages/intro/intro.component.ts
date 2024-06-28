import { Component } from '@angular/core';
import { Chapter } from '../../shared/models/chapter.interface';
import { intro } from './intro.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  chapterContent!: Chapter;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.chapterContent = intro;
  }

  onFinish(){
    this.router.navigate(['']);
  }
  
}
