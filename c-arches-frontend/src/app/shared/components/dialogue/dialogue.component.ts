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
  animationTimer: any; // Variable to hold the timer ID

  ngOnInit(): void {
    this.currentLineIndex$.subscribe(number => {
      this.speakerIsOnLeft = this.dialogueLines[number].speaker === 0;
      this.workingVersion = ""
      this.animateText(this.dialogueLines[number].message);
    })
  }

  ngOnDestroy(): void {
    this.clearAnimationTimer();
  }

  animateText(text: string): void {
    this.workingVersion = ''; // Clear the working version
    let index = 0; // Initialize index to track current character
    this.animationTimer = setInterval(() => {
      if (index < text.length) {
        this.workingVersion += text[index]; // Append the next character
        index++;
      } else {
        this.clearAnimationTimer(); // Stop the animation when text is fully displayed
      }
    }, 30); // Interval of 30 milliseconds
  }

  clearAnimationTimer(): void {
    clearInterval(this.animationTimer); // Clear the interval timer
  }
}
