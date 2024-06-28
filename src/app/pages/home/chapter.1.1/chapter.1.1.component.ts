import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter.1.1',
  templateUrl: './chapter.1.1.component.html',
  styleUrl: './chapter.1.1.component.scss'
})
export class Chapter11Component {

  backgroundImage = 'assets/images/LivingRoom.png';
  characterImage = 'assets/images/Alex.png';

  dialogueLines : DialogueLine[] = [
    { speaker: 0, message: "Okay. This is called reproductive coercion, and it’s a serious, yet common form of abuse by partners (or others).", params: []},
    { speaker: 0, message: "Reproductive coercion can affect anyone, regardless of gender or sexual orientation.", params: []},
    { speaker: 0, message: "It involves behaviors that interfere with an someone's reproductive choices and autonomy, like:", params: [
        "🚩 Hiding, damaging or tampering with birth control",
        "🚩 Pressuring someone to become pregnant",
        "🚩 Pressuring someone to have or not have an abortion",
        "🚩 Poking holes in or breaking condoms",
        "🚩 Not withdrawing (i.e., \"pulling out\") after agreeing to",
        "🚩 Attempting to cause a miscarriage"]},
    { speaker: 0, message: "If you think you're experiencing reproductive coercion, here are some signs you can watch out for:", params: [
        "If someone:",
        "🚩 Uses threats or physical, emotional, or financial harm to control your reproductive decisions",
        "🚩 Controls or restricts your access to healthcare providers, especially ones who issue birth control",
        "🚩 Forces you to have unprotected sex",
        "🚩 Refuses to use condoms, or attempts to remove them during sex"]},
    { speaker: 0, message: "Reproductive coercion can really impact your health by making it hard to get the healthcare you need, causing stress, and increasing your risk of STIs/HIV, unintended pregnancies, and even unsafe abortion.", params: []},
    { speaker: 0, message: "Understanding these risks is essential for taking care of yourself and making decisions that are right for you.", params: []},
    { speaker: 0, message: "It’s important that you feel safe and in control of your own body and decisions.", params: []},
  ];
  
  constructor(private router: Router) { }

  ngOnInit() { }

  onFinish(){
    this.router.navigate(['/chapters/1/2']);
  }
  
}
