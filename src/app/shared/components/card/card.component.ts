import { Component, Input } from '@angular/core';
import { Resource } from '../../models/resource.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() resource!: Resource;
}
