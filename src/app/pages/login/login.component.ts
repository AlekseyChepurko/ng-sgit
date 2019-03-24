import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    onSubmit() {
        this.user.login({login: 'admin', pass: 'admin'});
    }
    onLogout() {
        this.user.logout();
    }
}

export {
    LoginComponent
};
