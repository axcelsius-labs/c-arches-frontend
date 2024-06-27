import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chapter.2.1',
  templateUrl: './chapter.2.1.component.html',
  styleUrl: './chapter.2.1.component.scss'
})
export class Chapter21Component {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/chapters/2/2']);
  }
  
}
