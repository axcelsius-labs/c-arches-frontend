import { Injectable } from '@angular/core';
import { ChapterSectionRouteConfig } from '../models/chapter-section-route-config';

@Injectable({
  providedIn: 'root',
})
export class ChapterProgressService {
  constructor() {}

  private storageKey = 'chapterProgress';

  getProgress(): ChapterSectionRouteConfig | null {
    const progress = sessionStorage.getItem(this.storageKey);
    return progress ? JSON.parse(progress) : null;
  }

  setProgress(finishedChapter: ChapterSectionRouteConfig): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(finishedChapter));
  }
}
