import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Chapter } from '../../models/chapter.interface';
import { Dialogue } from '../../models/dialogue.interface';

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss'
})
export class MonologueComponent {

  @Input() chapter!: Chapter; 
  @Input() additionalContent: string[] = [];
  @Output() onFinish = new EventEmitter();
  
  constructor() { }
  dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});
    
  currentIndex = -1;

  handleClickOrSpace(event?: Event): void {
    if (this.dialogue$.value.lineIndex! < this.dialogue$.value.lines!.length - 1) {
      this.dialogue$.next(
        {
            lineIndex: this.dialogue$.value.lineIndex! + 1,
            lines: this.dialogue$.value.lines!
        }
        ); 
        this.additionalContent = this.chapter.dialogueLines![this.dialogue$.value.lineIndex!].params; 
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
