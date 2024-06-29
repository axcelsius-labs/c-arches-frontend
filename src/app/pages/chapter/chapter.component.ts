import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '../../shared/models/chapter.interface';
import { chapters } from './chapter.constants';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit {

  chapterContent!: Chapter;
  chapterId!: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chapterId = params.get('id')!;
      this.chapterContent = chapters[this.chapterId];
    });
  }

  goToNextChapter(): void {
    const nextPage = this.chapterContent.nextPage;
    if (nextPage === '') {
      this.router.navigate([''])
    }
    else {
      this.router.navigate(['/chapter', nextPage])
    }
  }
  onFinish(){
    this.router.navigate(['/chapters/1/2']);
  }
  
}
