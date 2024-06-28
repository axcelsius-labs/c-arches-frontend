import { Component } from '@angular/core';
import {DialogueLine} from "../../../shared/components/dialogue/dialogue-line.inferface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.1.2',
  templateUrl: './chapter.1.2.component.html',
  styleUrl: './chapter.1.2.component.scss'
})
export class Chapter12Component {

  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Jade-Idle.png';
  rightCharacterImage = 'assets/images/Alex.png';

  dialogueLines : DialogueLine[] = [
    { speaker: 0, message: "Whatever it is, I just know I feel anxious and trapped.", params: []},
    { speaker: 1, message: "Jade, I'm here for you.", params: []},
    { speaker: 1, message: "Who else knows about this?", params: []},
    { speaker: 0, message: "I haven't really talked to anyone...", params: []},
    { speaker: 0, message: "...I'm kinda embarassed.", params: []},
    { speaker: 1, message: "Okay, well you don't have to go through this alone.", params: []},
    { speaker: 1, message: "Have you considered getting on something that your partner can't mess with?", params: []},
    { speaker: 0, message: "What do you mean?", params: []},
    { speaker: 1, message: "Well, you could get the birth control shot, implant, or IUD.", params: []},
    { speaker: 0, message: "Oh...maybe?  I don't want to worry about getting pregnant!", params: []},
    { speaker: 0, message: "What would you do?", params: []},
    { speaker: 1, message: "I got an IUD last year...You'll barely feel it, and he won't even know it's there!", params: []},
    { speaker: 0, message: "That sounds nice...", params: []},
    { speaker: 1, message: "If you want, I'll show you the counselor who helped me?", params: []},
    { speaker: 0, message: "Okay!", params: []},
    { speaker: 0, message: "Thanks, Sam.", params: []},
    { speaker: 1, message: "Anytime, Jade.", params: []},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/1/3']);
  }
  
}