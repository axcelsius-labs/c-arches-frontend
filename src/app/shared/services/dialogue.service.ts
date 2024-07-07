import { Injectable } from '@angular/core';
import { ChapterService } from './chapter.service';
import { BehaviorSubject } from 'rxjs';
import { Dialogue, DialogueLine } from '../models/dialogue.interface';
import { Chapter } from '../models/chapter.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  constructor() { }
  dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});
  

  previousDialogLineIndex(): void {
    this.dialogue$.next(
      {
        lineIndex: this.dialogue$.value.lineIndex! -= 1,
        isAnimating: true,
        lines: this.dialogue$.value.lines
      }
    );
  }

  nextDialogLineIndex(): void {
    this.dialogue$.next(
      {
        lineIndex: this.dialogue$.value.lineIndex! += 1,
        isAnimating: true,
        lines: this.dialogue$.value.lines
      }
    );
  }

  updateDialogLines(dialogLines: DialogueLine[], index: number): void {
    this.dialogue$.next(
      {
          lineIndex: index,
          isAnimating: true,
          lines: dialogLines
      });
  }

  resetDialogLineIndex(): void {
    this.dialogue$.next({
      lineIndex: 0,
      isAnimating: false,
      lines: this.dialogue$.value.lines
    })
  }

  endOfSectionCheck(): boolean {
    if (this.dialogue$.value.lineIndex === this.dialogue$.value.lines?.length! - 1) {
        return true;
    }
    return false;
  }

  beginningOfSectionCheck(): boolean {
    if (this.dialogue$.value.lineIndex === 0) {
        return true;
    }
    return false;
  }
}
