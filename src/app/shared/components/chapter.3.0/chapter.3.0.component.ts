import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chapter, Section } from '../../models/chapter.interface';

@Component({
  selector: 'app-chapter-3-0',
  templateUrl: './chapter.3.0.component.html',
  styleUrl: './chapter.3.0.component.scss',
})
export class Chapter30Component implements OnInit {
  @Input() section!: Section;
  @Output() onFinish = new EventEmitter();

  currentIndex = 0;
  current: any;

  constructor() {}

  ngOnInit(): void {
    this.current = this.section.data[this.currentIndex];
  }
  next() {
    if (this.currentIndex < this.section.data.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.current = this.section.data[this.currentIndex];
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
      this.current = this.section.data[this.currentIndex];
    }
  }

  finish() {
    this.onFinish.emit();
  }
}
