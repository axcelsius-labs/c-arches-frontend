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
  workingVersion = ""
  animationTimer: any;

  ngOnInit(): void {
    this.currentLineIndex$.subscribe(number => {
      this.clearAnimationTimer();
      this.speakerIsOnLeft = this.dialogueLines[number].speaker === 0;
      this.workingVersion = ""
      this.animateText(this.dialogueLines[number].message);
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
