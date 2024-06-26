import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chapter } from '../../models/chapter.interface';

@Component({
  selector: 'app-chapter-2-1',
  templateUrl: './chapter.2.1.component.html',
  styleUrl: './chapter.2.1.component.scss'
})
export class Chapter21Component {

    @Input() chapter!: Chapter; 
    @Output() onFinish = new EventEmitter();
    currentIndex = -1;
  
    constructor() { }

    ngOnInit() { }
    
    select(index:number) {
        this.currentIndex = index;
        this.chapter.dialogueLines = this.chapter.data[this.currentIndex].lines;
    }
    
    back(){
        this.currentIndex = -1;
        this.chapter.dialogueLines = this.chapter.dialogueLines;
    }
    
    continue(){
        this.onFinish.emit();
    }
}
