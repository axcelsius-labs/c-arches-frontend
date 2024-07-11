import { Injectable } from '@angular/core';
import { Chapter, Chapters, Section } from '../models/chapter.interface';
import { chapters } from '../globals/chapters.global';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogueService } from './dialogue.service';
import { ChapterSectionRouteConfig } from '../models/chapter-section-route-config';
import { ChapterProgressService } from './chapter-progress.service';

@Injectable({
  providedIn: 'root',
})
export class ChapterService {
  constructor(
    private router: Router,
    private dialogueService: DialogueService,
    private chapterProgressService: ChapterProgressService,
  ) {}

  chapterSectionRouteConfig: BehaviorSubject<ChapterSectionRouteConfig> =
    new BehaviorSubject<ChapterSectionRouteConfig>({
      chapterKey: '0',
      sectionIndex: 0,
      dialogueIndex: 0,
    });
  allChapters: Chapters = chapters;

  getCurrentChapter(): Chapter {
    return this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!];
  }

  getCurrentSection(): Section {
    return this.getCurrentChapter().sections[
      this.chapterSectionRouteConfig.value.sectionIndex
    ];
  }

  updateChapterSectionAndDialog(
    newRouteConfig: ChapterSectionRouteConfig,
  ): void {
    this.chapterSectionRouteConfig.next({
      chapterKey: newRouteConfig.chapterKey,
      sectionIndex: newRouteConfig.sectionIndex,
      dialogueIndex: newRouteConfig.dialogueIndex,
    });
  }

  getNextSection(nextSectionIndex?: number): ChapterSectionRouteConfig {
    const currentSection = this.getCurrentSection();

    if (
      this.chapterSectionRouteConfig.value.sectionIndex ===
      this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
        .sections.length -
        1
    ) {
      const nextChapter =
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .nextChapter;
      //next chapter could be null
      return { chapterKey: nextChapter, sectionIndex: 0, dialogueIndex: 0 };
    } else if (nextSectionIndex) {
      return {
        chapterKey: this.chapterSectionRouteConfig.value.chapterKey!,
        sectionIndex: nextSectionIndex,
        dialogueIndex: 0,
      };
    } else if (currentSection.nextSectionIndex) {
      return {
        chapterKey: this.chapterSectionRouteConfig.value.chapterKey!,
        sectionIndex: currentSection.nextSectionIndex,
        dialogueIndex: 0,
      };
    } else {
      return {
        chapterKey: this.chapterSectionRouteConfig.value.chapterKey,
        sectionIndex: (this.chapterSectionRouteConfig.value.sectionIndex += 1),
        dialogueIndex: 0,
      };
    }
  }

  goToNextSection(nextSectionIndex?: number): void {
    const nextSection = this.getNextSection(nextSectionIndex);
    if (!nextSection.chapterKey) {
      this.router.navigate(['']);
    } else {
      if (nextSection.sectionIndex === 0) {
        this.router.navigate(['chapter', nextSection.chapterKey]);
      } else {
        this.updateChapterSectionAndDialog(nextSection);
      }
    }
  }

  handleFinishedSection(nextSectionIndex?: number) {
    this.chapterProgressService.setProgress(
      this.chapterSectionRouteConfig.value,
    );
    this.goToNextSection(nextSectionIndex);
  }

  goToPreviousSection(): void {
    //end of section reached
    const currentSection = this.getCurrentSection();

    if (this.chapterSectionRouteConfig.value.sectionIndex === 0) {
      const previousChapter =
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .previousChapter;
      if (!previousChapter) {
        this.router.navigate(['']);
      } else {
        const lastSectionIndex =
          this.allChapters[previousChapter].sections.length - 1;
        const lastdialogueIndex =
          this.allChapters[previousChapter].sections[lastSectionIndex]
            .dialogueLines?.length! - 1;
        this.router.navigate(['chapter', previousChapter], {
          queryParams: {
            sectionIndex: lastSectionIndex,
            dialogueIndex: lastdialogueIndex,
          },
        });
      }
    } else {
      if (currentSection.previousSectionIndex) {
        const lastdialogueIndex =
          this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
            .sections[currentSection.previousSectionIndex].dialogueLines
            ?.length! - 1;
        this.updateChapterSectionAndDialog({
          chapterKey: this.chapterSectionRouteConfig.value.chapterKey!,
          sectionIndex: currentSection.previousSectionIndex,
          dialogueIndex: lastdialogueIndex,
        });
      } else {
        const previousSection =
          (this.chapterSectionRouteConfig.value.sectionIndex -= 1);
        const lastdialogueIndex =
          this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
            .sections[previousSection].dialogueLines?.length! - 1;
        this.updateChapterSectionAndDialog({
          chapterKey: this.chapterSectionRouteConfig.value.chapterKey!,
          sectionIndex: previousSection,
          dialogueIndex: lastdialogueIndex,
        });
      }
    }
  }

  disablePreviousButton(): boolean {
    if (
      !this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
        .previousChapter &&
      this.dialogueService.isAtSectionStart()
    ) {
      return true;
    }
    return false;
  }

  isValidChapter(chapterId: string): boolean {
    // Implement your logic to check if chapterId exists or is valid
    // For simplicity, assuming chapter/1, chapter/2, chapter/3 exist
    return ['0', '1', '2', '3'].includes(chapterId);
  }

  getGridOptions(sectionIndexes: number[]): Section[] {
    return sectionIndexes.map(
      (index) =>
        this.allChapters[this.chapterSectionRouteConfig.value.chapterKey!]
          .sections[index],
    ) as Section[];
  }
}
