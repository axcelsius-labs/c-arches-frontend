import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section } from '../../../../models/chapter.interface';
import { DialogueService } from '../../../../services/dialogue.service';

@Component({
  selector: 'app-large-screen',
  templateUrl: './large-screen.component.html',
  styleUrls: ['./large-screen.component.scss'],
})
export class LargeScreenComponent implements OnInit {
  @Input() section!: Section;
  @Output() clickedOption = new EventEmitter<number>();

  showTutorial: boolean = false;
  tutorial: string = '';

  constructor(private dialogueService: DialogueService) {}

  ngOnInit() {
    this.dialogueService.currentLine$.subscribe((value) => {
      this.showTutorial = value.params.includes('showTutorial');
    });
    this.tutorial = this.isMobile()
      ? 'Tap to continue...'
      : 'Click or press space to continue...';
  }

  emitOptionClickEvent(gridOption: number) {
    this.clickedOption.emit(gridOption);
  }

  handleClick(event: Event): void {
    if (this.section.gridOptionIndexes) {
      event.stopPropagation();
    }
  }

  private isMobile(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|android|blackberry|opera mini|iemobile|mobile|tablet/i.test(
      userAgent,
    );
  }
}
