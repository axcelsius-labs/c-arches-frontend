import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, Section } from '../../shared/models/chapter.interface';
import { ChapterService } from '../../shared/services/chapter.service';
import { DialogueService } from '../../shared/services/dialogue.service';
import { MatDialog } from '@angular/material/dialog';
import { ChapterTitleOverlayComponent } from '../../shared/components/chapter-title-overlay/chapter-title-overlay.component';
import { Router } from '@angular/router';

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
    private router: Router,
    private chapterService: ChapterService,
    private dialogueService: DialogueService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.chapterId = params.get('id')!;
      if (!this.isValidChapter(this.chapterId)) {
        this.router.navigate(['chapter/1']);
      } else {
        // Handle chapterId as needed
      }
      this.chapterService.updateChapterSectionAndDialog(
        params.get('id')!,
        0,
        0,
      );
    });

    this.chapterService.chapterSectionRouteConfig.subscribe((chapterConfig) => {
      this.setChapterComponentVariables();
      if (
        chapterConfig.sectionIndex === 0 &&
        chapterConfig.dialogIndex === 0 &&
        this.chapterContent.chapterDescription
      ) {
        this.openChapterTitleOverlay(this.chapterService.getCurrentChapter());
      }
    });
  }

  isValidChapter(chapterId: string): boolean {
    // Implement your logic to check if chapterId exists or is valid
    // For simplicity, assuming chapter/1, chapter/2, chapter/3 exist
    return ['intro', '1', '2', '3'].includes(chapterId);
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

  openChapterTitleOverlay(chapter: Chapter): void {
    const dialogRef = this.dialog.open(ChapterTitleOverlayComponent, {
      data: {
        chapterTitle: chapter.chapterTitle,
        chapterDescription: chapter.chapterDescription,
      },
      panelClass: 'transparent-dialog',
      backdropClass: 'transparent-backdrop',
    });

    dialogRef.afterClosed().subscribe(() => {
      // Perform any actions after closing the dialog, if necessary
    });
  }
}
