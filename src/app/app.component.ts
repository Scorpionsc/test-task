import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PreLoaderService} from './services/pre-loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private preLoaderSubscription: Subscription;

    public preLoaderVisibility: boolean = true;


    constructor(private preLoaderService: PreLoaderService) {}


    private subscribePreLoader(): void {

        const self = this;

        this.preLoaderSubscription = this.preLoaderService.preLoaderVisibility.subscribe((preLoaderVisibility: boolean) => {

            self.preLoaderVisibility = preLoaderVisibility;

        });

    }


    public ngOnInit(): void {

        this.subscribePreLoader();

    }




}
