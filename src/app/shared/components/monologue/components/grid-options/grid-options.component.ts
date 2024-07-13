import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../../../models/chapter.interface';
import { ChapterService } from '../../../../services/chapter.service';

@Component({
  selector: 'app-grid-options',
  templateUrl: './grid-options.component.html',
  styleUrls: ['./grid-options.component.scss'],
})
export class GridOptionsComponent implements OnInit {
  @Input() section!: Section;
  @Output() clickedOption = new EventEmitter<number>();
  constructor(private chapterService: ChapterService) {}
  gridOptions!: Section[];
  currentBoxIndex = -1;
  showDialog = true;

  ngOnInit() {
    this.gridOptions = this.chapterService.getGridOptions(
      this.section.gridOptionIndexes!,
    );
  }

  select(index: number) {
    this.clickedOption.emit(this.section.gridOptionIndexes![index]);
  }
}
