import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {
  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';
  dialogueText = ['Welcome to Chapter 2', 'This is the second line of Chapter 2'];
  constructor() { }

  ngOnInit() {
  }

}
