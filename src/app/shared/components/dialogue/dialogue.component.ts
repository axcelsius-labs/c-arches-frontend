import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit, OnDestroy {
  constructor(private dialogueService: DialogueService) { }

  speakerIsOnLeft = false;
  visibleLetters = "";
  invisibleLetters = "";
  animationTimer: any;

  ngOnInit(): void {
    this.dialogueService.dialogue$.subscribe(value => {
      if (value.lines?.length !== 0 && value.lines) {
        this.clearAnimationTimer();
        this.speakerIsOnLeft = value.lines![value.lineIndex!].speaker === 0;
        this.animateText(value.lines![value.lineIndex!].message);
      }
    })
  }

  ngOnDestroy(): void {
    this.clearAnimationTimer();
  }

  animateText(text: string): void {
    this.dialogueService.dialogue$.value.isAnimating = true;
    this.visibleLetters = '';
    this.invisibleLetters = text;
    this.animationTimer = setInterval(() => {
      if (this.dialogueService.dialogue$.value.isAnimating && this.invisibleLetters.length > 0) {
        this.visibleLetters += this.invisibleLetters[0];
        this.invisibleLetters = this.invisibleLetters.substring(1);
      } else {
        this.dialogueService.dialogue$.value.isAnimating = false;
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
