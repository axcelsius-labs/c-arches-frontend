import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogueLine } from "../dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
  @Input() leftCharacterImage: string = "";
  @Input() rightCharacterImage: string = "";
  @Input() dialogueLines: DialogueLine[] = [];
  @Input() backgroundImage: string = "assets/images/LivingRoom.png";
  constructor(private router: Router
  ) { }
  currentLineIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // ngOnInit(): void {
  //   this.currentLineIndex$.next(0);
  // }
  
  handleClickOrSpace(event?: Event): void {
    // Check if event is triggered by space bar key
    // Increment current line index on click or space bar press
    if (this.currentLineIndex$.value < this.dialogueLines.length - 1) {
      var currentIndex = this.currentLineIndex$.value;
      this.currentLineIndex$.next(currentIndex += 1);
    }
  }

  goToHomeScreen() {
    this.router.navigate(['/']); 
  }

  startOver(event: Event): void {
    this.currentLineIndex$.next(0);
    event.stopPropagation();
    (event.target as HTMLButtonElement).blur();
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.code === "Space") {
     this.handleClickOrSpace();
     event.stopPropagation();
    }
  }
}