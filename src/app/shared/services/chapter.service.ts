import { Injectable } from '@angular/core';
import { Chapter, ChapterProgress, Chapters } from '../models/chapter.interface';
import { chapters } from '../globals/chapters.global';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogueService } from './dialogue.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

    constructor(private router: Router, private dialogueService: DialogueService) { }

    currentChapterSectionKey: string = "";
    chapterProgress$: BehaviorSubject<ChapterProgress> = new BehaviorSubject<ChapterProgress>({});
    allChapters: Chapters = chapters;
    

    getCurrentChapter(): Chapter {
        return this.allChapters[this.currentChapterSectionKey];
    }
    updateCurrentChapter(id: string): void {
        this.currentChapterSectionKey = id;
    }
    updateChapterProgress(): void {
        const currentChapterProgress = this.chapterProgress$.value;
        currentChapterProgress[this.currentChapterSectionKey] = true;
        this.chapterProgress$.next(currentChapterProgress);
    }

    getPercentageComplete(): number {
        const keys = Object.keys(this.allChapters);
        const index =  keys.indexOf(this.currentChapterSectionKey);
        const numberOfChapters = keys.length;
        return index / numberOfChapters * 100
    }
    goToNextSection(): void {
        this.updateChapterProgress();
        const nextPage = this.allChapters[this.currentChapterSectionKey].nextPage;
        if (!nextPage) {
          this.router.navigate([''])
        }
        else {
          this.router.navigate(['/chapter', nextPage])
        }
    }

    goToPreviousSection(): void {
        const previousPage = this.allChapters[this.currentChapterSectionKey].previousPage;
        if (previousPage !== null) {
            this.router.navigate(['/chapter', previousPage])
        }
    }

    disablePreviousButton(): boolean {
        if (!this.allChapters[this.currentChapterSectionKey].previousPage && this.dialogueService.dialogue$.value.lineIndex === 0) {
            return true;
        }
        return false;
      }
}
