import { Component, Input, OnInit } from '@angular/core';
import { DialogueService } from '../../services/dialogue.service';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  @Input() showLeftTriangle = false;

  speaker = 0;
  text: string[] = [];
  animationCursor: number = -1;

  constructor(private dialogueService: DialogueService) {}

  ngOnInit(): void {
    this.dialogueService.speaker$.subscribe((value) => {
      this.speaker = value;
    });
    this.dialogueService.animationCursor$.subscribe((value) => {
      this.animationCursor = value;
    });
    this.dialogueService.text$.subscribe((value) => {
      this.text = value.split('');
    });
  }
}
