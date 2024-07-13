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
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'app-monologue',
  templateUrl: './monologue.component.html',
  styleUrl: './monologue.component.scss',
})
export class MonologueComponent implements OnInit {
  @Input() section!: Section;
  @Input() additionalContent!: string[] | undefined;
  @Output() onClickOrSpace = new EventEmitter();
  @Output() clickedOption = new EventEmitter<number>();

  constructor(private dialogueService: DialogueService) {
    this.onResize();
  }
  ngOnInit() {
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

  screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

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
