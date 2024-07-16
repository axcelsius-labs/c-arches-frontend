import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../../../models/chapter.interface';

@Component({
  selector: 'app-small-screen',
  templateUrl: './small-screen.component.html',
  styleUrls: ['./small-screen.component.scss'],
})
export class SmallScreenComponent implements OnInit {
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
