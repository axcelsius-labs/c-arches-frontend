import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../../../../models/chapter.interface';

@Component({
  selector: 'app-option-content',
  templateUrl: './option-content.component.html',
  styleUrls: ['./option-content.component.scss'],
})
export class OptionContentComponent implements OnInit {
  @Input() section!: Section;

  constructor() {}

  ngOnInit() {}
}
