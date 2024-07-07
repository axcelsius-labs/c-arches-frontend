import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChapterService } from '../../services/chapter.service';
import { BehaviorSubject } from 'rxjs';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  @Output() showNextDialogLine = new EventEmitter();
  @Output() showPreviousDialogLine = new EventEmitter();
  constructor(private chapterService: ChapterService, private dialogueService: DialogueService) { }
  percentComplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  ngOnInit(): void {
    this.chapterService.chapterProgress$.subscribe(progress => {
      this.percentComplete$.next(this.chapterService.getPercentageComplete());
    })
  }

  nextDialogLine(): void {
    if (this.dialogueService.endOfSectionCheck()) {
      this.chapterService.goToNextSection();
    }
    else {
      this.dialogueService.nextDialogLineIndex();
    }
    
  }
  previousDialogLine(): void {
    if (this.dialogueService.beginningOfSectionCheck()) {
      this.chapterService.goToPreviousSection();
    }
    else {
      this.dialogueService.previousDialogLineIndex();
    }
  }

  disablePreviousButton(): boolean {
    return this.chapterService.disablePreviousButton();
  }
}
