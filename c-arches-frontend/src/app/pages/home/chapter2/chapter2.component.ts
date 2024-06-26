import { Component, OnInit } from '@angular/core';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {
  backgroundImage = 'assets/images/PatientRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';

  dialogueText: DialogueLine[] = [
    { speaker: 0, message: "Hi Jade, I'm Dr. Green! What brings you in today?"},
    { speaker: 1, message: "My friend recommended I come see you...We were talking about reproductive coercion..."},
    { speaker: 1, message: "...some of it hit close to home."},
    { speaker: 1, message: "I want to talk about emergency contraception and getting on birth control that my partner can't mess with."},
    { speaker: 0, message: "Absolutely! I'm really glad you brought this up, Jade."},
    { speaker: 0, message: "This is something that a lot of people go through."},
    { speaker: 1, message: "Yeah...I'm noticing some things in my relationship and realized I want to take control over my reproductive health."},
    { speaker: 0, message: "Absolutely, Jade. It's great that you're being proactive about your health. I'm here for you!"},
    { speaker: 0, message: "We can discuss all of your options."},
    { speaker: 0, message: "Have you heard of the morning-after pill, like Plan B?"},
    { speaker: 1, message: "Yeah, but I've never used it...and I don't want my partner to know..."},
    { speaker: 0, message: "Okay! Well the morning-after pill is available over-the-counter at most pharmacies."},
    { speaker: 0, message: "If you want to be discreet, you could trash the packaging and keep the pill in a plain container."}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
