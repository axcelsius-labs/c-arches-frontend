import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Chapter, Section } from '../../models/chapter.interface';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'app-monologue-grid',
  templateUrl: './monologue.grid.component.html',
  styleUrl: './monologue.grid.component.scss',
})
export class MonologueGridComponent implements OnInit {
  @Input() section!: Section;
  @Output() onFinish = new EventEmitter();

  constructor(private dialogueService: DialogueService) {}

  currentBoxIndex = -1;
  showDialog = true;
  ngOnInit() {}

  select(index: number) {
    this.currentBoxIndex = index;
    this.dialogueService.updateDialogLines(
      this.section.data[this.currentBoxIndex].lines,
      0,
    );
  }

  back() {
    this.currentBoxIndex = -1;
    this.dialogueService.updateDialogLines(this.section.dialogueLines!, 0);
  }

  continue() {
    this.onFinish.emit();
  }

  handleClickOrSpace(event?: Event): void {
    if (this.dialogueService.dialogue$.value.isAnimating) {
      this.dialogueService.dialogue$.value.isAnimating = false;
    } else if (
      this.dialogueService.dialogue$.value.lineIndex! <
      this.dialogueService.dialogue$.value.lines!.length - 1
    ) {
      this.dialogueService.nextDialogLineIndex();
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.handleClickOrSpace();
      event.stopPropagation();
    }
  }
}
