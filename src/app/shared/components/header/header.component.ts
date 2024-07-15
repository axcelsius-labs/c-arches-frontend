import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DialogueService} from "../../services/dialogue.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  
  @Input() title: string = "C-ARCHES";
  
  highlightExit: boolean = false;
  
  constructor(private router: Router,
              private dialogueService: DialogueService) { }

  ngOnInit() {
    this.dialogueService.currentLine$.subscribe((value) => {
      this.highlightExit = value.params.includes("highlightExit");
    });
  }

  goToHomeScreen() {
    this.router.navigate(['/']);
  }

  goToResources() {
    this.router.navigate(['/resources']);
  }
  
  exit() {
    localStorage.clear();
    window.location.href = 'https://weather.com/';
  }
}
