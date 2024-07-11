import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../models/chapter.interface';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-monologue-grid',
  templateUrl: './monologue.grid.component.html',
  styleUrl: './monologue.grid.component.scss',
})
export class MonologueGridComponent implements OnInit {
  @Input() section!: Section;
  @Output() clickedOption = new EventEmitter();

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
    // //go to the right
    // this.dialogue.updateDialogLines(
    //   this.section.data[this.currentBoxIndex].lines,
    //   0,
    // );
  }

  // handleClickOrSpace(event?: Event): void {
  //   if (this.dialogue.isAnimating$.value) {
  //     this.dialogue.isAnimating$.next(false);
  //   } else if (!this.dialogue.isAtSectionEnd()) {
  //     this.dialogue.playNextDialogueLine();
  //   }
  // }

  // @HostListener('document:keypress', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   if (event.code === 'Space') {
  //     this.handleClickOrSpace();
  //     event.stopPropagation();
  //   }
  // }
}
