import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ChapterProgressService } from './chapter-progress.service';
import { ChapterService } from './chapter.service';
import { ChapterSectionRouteConfig } from '../models/chapter-section-route-config';

@Injectable({
  providedIn: 'root',
})
export class ProgressGuardService implements CanActivate {
  constructor(
    private router: Router,
    private chapterProgressService: ChapterProgressService,
    private chapterService: ChapterService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const chapterKey = route.paramMap.get('id');
    const progress = this.chapterProgressService.getProgress();

    // Check if the route is the root route ('')
    if (!chapterKey) {
      if (progress && progress.chapterKey === null) {
        return true;
      } else {
        this.router.navigate(['chapter/0']);
        return false;
      }
    } else {
      if (progress) {
        if (this.chapterIsAccessible(chapterKey, progress)) {
          return true;
        } else {
          const nextSection = this.chapterService.getNextSection();
          this.router.navigate(['chapter', nextSection.chapterKey]);
          return false;
        }
      } else {
        if (chapterKey === '0') {
          return true;
        } else {
          this.router.navigate(['chapter', '0']);
          return false;
        }
      }
    }
  }
  chapterIsAccessible(
    chapterKey: string,
    progress: ChapterSectionRouteConfig,
  ): boolean {
    const chapterIdNum = +chapterKey;

    //the progress is not complete
    if (progress.chapterKey) {
      const progressChapterKeyNum = +progress.chapterKey;
      //the route chapter id is less then the progress chapter key
      if (chapterIdNum < progressChapterKeyNum) {
        return true;
      } else if (
        (chapterIdNum - 1 === progressChapterKeyNum ||
          chapterIdNum === progressChapterKeyNum) &&
        this.chapterService.checkIfEndOfSectionIsComplete()
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}
