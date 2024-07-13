import { Component, Input, OnInit } from '@angular/core';
import {Contraception} from '../../../../models/chapter.interface';

@Component({
  selector: 'app-option-content',
  templateUrl: './option-content.component.html',
  styleUrls: ['./option-content.component.scss'],
})
export class OptionContentComponent implements OnInit {
  @Input() contraception!: Contraception;

  constructor() {}

  ngOnInit() {}
}
