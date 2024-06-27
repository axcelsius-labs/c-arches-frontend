import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = "Title";
  @Input() subtitle: string = "Subtitle";
  @Input() description: string = "Description";
}