import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { API_URL } from 'env';
import { IUser, IUSerCreds } from './typings';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
class UserService {
    constructor(private http: HttpClient) {}
    public userSubject = new BehaviorSubject<IUser | null>(null);
    public login = (user: IUSerCreds) => {
        return this
            .http
            .post<IUser>(`${API_URL}/api/login`, user)
            .pipe(
                tap((userInfo) => {
                    this.userSubject.next(userInfo);
                }),
                catchError((e) => {
                    if (e.status === 403) {
                        // Yeah. Its not acceptable in prod
                        alert('wrong creds');
                    }
                    return new Observable();
                })
            );
        }

    public logout = () => {
        this.userSubject.next(null);
    }
}

export {
    UserService
};
