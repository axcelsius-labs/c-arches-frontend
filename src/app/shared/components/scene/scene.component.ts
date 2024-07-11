import {
  Component,
  HostListener,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { Section } from '../../models/chapter.interface';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {
  @Input() section!: Section;
  @Input() additionalContent!: string[] | undefined;
  @Output() onClickOrSpace = new EventEmitter();

  constructor(private dialogueService: DialogueService) {}

  ngOnInit(): void {
    this.dialogueService.currentLine$.subscribe((value) => {
      if (value.params.length > 0) {
        this.additionalContent = value.params;
      } else {
        this.additionalContent = undefined;
      }
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
