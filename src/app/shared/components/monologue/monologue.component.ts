import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Chapter, Section } from '../../models/chapter.interface';
import {DialogueService} from "../../services/dialogue.service";

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss',
})
export class MonologueComponent implements OnInit {
  @Input() section!: Section;
  @Input() additionalContent: string[] = [];
  @Output() onClickOrSpace = new EventEmitter();

  constructor(private dialogueService: DialogueService) { }

  ngOnInit() {
    this.dialogueService.currentLine$.subscribe(value => {
      this.additionalContent = value.params;
    });
  }

  handleClickOrSpace(event?: Event): void {
    this.onClickOrSpace.emit();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.handleClickOrSpace();
      event.stopPropagation();
    }
  }
}
