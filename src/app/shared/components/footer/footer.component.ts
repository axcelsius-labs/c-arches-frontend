import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import { DialogueService } from '../../services/dialogue.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  @Output() showNextDialogLine = new EventEmitter();
  @Output() showPreviousDialogLine = new EventEmitter();
  constructor(
    private chapterService: ChapterService,
    private dialogueService: DialogueService,
  ) {}

  ngOnInit(): void {}

  nextDialogLine(): void {
    if (this.dialogueService.isAtSectionEnd()) {
      this.chapterService.handleFinishedSection();
    } else {
      this.dialogueService.playNextDialogueLine();
    }
  }

  previousDialogLine(): void {
    if (this.dialogueService.isAtSectionStart()) {
      this.chapterService.goToPreviousSection();
    } else {
      this.dialogueService.playPreviousDialogueLine();
    }
  }

  disablePreviousButton(): boolean {
    return this.chapterService.disablePreviousButton();
  }
}
