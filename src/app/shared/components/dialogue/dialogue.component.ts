import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Dialogue, DialogueLine } from '../../models/dialogue.interface';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {
  @Input() dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});

  constructor() { }

  speakerIsOnLeft = false;
  workingVersion = ""
  animationTimer: any;

  ngOnInit(): void {
    this.dialogue$.subscribe(value => {
      this.clearAnimationTimer();
      this.speakerIsOnLeft = value.lines![value.lineIndex!].speaker === 0;
      this.workingVersion = ""
      this.animateText(value.lines![value.lineIndex!].message);
    })
  }

  ngOnDestroy(): void {
    this.clearAnimationTimer();
  }

  animateText(text: string): void {
    this.workingVersion = '';
    let index = 0;
    this.animationTimer = setInterval(() => {
      if (index < text.length) {
        this.workingVersion += text[index];
        index++;
      } else {
        this.clearAnimationTimer();
      }
    }, 15);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
