import { Component } from '@angular/core';
import { resources } from '../../globals/resources.globals';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss',
})
export class ResourceListComponent {
  resources = resources;
}
