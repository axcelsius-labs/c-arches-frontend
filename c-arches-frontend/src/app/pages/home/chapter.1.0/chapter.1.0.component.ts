import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter.1.0',
  templateUrl: './chapter.1.0.component.html',
  styleUrl: './chapter.1.0.component.scss'
})
export class Chapter10Component {
  
  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Jade-Idle.png';
  rightCharacterImage = 'assets/images/Alex.png';

  dialogueLines : DialogueLine[] = [
    { speaker: 1, message: "Hey, Jade! You look kinda stressed...you okay?", params: []},
    { speaker: 0, message: "Hey, Sam.", params: []},
    { speaker: 0, message: "I don't know...Charlie and I are fighting again.", params: []},
    { speaker: 1, message: "Wanna talk about it?", params: []},
    { speaker: 0, message: "He really wants kids now, but I just don't think I'm ready.", params: []},
    { speaker: 1, message: "Oh, that sounds tough... How have your talks been going?", params: []},
    { speaker: 0, message: "Not great.  He keeps bringing it up, and gets upset and yells when I say no.", params: []},
    { speaker: 1, message: "Woah! Is he violent?", params: []},
    { speaker: 0, message: "No, but he hid my birth control.", params: []},
    { speaker: 0, message: "He denied it, but I know he took it.", params: []},
    { speaker: 1, message: "Dude, what?", params: []},
    { speaker: 0, message: "It made me really uncomfortable.", params: []},
    { speaker: 0, message: "I'm pretty sure he threw away my prescription refill, too.", params: []},
    { speaker: 1, message: "This isn't okay, Jade.", params: []},
    { speaker: 1, message: "He has no right to force you into something you’re not ready for.", params: []},
    { speaker: 0, message: "I think he was poking holes in the condoms before...", params: []},
    { speaker: 0, message: "...and now he says he won't use one.", params: []},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/1/1']);
  }
}
