import { Component, OnInit } from '@angular/core';
import { resources } from './resources.constants'

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resources = resources;
  
  constructor() { }

  ngOnInit() {
  }

}
