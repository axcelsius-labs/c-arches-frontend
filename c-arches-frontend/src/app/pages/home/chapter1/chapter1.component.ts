import { Component, OnInit } from '@angular/core';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.scss']
})
export class Chapter1Component implements OnInit {
  backgroundImage = 'assets/images/LivingRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';
  
  dialogueText: DialogueLine[] = [
    { speaker: 0, message: "Hey, Jade! You look kinda stressed...you okay?"},
    { speaker: 1, message: "Hey, Sam."},
    { speaker: 0, message: "I don't know...Charlie and I are fighting again."},
    { speaker: 1, message: "Wanna talk about it?"},
    { speaker: 0, message: "He really wants kids now, but I just don't think I'm ready."},
    { speaker: 1, message: "Oh, that sounds tough... How have your talks been going?"},
    { speaker: 0, message: "Not great.  He keeps bringing it up, and gets upset and yells when I say no."},
    { speaker: 1, message: "Woah! Is he violent?"},
    { speaker: 0, message: "No, but he hid my birth control."},
    { speaker: 1, message: "He denied it, but I know he took it."},
    { speaker: 0, message: "Dude, what?"},
    { speaker: 1, message: "It made me really uncomfortable."},
    { speaker: 0, message: "I'm pretty sure he threw away my prescription refill, too."},
    { speaker: 1, message: "This isn't okay, Jade."},
    { speaker: 0, message: "He has no right to force you into something you’re not ready for."},
    { speaker: 1, message: "I think he was poking holes in the condoms before..."},
    { speaker: 0, message: "...and now he says he won't use one."},
  ];

  constructor() { }

  ngOnInit() {
  }
}
