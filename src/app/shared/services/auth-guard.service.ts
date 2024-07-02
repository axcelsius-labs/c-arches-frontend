import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Router } from "@angular/router";

const userIDKey: string = "userID";
const passwordKey: string = "password";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = route.queryParams['id'];

    if (id && id !== 'undefined') {
      localStorage.setItem(userIDKey, id);
      return true;
    }

    if (typeof window !== 'undefined'
        && (localStorage.getItem(passwordKey)
            || localStorage.getItem(userIDKey))) {
      return true;
    }
      
    this.router.navigate(['/login']);
    return false;
  }
}
