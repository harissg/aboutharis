import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolea{
 const user = JSON.parse(localStorage.getItem('user'));

 if (user != null) {
returtrue;
 } else {
this.router.navigateByUrl('/login');
 }
  }
}
