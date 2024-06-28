import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImage = 'assets/images/Park.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
