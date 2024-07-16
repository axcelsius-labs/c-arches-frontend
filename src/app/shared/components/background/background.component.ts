import { Component, HostListener, Input, OnInit } from '@angular/core';

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

  lerp(x: number, y: number, t: number) {
    return x * (1 - t) + y * t;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    let percentAcross = event.clientX / window.innerWidth;
    let x = this.lerp(1.5, -1.5, percentAcross);
    this.backgroundTransform = `translate(${x}vw, 0)`;
  }
}
