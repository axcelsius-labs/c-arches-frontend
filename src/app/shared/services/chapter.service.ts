import { Injectable } from '@angular/core';
import { Chapter, ChapterProgress, Chapters } from '../models/chapter.interface';
import { chapters } from '../globals/chapters.global';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

    constructor(private route: ActivatedRoute, private router: Router) { }

    currentChapterSectionKey: string = "intro";
    chapterProgress: ChapterProgress = {};
    allChapters: Chapters = chapters;

    getCurrentChapter(): Chapter {
        return this.allChapters[this.currentChapterSectionKey];
    }
    updateCurrentChapter(id: string): void {
        this.currentChapterSectionKey = id;
    }
    updateChapterProgress() {
        this.chapterProgress[this.currentChapterSectionKey] = true;
    }

    goToNextChapter() {
        if (this.chapterProgress[this.currentChapterSectionKey]) {

        }
    }

    getPercentageComplete(): number {
        return Object.values(this.chapterProgress).filter(chapter => chapter == true).length / Object.values(this.chapterProgress).length
    }
}
