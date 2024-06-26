import { Component, OnInit } from '@angular/core';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {
  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';

  dialogueText: DialogueLine[] = [
    { speaker: 0, message: "Welcome to Chapter 2"},
    { speaker: 1, message: "This is the second line of Chapter 2"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
