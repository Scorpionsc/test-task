import {AfterViewInit, Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {PreLoaderService} from '../../services/pre-loader.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(private userService: UserService,
                private router: Router,
                private zone: NgZone,
                private preLoaderService: PreLoaderService) {
    }


    public logout(): void {

        this.preLoaderService.show();


        this.userService.logout().subscribe(logoutState => {

            if (logoutState) {
                this.router.navigate(['auth']);
            }

            this.preLoaderService.hide();


        });
    }

    public ngOnInit(): void {

        this.zone.onStable
            .subscribe(() => {

                this.preLoaderService.hide();

            });

    }


}
