import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../services/chapter.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  @Output() showNextDialogLine = new EventEmitter();
  @Output() showPreviousDialogLine = new EventEmitter();
  constructor(private router: Router, private chapterService: ChapterService) { }
  percentComplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  disablePreviousButton: boolean = false;
  ngOnInit(): void {
    this.chapterService.chapterProgress$.subscribe(progress => {
      this.percentComplete$.next(this.chapterService.getPercentageComplete());
    })
  }

  nextDialogLine(): void {
    if (this.chapterService.endOfSectionCheck()) {
      this.chapterService.goToNextSection();
    }
    else {
      this.chapterService.nextDialogLineIndex();
    }
    
  }
  previousDialogLine(): void {
    this.previousDialogLine();
    this.disablePreviousButton = this.chapterService.disablePreviousButton();
  }
}
