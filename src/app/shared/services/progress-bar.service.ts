import { Injectable } from '@angular/core';
import { ChapterService } from './chapter.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  constructor(private chapterService: ChapterService) {
    this.chapterService.chapterSectionRouteConfig.subscribe(
      ({ chapterKey, sectionIndex, dialogueIndex }) => {
        this.updateProgressBar(chapterKey!, sectionIndex, dialogueIndex);
      },
    );
  }

  percentComplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private updateProgressBar(
    chapterKey: string,
    sectionIndex: number,
    dialogueIndex: number,
  ) {
    const totalDialogues = this.getTotalDialogues();
    const currentIndex = this.getCurrentDialogueIndex(
      chapterKey,
      sectionIndex,
      dialogueIndex,
    );
    const percentComplete = this.getPercentComplete(
      currentIndex,
      totalDialogues,
    );
    this.percentComplete$.next(percentComplete);
  }

  private getTotalDialogues(): number {
    return Object.values(this.chapterService.allChapters).reduce(
      (total, chapter) =>
        total +
        chapter.sections.reduce(
          (sectionTotal, section) =>
            sectionTotal + section.dialogueLines!.length,
          0,
        ),
      0,
    );
  }

  private getCurrentDialogueIndex(
    chapterKey: string,
    sectionIndex: number,
    dialogueIndex: number,
  ): number {
    const chapterKeys = Object.keys(this.chapterService.allChapters);
    let index = 0;

    for (const key of chapterKeys) {
      if (key === chapterKey) {
        for (let i = 0; i < sectionIndex; i++) {
          index +=
            this.chapterService.allChapters[key].sections[i].dialogueLines!
              .length;
        }
        index += dialogueIndex;
        break;
      } else {
        index += this.chapterService.allChapters[key].sections.reduce(
          (sectionTotal, section) =>
            sectionTotal + section.dialogueLines!.length,
          0,
        );
      }
    }

    return index;
  }

  private getPercentComplete(
    currentIndex: number,
    totalDialogues: number,
  ): number {
    return (currentIndex / totalDialogues) * 100;
  }
}
