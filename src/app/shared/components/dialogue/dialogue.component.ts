import { Component, Input, OnInit } from '@angular/core';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  @Input() showLeftTriangle = false;
  speakerIsOnLeft = false;
  visibleLetters = '';
  invisibleLetters = '';

  constructor(private dialogueService: DialogueService) {}

  ngOnInit(): void {
    this.dialogueService.speakerIsOnLeft$.subscribe((value) => {
      this.speakerIsOnLeft = value;
    });
    this.dialogueService.visibleLetters$.subscribe((value) => {
      this.visibleLetters = value;
    });
    this.dialogueService.invisibleLetters$.subscribe((value) => {
      this.invisibleLetters = value;
    });
  }
}
