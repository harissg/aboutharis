import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../model/user';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (user != null) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
