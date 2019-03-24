import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot
  } from '@angular/router';
import {Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UserService } from 'app/services/user/user.service';

@Injectable()
class AdminGuard implements CanActivate {
    constructor(private router: Router, private user: UserService) {}

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
        return this.user.userSubject.pipe(
            map(Boolean),
            tap((userInfo) => !userInfo && this.router.navigate([route.data.fallbackRedirect]))
        );
    }
}

export {
    AdminGuard
};
