import { Component } from '@angular/core';
import {DialogueLine} from "../../../shared/components/dialogue/dialogue-line.inferface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.1.3',
  templateUrl: './chapter.1.3.component.html',
  styleUrl: './chapter.1.3.component.scss'
})
export class Chapter13Component {


  backgroundImage = 'assets/images/LivingRoom.png';
  characterImage = 'assets/images/Alex.png';

  dialogueLines : DialogueLine[] = [
    { speaker: 0, message: "Relationships are tough, and everyone goes through moments where they feel helpless.", params: []},
    { speaker: 0, message: "Experiencing these feelings isn't fun, but it's not uncommon. The most important thing to remember is that you're never truly alone.", params: []},
    { speaker: 0, message: "Connecting with friends and family can make a huge difference, and your healthcare provider always has your best interests in mind.", params: []},
    { speaker: 0, message: "Try saying something like, \"Hey, I've been there. I found some helpful resources that could make things easier. Let's figure this out together.\"", params: []},
    { speaker: 0, message: "Remember, supporting each other isn't just kind--it boosts your own well-being, too. When we lend a hand, we all grow stronger together.", params: []},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/2/0']);
  }
  
}
