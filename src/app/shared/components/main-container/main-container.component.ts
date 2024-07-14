import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  
  @Input() backgroundImage!: string;
  @Input() blackOut: boolean = false;
  @Input() chapterTitle: string = '';
  @Input() showNextButton: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() showHeader: boolean = true;
  
  constructor() {}

  ngOnInit() {}
}
