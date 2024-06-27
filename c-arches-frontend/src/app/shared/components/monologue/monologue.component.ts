import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {DialogueLine} from "../dialogue/dialogue-line.inferface";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss'
})
export class MonologueComponent {

  @Input() characterImage: string = "";
  @Input() backgroundImage: string = "assets/images/LivingRoom.png";
  @Input() dialogueLines: DialogueLine[] = [];
  @Input() additionalContent: string[] = [];

  @Output() onFinish = new EventEmitter();

  constructor(private router: Router) { }

  currentLineIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  handleClickOrSpace(event?: Event): void {
    if (this.currentLineIndex$.value < this.dialogueLines.length - 1) {
      let currentIndex = this.currentLineIndex$.value;
      this.currentLineIndex$.next(currentIndex += 1);
      this.additionalContent = this.dialogueLines[this.currentLineIndex$.value].params;
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
