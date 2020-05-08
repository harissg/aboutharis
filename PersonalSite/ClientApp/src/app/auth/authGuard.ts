import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //let user = window.sessionStorage.getItem('userinfo');
        // create auth service to login user and if user exists then proceed to open up page
        // if (user == null) {
        //     return false;
        // } else {
        //     return true;
        // }
        console.log("at authguard");
        return true;
    }
}
