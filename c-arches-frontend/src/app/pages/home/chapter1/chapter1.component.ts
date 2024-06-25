import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.scss']
})
export class Chapter1Component implements OnInit {
  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';
  dialogueText = ['Welcome to Chapter 1', 'This is the second line of Chapter 1'];

  constructor() { }

  ngOnInit() {
  }
}
