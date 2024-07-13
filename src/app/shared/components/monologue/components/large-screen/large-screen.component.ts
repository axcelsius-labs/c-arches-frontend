import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../../../models/chapter.interface';

@Component({
  selector: 'app-large-screen',
  templateUrl: './large-screen.component.html',
  styleUrls: ['./large-screen.component.scss'],
})
export class LargeScreenComponent implements OnInit {
  @Input() section!: Section;
  @Output() clickedOption = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit() {}

  emitOptionClickEvent(gridOption: number) {
    this.clickedOption.emit(gridOption);
  }

  handleClick(event: Event): void {
    if (this.section.gridOptionIndexes) {
      event.stopPropagation();
    }
  }
}
