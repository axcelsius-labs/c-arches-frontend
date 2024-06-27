import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  password: string = "";
  error: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password === "1234") {
      localStorage.setItem("token", "yeet");
      this.router.navigate(['/intro']);
    }
    else this.error = true;
  }
  
}
