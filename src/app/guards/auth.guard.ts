import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    private authorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.userService.getUser().subscribe(authorized => {

            if (authorized) {

                if (state.url === '/auth') {
                    this.router.navigate(['/']);
                    this.authorized.next(false);
                } else {
                    this.authorized.next(true);
                }

            } else {

                if (state.url === '/auth') {
                    this.authorized.next(true);
                } else {
                    this.router.navigate(['auth']);
                    this.authorized.next(false);
                }

            }

        });

        return this.authorized;
    }
}
