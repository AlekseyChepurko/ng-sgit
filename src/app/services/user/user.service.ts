import { Injectable } from '@angular/core';
import { from, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { IUser, IUSerCreds } from './typings';

const adminUser: IUser = {name: 'admin', login: 'admin'};

const loginMock = (user: IUSerCreds): Promise<IUser> => {
    if (user.login === 'admin' && user.pass === 'admin') {
        return Promise.resolve(adminUser);
    }
    return Promise.reject({user, code: 401});
};
@Injectable({
    providedIn: 'root',
})
class UserService {
    public userSubject = new BehaviorSubject<IUser | null>(null);
    public login = (user: IUSerCreds) => {
        from(loginMock(user))
            .pipe(take(1))
            .subscribe((userInfo) => {
                this.userSubject.next(userInfo);
            });
    }

    public logout = () => {
        this.userSubject.next(null);
    }
}

export {
    UserService
};
