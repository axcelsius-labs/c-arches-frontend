import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Chapter } from '../../models/chapter.interface';
import { BehaviorSubject } from 'rxjs';
import { Dialogue, DialogueLine } from '../../models/dialogue.interface';

@Component({
  selector: 'app-chapter-2-1',
  templateUrl: './chapter.2.1.component.html',
  styleUrl: './chapter.2.1.component.scss'
})
export class Chapter21Component implements OnInit {

    @Input() chapter!: Chapter; 
    @Output() onFinish = new EventEmitter();
    currentBoxIndex = -1;
    dialogue$: BehaviorSubject<Dialogue> = new BehaviorSubject<Dialogue>({});
    constructor() { }

    ngOnInit() { 
        this.dialogue$.next(
        {
            lineIndex: 0,
            isAnimating: true,
            lines: this.chapter.dialogueLines!
        }
        );
    }

    select(index:number) {
        this.currentBoxIndex = index;
        this.dialogue$.next(
            {
                lineIndex: 0,
                isAnimating: true,
                lines: this.chapter.data[this.currentBoxIndex].lines
            }
        );
    }
    
    back() {
        this.currentBoxIndex = -1;
        this.dialogue$.next(
            {
                lineIndex: 0,
                lines: this.chapter.dialogueLines!
            }
        );      
    }
    
    continue(){
        this.onFinish.emit();
    }

    handleClickOrSpace(event?: Event): void {
        if (this.dialogue$.value.isAnimating){
            this.dialogue$.value.isAnimating = false;
        }
        else if (this.dialogue$.value.lineIndex! < this.dialogue$.value.lines!.length - 1) {
            this.dialogue$.next({
                lineIndex: this.dialogue$.value.lineIndex! + 1,
                isAnimating: true,
                lines: this.dialogue$.value.lines!
            });  
        }
    }
    
    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.code === "Space") {
    this.handleClickOrSpace();
    event.stopPropagation();
    }
    }
}
