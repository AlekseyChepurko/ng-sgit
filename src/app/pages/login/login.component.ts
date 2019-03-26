import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'app/services/user/user.service';
import { IUSerCreds } from 'app/services/user/typings';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: []
})
class LoginComponent implements OnInit {
    isLoggedin: Observable<boolean>;

    constructor(private user: UserService) {}
    ngOnInit() {
        this.isLoggedin = this.user.userSubject.pipe(map(Boolean));
    }

    onSubmit(userCreds: IUSerCreds) {
        this.user.login(userCreds);
    }
    onLogout() {
        this.user.logout();
    }
}

export {
    LoginComponent
};
