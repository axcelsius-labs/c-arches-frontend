import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapter, Section } from '../../shared/models/chapter.interface';
import { ChapterService } from '../../shared/services/chapter.service';
import { DialogueService } from '../../shared/services/dialogue.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss',
})
export class ChapterComponent implements OnInit {
  sectionContent!: Section;
  chapterContent!: Chapter;
  chapterId!: string;
  startingDialogLineIndex!: number;
  allowOverflow: boolean = false;
  additionalContent: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService,
    private dialogueService: DialogueService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.chapterId = params.get('id')!;
      this.chapterService.updateChapterSectionAndDialog(
        params.get('id')!,
        0,
        0,
      );
    });

    this.chapterService.chapterSectionRouteConfig.subscribe((chapterConfig) => {
      this.setChapterComponentVariables();
    });
  }

  setChapterComponentVariables() {
    this.chapterContent = this.chapterService.getCurrentChapter();
    this.sectionContent =
      this.chapterContent.sections[
        this.chapterService.chapterSectionRouteConfig.value.sectionIndex
      ];
    this.allowOverflow = this.sectionContent.sectionType === 'chapter3.0';
    this.dialogueService.updateDialogLines(
      this.sectionContent.dialogueLines!,
      this.chapterService.chapterSectionRouteConfig.value.dialogIndex,
    );
  }

  goToNextDialogLine(): void {
    if (this.dialogueService.dialogue$.value.isAnimating) {
      this.dialogueService.dialogue$.value.isAnimating = false;
    } else if (!this.dialogueService.endOfSectionCheck()) {
      this.dialogueService.nextDialogLineIndex();
      if (
        this.sectionContent.dialogueLines![
          this.dialogueService.dialogue$.value.lineIndex!
        ].params.length > 0
      ) {
        this.additionalContent =
          this.sectionContent.dialogueLines![
            this.dialogueService.dialogue$.value.lineIndex!
          ].params;
      }
    } else this.updateNextSection();
  }

  updateNextSection(): void {
    this.chapterService.updateNextSection();
  }
}
