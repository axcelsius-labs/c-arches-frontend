import { Injectable } from '@angular/core';
import { Chapter, ChapterProgress, Chapters } from '../models/chapter.interface';
import { chapters } from '../globals/chapters.global';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

    constructor(private router: Router) { }

    currentChapterSectionKey: string = "intro";
    chapterProgress$: BehaviorSubject<ChapterProgress> = new BehaviorSubject<ChapterProgress>({});
    allChapters: Chapters = chapters;
    currentDialogLineIndex = 0;

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

    previousDialogLineIndex(): void {
        this.currentDialogLineIndex -= 1;
    }

    nextDialogLineIndex(): void {
        this.currentDialogLineIndex += 1;
    }

    resetDialogLineIndex(): void {
        this.currentDialogLineIndex = 0;
    }

    endOfSectionCheck(): boolean {
        if (this.currentDialogLineIndex === this.allChapters[this.currentChapterSectionKey].dialogueLines?.length! - 1) {
            return true;
        }
        return false;
    }

    beginningOfSectionCheck(): boolean {
        if (this.currentDialogLineIndex === 0) {
            return true;
        }
        return false;
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
        if (!this.allChapters[this.currentChapterSectionKey].previousPage && this.currentDialogLineIndex === 0) {
            return true;
        }
        return false;
    }
}
