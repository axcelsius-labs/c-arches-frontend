import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  password: string = '';
  error: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password === '1234') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('password', 'true');
      }
      this.router.navigate(['/chapter', '0']); //update this line
    } else this.error = true;
  }
}
