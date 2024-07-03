import { Component, HostListener, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Chapter } from '../../models/chapter.interface';
import { Dialogue } from '../../models/dialogue.interface';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
  
  @Input() chapter!: Chapter;
  @Output() onFinish = new EventEmitter();
  
  constructor(private router: Router) { }
  dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});

  handleClickOrSpace(event?: Event): void {
    if (this.dialogue$.value.lineIndex! < this.dialogue$.value.lines!.length - 1) {
      this.dialogue$.next(
        {
            lineIndex: this.dialogue$.value.lineIndex! + 1,
            lines: this.dialogue$.value.lines!
        }
        );  
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