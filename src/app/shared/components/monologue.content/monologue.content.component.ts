import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Section } from '../../models/chapter.interface';

@Component({
  selector: 'app-monologue-content',
  templateUrl: './monologue.content.component.html',
  styleUrls: ['./monologue.content.component.scss'],
})
export class MonologueContentComponent implements OnInit {
  @Input() section!: Section;
  @Output() onClickOrSpace = new EventEmitter();
  constructor() {}

  ngOnInit() {}

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
