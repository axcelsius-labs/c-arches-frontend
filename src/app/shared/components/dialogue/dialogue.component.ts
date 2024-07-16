import { Component, Input, OnInit } from '@angular/core';
import { DialogueService } from '../../services/dialogue.service';
import {DialogueLine} from "../../models/dialogue.interface";

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  @Input() showLeftTriangle = false;

  speaker = 0;
  currentLine: DialogueLine = {} as DialogueLine;
  currentSegment: number = -1;
  currentLetter: number = -1;

  constructor(private dialogueService: DialogueService) {}

  ngOnInit(): void {
    this.dialogueService.speaker$.subscribe((value) => {
      this.speaker = value;
    });
    this.dialogueService.currentSegment$.subscribe((value) => {
      this.currentSegment = value;
    });
    this.dialogueService.currentLetter$.subscribe((value) => {
      this.currentLetter = value;
    });
    this.dialogueService.currentLine$.subscribe((value) => {
      this.currentLine = value;
    });
  }
}
