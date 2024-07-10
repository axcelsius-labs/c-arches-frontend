import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, Section } from '../../shared/models/chapter.interface';
import { ChapterService } from '../../shared/services/chapter.service';
import { DialogueService } from '../../shared/services/dialogue.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChapterTitleOverlayComponent } from '../../shared/components/chapter-title-overlay/chapter-title-overlay.component';
import { Router } from '@angular/router';
import { Subscription, distinctUntilChanged, filter } from 'rxjs';
import { ChapterProgressService } from '../../shared/services/chapter-progress.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss',
})
export class ChapterComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  dialogRef: MatDialogRef<any> | null = null;
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
    this.subscription.add(
      this.route.paramMap
        .pipe(filter((params) => params.has('id')))
        .subscribe((params) => {
          this.chapterId = params.get('id')!;
          if (!this.chapterService.isValidChapter(this.chapterId)) {
            this.router.navigate(['chapter/1']);
          } else {
            const sectionIndex = this.route.snapshot.queryParamMap.get(
              'sectionIndex',
            )
              ? +this.route.snapshot.queryParamMap.get('sectionIndex')!
              : 0;
            const dialogueIndex = this.route.snapshot.queryParamMap.get(
              'dialogueIndex',
            )
              ? +this.route.snapshot.queryParamMap.get('dialogueIndex')!
              : 0;
            this.chapterService.updateChapterSectionAndDialog({
              chapterKey: params.get('id')!,
              sectionIndex: sectionIndex,
              dialogueIndex: dialogueIndex,
            });
          }
        }),
    );
    //subscribing to changes to the chapter key or section
    this.subscription.add(
      this.chapterService.chapterSectionRouteConfig
        .pipe(distinctUntilChanged())
        .subscribe((chapterConfig) => {
          this.setChapterComponentVariables();
          if (
            chapterConfig.sectionIndex === 0 &&
            chapterConfig.dialogueIndex === 0 &&
            this.chapterContent.chapterDescription
          ) {
            this.openChapterTitleOverlay(
              this.chapterService.getCurrentChapter(),
            );
          }
        }),
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscription.unsubscribe();
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
      this.chapterService.chapterSectionRouteConfig.value.dialogueIndex,
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
    } else this.finishedSection();
  }

  finishedSection(): void {
    this.chapterService.handleFinishedSection();
  }

  openChapterTitleOverlay(chapter: Chapter): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.dialogRef = this.dialog.open(ChapterTitleOverlayComponent, {
      data: {
        chapterTitle: chapter.chapterTitle,
        chapterDescription: chapter.chapterDescription,
      },
      panelClass: 'transparent-dialog',
      backdropClass: 'transparent-backdrop',
    });

    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogRef = null;
      // Perform any actions after closing the dialog, if necessary
    });
  }
}
