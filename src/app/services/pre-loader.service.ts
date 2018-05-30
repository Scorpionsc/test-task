import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PreLoaderService {

    public preLoaderVisibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

    public show(): void {

        this.preLoaderVisibility.next(true);

    }

    public hide(): void {

        this.preLoaderVisibility.next(false);

    }

}
