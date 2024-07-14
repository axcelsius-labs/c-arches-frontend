import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogueLine } from '../models/dialogue.interface';

@Injectable({
  providedIn: 'root',
})
export class DialogueService {
  lines$: BehaviorSubject<DialogueLine[]> = new BehaviorSubject<DialogueLine[]>(
    [],
  );
  currentLine$: BehaviorSubject<DialogueLine> =
    new BehaviorSubject<DialogueLine>({} as DialogueLine);
  speaker$: BehaviorSubject<number> = new BehaviorSubject<number>(0,);
  text$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isAnimating$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  animationCursor$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  currentIndex: number = -1;
  animationTimer: any;

  constructor() {}

  playPreviousDialogueLine(): void {
    this.playDialogue(this.currentIndex - 1);
    this.isAnimating$.next(false);
  }

  playNextDialogueLine(): void {
    if (this.isAnimating$.value) {
      this.isAnimating$.next(false);
    } else this.playDialogue(this.currentIndex + 1);
  }

  updateDialogLines(lines: DialogueLine[], index: number): void {
    this.lines$.next(lines);
    this.playDialogue(index);
  }

  resetDialogLineIndex(): void {
    this.playDialogue(0);
  }

  isAtSectionStart(): boolean {
    return this.currentIndex === 0;
  }

  isAtSectionEnd(): boolean {
    return this.currentIndex === this.lines$.value.length - 1;
  }

  playDialogue(index: number) {
    if (index < 0 || this.lines$.value.length <= index) return;
    this.currentIndex = index;
    this.currentLine$.next(this.lines$.value[index]);
    this.speaker$.next(this.currentLine$.value.speaker);
    this.animateText(this.currentLine$.value.message);
  }

  animateText(text: string): void {
    this.clearAnimationTimer();
    this.isAnimating$.next(true);
    this.animationCursor$.next(0);
    this.text$.next(text);
    this.animationTimer = setInterval(() => {
      if (this.isAnimating$.value && this.text$.value.length > 0) {
        this.animationCursor$.next(this.animationCursor$.value + 1);
      } else {
        this.isAnimating$.next(false);
        this.animationCursor$.next(text.length);
        this.clearAnimationTimer();
      }
    }, 25);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
