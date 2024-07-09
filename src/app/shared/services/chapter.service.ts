import { Injectable } from '@angular/core';
import {
  Chapter,
  ChapterProgress,
  Chapters,
} from '../models/chapter.interface';
import { chapters } from '../globals/chapters.global';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogueService } from './dialogue.service';
import { ChapterSectionRouteConfig } from '../models/chapter-section-route-config';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  constructor(
    private router: Router,
    private dialogueService: DialogueService,
  ) {}

  chapterSectionRouteConfig: BehaviorSubject<ChapterSectionRouteConfig> =
    new BehaviorSubject<ChapterSectionRouteConfig>({
      chapterKey: 'index',
      sectionIndex: 0,
      dialogIndex: 0,
    });
  chapterProgress$: BehaviorSubject<ChapterProgress> =
    new BehaviorSubject<ChapterProgress>({});
  allChapters: Chapters = chapters;
  percentComplete: number = 0;

  getCurrentChapter(): Chapter {
    return this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!];
  }

  updateChapterSectionAndDialog(
    chapterKey: string,
    sectionIndex: number,
    dialogIndex: number,
  ): void {
    this.chapterSectionRouteConfig.next({
      chapterKey: chapterKey,
      sectionIndex: sectionIndex,
      dialogIndex: dialogIndex,
    });
  }

  updateNextSection(): void {
    //end of section reached
    if (
      this.chapterSectionRouteConfig.value.sectionIndex ==
      this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
        .sections.length -
        1
    ) {
      const nextChapter =
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .nextChapter;
      if (!nextChapter) {
        this.router.navigate(['']);
      } else {
        this.updateChapterSectionAndDialog(nextChapter, 0, 0);
      }
    } else {
      let currentSectionIndexValue =
        this.chapterSectionRouteConfig.value.sectionIndex;
      this.updateChapterSectionAndDialog(
        this.chapterSectionRouteConfig.value.chapterKey!,
        (currentSectionIndexValue += 1),
        0,
      );
    }
  }

  goToChapter(): void {
    if (this.chapterSectionRouteConfig.value.chapterKey!) {
      this.router.navigate([
        '/chapter',
        this.chapterSectionRouteConfig.value.chapterKey!,
      ]);
    } else {
    }
  }

  goToPreviousSection(): void {
    //end of section reached
    if (this.chapterSectionRouteConfig.value.sectionIndex === 0) {
      const previousChapter =
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .previousChapter;
      if (!previousChapter) {
        this.router.navigate(['']);
      } else {
        const lastSection =
          this.allChapters[previousChapter].sections.length - 1;
        const lastDialogIndex =
          this.allChapters[previousChapter].sections[lastSection].dialogueLines
            ?.length! - 1;
        this.updateChapterSectionAndDialog(
          previousChapter,
          lastSection,
          lastDialogIndex,
        );
      }
    } else {
      const previousSection =
        (this.chapterSectionRouteConfig.value.sectionIndex -= 1);
      const lastDialogIndex =
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .sections[previousSection].dialogueLines?.length! - 1;
      this.updateChapterSectionAndDialog(
        this.chapterSectionRouteConfig.value.chapterKey!,
        previousSection,
        lastDialogIndex,
      );
    }
  }

  disablePreviousButton(): boolean {
    if (!this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
        .previousChapter && this.dialogueService.isAtSectionStart()) {
      return true;
    }
    return false;
  }

  // checkForEndOfChapter(): boolean {
  //     if () {
  //         return true;
  //     }
  //     return false;
  // }
}
