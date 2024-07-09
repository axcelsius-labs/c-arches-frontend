import {
  Component,
  HostListener,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Chapter, Section } from '../../models/chapter.interface';
import { Dialogue } from '../../models/dialogue.interface';

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
