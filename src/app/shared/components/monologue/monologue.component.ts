import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Section } from '../../models/chapter.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss',
})
export class MonologueComponent implements OnInit {
  @Input() section!: Section;
  @Output() onClickOrSpace = new EventEmitter();
  @Output() clickedOption = new EventEmitter<number>();

  screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    this.onResize();
  }
  
  ngOnInit() { }

  handleClickOrSpace(event?: Event): void {
    this.onClickOrSpace.emit();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Space' && this.section.gridOptionIndexes === undefined) {
      this.handleClickOrSpace();
      event.stopPropagation();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event): void {
    this.screenWidth$.next(window.innerWidth);
  }

  get screenWidth() {
    return this.screenWidth$.asObservable();
  }

  emitOptionClickEvent(index: number) {
    this.clickedOption.emit(index);
  }
}
