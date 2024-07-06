import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import { Chapter } from '../../models/chapter.interface';

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss'
})
export class MonologueComponent implements OnInit {

  @Input() chapter!: Chapter; 
  @Input() additionalContent: string[] = [];
  @Output() onClickOrSpace = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  handleClickOrSpace(event?: Event): void {
    this.onClickOrSpace.emit();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === "Space") {
      this.handleClickOrSpace();
      event.stopPropagation();
    }
  }
  
}
