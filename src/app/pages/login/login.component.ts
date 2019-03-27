import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UserService } from 'app/services/user/user.service';
import { IUSerCreds } from 'app/services/user/typings';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
class LoginComponent implements OnInit, OnDestroy {
    isLoggedin: Observable<boolean>;
    loginSubscription: Subscription;
    userNameObs: Observable<string>;

    constructor(private user: UserService) {}
    ngOnInit() {
        this.isLoggedin = this.user.userSubject.pipe(map(Boolean));
        this.userNameObs = this.user.userSubject.pipe(filter(Boolean), map((user) => user.login));
    }

    ngOnDestroy() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }

    onSubmit(userCreds: IUSerCreds) {
        this.onLogout();

        this.loginSubscription =
            this.user.login(userCreds)
            .subscribe(() => {});
    }
    onLogout() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
        this.user.logout();
    }
}

export {
    LoginComponent
};
