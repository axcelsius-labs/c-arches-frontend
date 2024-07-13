import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-content',
  templateUrl: './additional-content.component.html',
  styleUrls: ['./additional-content.component.scss'],
})
export class AdditionalContentComponent implements OnInit {
  @Input() additionalContent!: string[];

  constructor() {}

  ngOnInit() {}
}
