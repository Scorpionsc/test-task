import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../interfaces/user';

import {USER} from '../mock/user';
import {LogInData} from '../interfaces/log-in-data';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userStore: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor() {
    }

    public logout(): Observable<boolean> {

        localStorage.removeItem('user');

        this.userStore.next(null);

        return of(true);

    }

    public logIn(logInData: LogInData): Observable<User> {

        if (logInData['name'] === 'admin' && logInData['password'] === '1111') {

            this.userStore.next(USER);

            localStorage.setItem('user', JSON.stringify(USER));

            return of(USER);

        } else {

            return of(null);

        }

    }

    public getUser(): Observable<boolean> {

        const userString: string = localStorage.getItem('user');

        let authorized = false;

        if (userString) {
            this.userStore.next(JSON.parse(userString));
            authorized = true;
        }

        return of(authorized);

    }

}
