import { Component } from '@angular/core';
import {DialogueLine} from "../../../shared/components/dialogue/dialogue-line.inferface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.2.0',
  templateUrl: './chapter.2.0.component.html',
  styleUrl: './chapter.2.0.component.scss'
})
export class Chapter20Component {

  backgroundImage = 'assets/images/PatientRoom.png';
  leftCharacterImage = 'assets/images/Jade-Idle.png';
  rightCharacterImage = 'assets/images/Doctor-Idle.png';

  dialogueLines: DialogueLine[] = [
    { speaker: 1, message: "Hi Jade, I'm Dr. Green! What brings you in today?", params: []},
    { speaker: 0, message: "My friend recommended I come see you...We were talking about reproductive coercion...", params: []},
    { speaker: 0, message: "...some of it hit close to home.", params: []},
    { speaker: 0, message: "I want to talk about emergency contraception and getting on birth control that my partner can't mess with.", params: []},
    { speaker: 1, message: "Absolutely! I'm really glad you brought this up, Jade.", params: []},
    { speaker: 1, message: "This is something that a lot of people go through.", params: []},
    { speaker: 0, message: "Yeah...I'm noticing some things in my relationship and realized I want to take control over my reproductive health.", params: []},
    { speaker: 1, message: "Absolutely, Jade. It's great that you're being proactive about your health. I'm here for you!", params: []},
    { speaker: 1, message: "We can discuss all of your options.", params: []},
    { speaker: 1, message: "Have you heard of the morning-after pill, like Plan B?", params: []},
    { speaker: 0, message: "Yeah, but I've never used it...and I don't want my partner to know...", params: []},
    { speaker: 1, message: "Okay! Well the morning-after pill is available over-the-counter at most pharmacies.", params: []},
    { speaker: 1, message: "If you want to be discreet, you could trash the packaging and keep the pill in a plain container.", params: []},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/2/1']);
  }
  
}
