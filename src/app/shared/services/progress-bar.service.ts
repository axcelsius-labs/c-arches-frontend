import { Injectable } from '@angular/core';
import { ChapterService } from './chapter.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  constructor(private chapterService: ChapterService) {
    this.chapterService.chapterSectionRouteConfig.subscribe(
      ({ chapterKey, sectionIndex }) => {
        this.updateProgressBar(chapterKey!, sectionIndex);
      },
    );
  }

  percentComplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private updateProgressBar(chapterKey: string, sectionIndex: number) {
    const totalSections = this.getTotalSections();
    const currentIndex = this.getCurrentSectionIndex(chapterKey, sectionIndex);
    const percentComplete = this.getPercentComplete(
      currentIndex,
      totalSections,
    );
    this.percentComplete$.next(percentComplete);
  }

  private getTotalSections(): number {
    return Object.values(this.chapterService.allChapters).reduce(
      (total, chapter) => total + chapter.sections.length,
      0,
    );
  }

  private getCurrentSectionIndex(
    chapterKey: string,
    sectionIndex: number,
  ): number {
    const chapterKeys = Object.keys(this.chapterService.allChapters);
    let index = 0;

    for (const key of chapterKeys) {
      if (key === chapterKey) {
        index += sectionIndex;
        break;
      } else {
        index += this.chapterService.allChapters[key].sections.length;
      }
    }

    return index;
  }

  private getPercentComplete(
    currentIndex: number,
    totalSections: number,
  ): number {
    return (currentIndex / totalSections) * 100;
  }
}
