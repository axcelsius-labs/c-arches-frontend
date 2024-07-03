import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subscription, interval } from 'rxjs';
import { DialogueLine} from "./dialogue-line.inferface";

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {
  @Input() currentLineIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  @Input() dialogueLines: DialogueLine[] = [];
  constructor() { }

  speakerIsOnLeft = false;
  visibleLetters = "";
  invisibleLetters = "";
  animationTimer: any;

  ngOnInit(): void {
    this.currentLineIndex$.subscribe(number => {
      this.clearAnimationTimer();
      this.speakerIsOnLeft = this.dialogueLines[number].speaker === 0;
      this.visibleLetters = "";
      this.invisibleLetters = "";
      this.animateText(this.dialogueLines[number].message);
    })
  }

  ngOnDestroy(): void {
    this.clearAnimationTimer();
  }

  animateText(text: string): void {
    this.visibleLetters = '';
    this.invisibleLetters = text;
    this.animationTimer = setInterval(() => {
      if (this.invisibleLetters.length > 0) {
        this.visibleLetters += this.invisibleLetters[0];
        this.invisibleLetters = this.invisibleLetters.substring(1);
      } else {
        this.clearAnimationTimer();
      }
    }, 10);
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer);
  }
}
