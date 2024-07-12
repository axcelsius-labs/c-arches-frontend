import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  @Input() backgroundImage!: string;
  @Input() blackOut: boolean = false;
  backgroundTransform = '';

  constructor() {}

  ngOnInit() {}

  onMouseMove(event: MouseEvent): void {
    const container = event.currentTarget as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;

    const percentX = offsetX / containerRect.width * 100 - 50;

    // Clamp the movement to the horizontal axis
    const translateX = percentX / -3; // Adjust the divisor to control the intensity

    this.backgroundTransform = `translate(${translateX}px, 0)`;
  }
}
