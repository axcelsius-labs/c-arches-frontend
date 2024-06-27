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
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';

  dialogueLines : DialogueLine[] = [
    { speaker: 0, message: "Whatever it is, I just know I feel anxious and trapped."},
    { speaker: 1, message: "Jade, I'm here for you."},
    { speaker: 0, message: "Who else knows about this?"},
    { speaker: 1, message: "I haven't really talked to anyone..."},
    { speaker: 0, message: "...I'm kinda embarassed."},
    { speaker: 1, message: "Okay, well you don't have to go through this alone."},
    { speaker: 0, message: "Have you considered getting on something that your partner can't mess with?"},
    { speaker: 1, message: "What do you mean?"},
    { speaker: 0, message: "Well, you could get the birth control shot, implant, or IUD."},
    { speaker: 1, message: "Oh...maybe?  I don't want to worry about getting pregnant!"},
    { speaker: 0, message: "What would you do?"},
    { speaker: 1, message: "I got an IUD last year...You'll barely feel it, and he won't even know it's there!"},
    { speaker: 0, message: "That sounds nice..."},
    { speaker: 1, message: "If you want, I'll show you the counselor who helped me?"},
    { speaker: 0, message: "Okay!"},
    { speaker: 1, message: "Thanks, Sam."},
    { speaker: 0, message: "Anytime, Jade."},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/2/0']);
  }
  
}
