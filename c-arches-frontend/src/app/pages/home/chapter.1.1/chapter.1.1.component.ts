import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueLine } from "../../../shared/components/dialogue/dialogue-line.inferface";

@Component({
  selector: 'app-chapter.1.1',
  templateUrl: './chapter.1.1.component.html',
  styleUrl: './chapter.1.1.component.scss'
})
export class Chapter11Component {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/chapters/1/2']);
  }
  
}
