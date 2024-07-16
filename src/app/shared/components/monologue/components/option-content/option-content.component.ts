import { Component, Input, OnInit } from '@angular/core';
import { Contraception } from '../../../../models/chapter.interface';
import { ChapterService } from '../../../../services/chapter.service';
import { DialogueService } from '../../../../services/dialogue.service';

@Component({
  selector: 'app-option-content',
  templateUrl: './option-content.component.html',
  styleUrls: ['./option-content.component.scss'],
})
export class OptionContentComponent implements OnInit {
  @Input() contraception!: Contraception;

  constructor(
    private chapterService: ChapterService,
    private dialogueService: DialogueService,
  ) {}

  ngOnInit() {}

  onClose(): void {
    if (this.dialogueService.isAtSectionStart()) {
      this.chapterService.goToPreviousSection();
    } else {
      this.dialogueService.playPreviousDialogueLine();
    }
  }
}
