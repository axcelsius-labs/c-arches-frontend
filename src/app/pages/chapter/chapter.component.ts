import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter } from '../../shared/models/chapter.interface';
import { ChapterService } from '../../shared/services/chapter.service';
import { DialogueService } from '../../shared/services/dialogue.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit {

  chapterContent!: Chapter;
  chapterId!: string;
  startingDialogLineIndex!: number;
  allowOverflow: boolean = false;
  additionalContent: string[] = [];
  constructor(private route: ActivatedRoute, private router: Router,
    private chapterService: ChapterService,
    private dialogueService: DialogueService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chapterId = params.get('id')!;
      this.startingDialogLineIndex = 0; //update this line
      this.chapterService.updateCurrentChapter(params.get('id')!);
      this.chapterContent = this.chapterService.getCurrentChapter();
      this.allowOverflow = this.chapterContent.chapterType === 'chapter3.0';
      this.dialogueService.updateDialogLines(this.chapterContent.dialogueLines!, this.startingDialogLineIndex);
    });
  }

  goToNextDialogLine(): void {
    if (this.dialogueService.dialogue$.value.isAnimating){
      this.dialogueService.dialogue$.value.isAnimating = false;
    }
    else if (!this.dialogueService.endOfSectionCheck()) {
      this.dialogueService.nextDialogLineIndex()
      if (this.chapterContent.dialogueLines![this.dialogueService.dialogue$.value.lineIndex!].params.length > 0) {
        this.additionalContent = this.chapterContent.dialogueLines![this.dialogueService.dialogue$.value.lineIndex!].params;
      }
    }
    else this.goToNextSection();
  }

  goToNextSection(): void {
    this.chapterService.goToNextSection();
  }
  
}
