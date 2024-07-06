import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '../../shared/models/chapter.interface';
import { chapters } from './chapter.constants';
import { ChapterService } from '../../shared/services/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit {

  chapterContent!: Chapter;
  chapterId!: string;
  allowOverflow: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router,
    private chapterService: ChapterService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chapterId = params.get('id')!;
      this.chapterService.updateCurrentChapter(params.get('id')!);
      this.chapterContent = this.chapterService.getCurrentChapter();
      this.allowOverflow = this.chapterContent.chapterType === 'chapter3.0';
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
}
