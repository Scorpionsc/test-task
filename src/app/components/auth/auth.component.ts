import {Component, NgZone, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {PreLoaderService} from '../../services/pre-loader.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    public fg: FormGroup;

    constructor( private userService: UserService,
                 private router: Router,
                 private zone: NgZone,
                 private preLoaderService: PreLoaderService) {
    }

    private createFg(): void {

        this.fg = new FormGroup({
            name: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });

    }

    public ngOnInit(): void {

        this.createFg();

        this.zone.onStable
            .subscribe( () => {

                this.preLoaderService.hide();

            } );

    }

    public onSubmit(): void {

        this.preLoaderService.show();

        this.userService.logIn(this.fg.value).subscribe((user: User) => {

            if (user) {

                this.router.navigate(['/']);

            } else {

                this.fg.setValue({
                    name: '',
                    password: ''
                });

            }

            this.preLoaderService.hide();

        });

    }

}
