import { Injectable } from '@angular/core';
import { CanActivate} from "@angular/router";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean { 
    if (typeof window !== 'undefined' && localStorage.getItem("token")) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;

    // if (localStorage.getItem("token")) {
    //   return true;
    // }
    // this.router.navigate(['/login']);
    // return false;
  }
  
}
