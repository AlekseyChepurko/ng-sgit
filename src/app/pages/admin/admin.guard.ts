import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router';

import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
class AdminGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // Check access rights here
        if (!window['loggedin']) { // tslint:disable-line
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}

export {
    AdminGuard
};
