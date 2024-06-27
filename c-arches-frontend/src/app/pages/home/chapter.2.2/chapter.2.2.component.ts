import { Component } from '@angular/core';
import {DialogueLine} from "../../../shared/components/dialogue/dialogue-line.inferface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.2.2',
  templateUrl: './chapter.2.2.component.html',
  styleUrl: './chapter.2.2.component.scss'
})
export class Chapter22Component {

  backgroundImage = 'assets/images/PatientRoom.png';
  leftCharacterImage = 'assets/images/Alex.png';
  rightCharacterImage = 'assets/images/Jade.png';

  dialogueLines: DialogueLine[] = [
    { speaker: 0, message: "That all sounds good. I think the shot sounds like a good fit for me. When can we get started?"},
    { speaker: 1, message: "We can schedule an appointment whenever you're ready."},
    { speaker: 1, message: "Perfect, let's do it. Thank you so much Dr. Green for helping me find the right option."},
    { speaker: 1, message: "You're welcome, Jade."},
    { speaker: 0, message: "Also, if you ever feel pressured or controlled in your relationship, there are resources and support available."},
    { speaker: 0, message: "Check them out need additional support!"},
    { speaker: 1, message: "Got it! Thanks!"},
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/']);
  }
  
}
