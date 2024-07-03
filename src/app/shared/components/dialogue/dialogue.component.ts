import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Dialogue, DialogueLine } from '../../models/dialogue.interface';
import {Chapter} from "../../models/chapter.interface";

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {
  @Input() dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});

  constructor() { }

  speakerIsOnLeft = false;
  visibleLetters = "";
  invisibleLetters = "";
  animationTimer: any;

  ngOnInit(): void {
    this.dialogue$.subscribe(value => {
      this.clearAnimationTimer();
      this.speakerIsOnLeft = value.lines![value.lineIndex!].speaker === 0;
      this.animateText(value.lines![value.lineIndex!].message);
    })
  }

  ngOnDestroy(): void {
    this.clearAnimationTimer();
  }

  animateText(text: string): void {
    this.dialogue$.getValue().isAnimating = true;
    this.visibleLetters = '';
    this.invisibleLetters = text;
    this.animationTimer = setInterval(() => {
      if (this.dialogue$.getValue().isAnimating && this.invisibleLetters.length > 0) {
        this.visibleLetters += this.invisibleLetters[0];
        this.invisibleLetters = this.invisibleLetters.substring(1);
      } else {
        this.dialogue$.getValue().isAnimating = false;
        this.visibleLetters = text;
        this.invisibleLetters = '';
        this.clearAnimationTimer();
      }
    }, 25);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
