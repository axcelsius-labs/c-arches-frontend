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
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {
  @Input() section!: Section;
  @Output() onClickOrSpace = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClickOrSpace(): void {
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
