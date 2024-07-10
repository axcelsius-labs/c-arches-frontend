import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProgressBarService } from '../../services/progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  constructor(private progressBarService: ProgressBarService) {}

  percentComplete$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  ngOnInit() {
    this.progressBarService.percentComplete$.subscribe((percentComplete) => {
      this.percentComplete$.next(percentComplete);
    });
  }
}
