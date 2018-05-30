import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AvatarPosition} from '../interfaces/avatar-position';

@Injectable()
export class AvatarService {

    public avatarPositionStore: BehaviorSubject<AvatarPosition> = new BehaviorSubject<AvatarPosition>(null);

    constructor() {
    }

    public getAvatarPosition() {

        const avatarPositionStr = localStorage.getItem('avatar');

        let avatarPosition: AvatarPosition = {
            top: 55,
            left: 0
        };

        if (avatarPositionStr) {
            avatarPosition = JSON.parse(avatarPositionStr);
        }


        this.avatarPositionStore.next(avatarPosition);

    }

    public moveAvatar(diferences) {

        const avatarPosition = this.avatarPositionStore.value;

        avatarPosition['top'] += diferences['y'];
        avatarPosition['left'] += diferences['x'];

        this.avatarPositionStore.next(avatarPosition);

        localStorage.setItem('avatar', JSON.stringify(avatarPosition));

    }
}
