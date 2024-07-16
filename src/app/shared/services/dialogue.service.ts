import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DialogueLine, DialogueLineSegment} from '../models/dialogue.interface';

@Injectable({
  providedIn: 'root',
})
export class DialogueService {
  speaker$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  lines$: BehaviorSubject<DialogueLine[]> = new BehaviorSubject<DialogueLine[]>([]);
  currentLine$: BehaviorSubject<DialogueLine> = new BehaviorSubject<DialogueLine>({} as DialogueLine);
  currentSegment$: BehaviorSubject<DialogueLineSegment> = new BehaviorSubject<DialogueLineSegment>({} as DialogueLineSegment);
  animationCursorSegment$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  animationCursorLetter$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  currentLineIndex: number = -1;
  animationTimer: any;

  constructor() {}

  playPreviousDialogueLine(): void {
    this.playDialogue(this.currentLineIndex - 1);
  }

  finishCurrentOrPlayNextDialogueLine(): boolean {
    if (this.animationCursorSegment$.value < this.currentLine$.value.segments.length
      || this.animationCursorLetter$.value < this.currentSegment$.value.message.length) {
      this.animationCursorSegment$.next(this.currentLine$.value.segments.length);
      this.animationCursorLetter$.next(this.currentSegment$.value.message.length);
      return true;
    } else return this.playDialogue(this.currentLineIndex + 1);
  }

  updateDialogLines(lines: DialogueLine[], index: number): void {
    this.lines$.next(lines);
    this.playDialogue(index);
  }

  resetDialogLineIndex(): void {
    this.playDialogue(0);
  }

  isAtSectionStart(): boolean {
    return this.currentLineIndex === 0;
  }

  isAtSectionEnd(): boolean {
    return this.currentLineIndex === this.lines$.value.length - 1;
  }

  playDialogue(lineIndex: number) : boolean {
    if (lineIndex < 0 || this.lines$.value.length <= lineIndex) return false;
    this.currentLineIndex = lineIndex;
    this.currentLine$.next(this.lines$.value[lineIndex]);
    for (let i = 0; i < this.currentLine$.value.segments.length; i++){
      this.currentLine$.value.segments[i].characters = this.currentLine$.value.segments[i].message.split('');
    }
    this.currentSegment$.next(this.currentLine$.value.segments[0]);
    this.speaker$.next(this.currentLine$.value.speaker);
    this.animateText();
    return true;
  }

  animateText(): void {
    this.clearAnimationTimer();
    this.animationCursorSegment$.next(0);
    this.animationCursorLetter$.next(0);
    this.animationTimer = setInterval(() => {
      if (this.animationCursorLetter$.value < this.currentSegment$.value.message.length) {
        this.animationCursorLetter$.next(this.animationCursorLetter$.value + 1);
      } else if (this.animationCursorSegment$.value < this.currentLine$.value.segments.length) {
        this.animationCursorSegment$.next(this.animationCursorSegment$.value + 1);
        this.animationCursorLetter$.next(0);
      } else this.clearAnimationTimer();
    }, 25);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
