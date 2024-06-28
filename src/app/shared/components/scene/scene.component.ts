import { Component, HostListener, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogueLine } from "../dialogue/dialogue-line.inferface";
import { Chapter } from '../../models/chapter.interface';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
  
  @Input() chapter!: Chapter;
  @Output() onFinish = new EventEmitter();
  
  constructor(private router: Router) { }
  
  currentLineIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  handleClickOrSpace(event?: Event): void {
    if (this.currentLineIndex$.value < this.chapter.dialogueLines!.length - 1) {
      let currentIndex = this.currentLineIndex$.value;
      this.currentLineIndex$.next(currentIndex += 1);
    }
    else this.onFinish.emit();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.code === "Space") {
     this.handleClickOrSpace();
     event.stopPropagation();
    }
  }
}