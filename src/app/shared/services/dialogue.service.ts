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
  currentSegment$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  currentLetter$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  currentLineIndex: number = -1;
  animationTimer: any;

  constructor() {}

  playPreviousDialogueLine(): void {
    this.playDialogue(this.currentLineIndex - 1);
    this.finishCurrentDialogueLine();
  }
  
  finishCurrentDialogueLine(): boolean {
    let segments = this.currentLine$.value.segments;
    if (this.currentSegment$.value < segments.length
        && this.currentLetter$.value < segments[this.currentSegment$.value].message.length) {
      this.currentSegment$.next(segments.length);
      this.currentLetter$.next(segments[this.currentSegment$.value].message.length);
      return true;
    }
    return false;
  }

  finishCurrentOrPlayNextDialogueLine(): boolean {
    if (!this.finishCurrentDialogueLine()){
      return this.playDialogue(this.currentLineIndex + 1);
    } return true;
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
    this.speaker$.next(this.currentLine$.value.speaker);
    this.currentSegment$.next(0);
    this.currentLetter$.next(0);
    this.animateText();
    return true;
  }

  animateText(): void {
    this.clearAnimationTimer();
    this.animationTimer = setInterval(() => {
      let segments = this.currentLine$.value.segments;
      if (this.currentSegment$.value < segments.length 
          && this.currentLetter$.value < segments[this.currentSegment$.value].message.length) {
        this.currentLetter$.next(this.currentLetter$.value + 1);
      } else if (this.currentSegment$.value < segments.length) {
        this.currentSegment$.next(this.currentSegment$.value + 1);
        this.currentLetter$.next(0);
      } else this.clearAnimationTimer();
    }, 25);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
