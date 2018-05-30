import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {AvatarService} from '../../services/avatar.service';
import {AvatarPosition} from '../../interfaces/avatar-position';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnDestroy {

    public user: User;
    public avatarPosition: AvatarPosition;

    private userSubscription: Subscription;
    private avatarPositionSubscription: Subscription;

    constructor(private userService: UserService, private avatarService: AvatarService) {
    }

    private subscribeUser() {

        this.userSubscription = this.userService.userStore.subscribe((user: User) => {

            this.user = user;

        });

    }

    private subscribeAvatarPosition() {

        this.avatarPositionSubscription = this.avatarService.avatarPositionStore.subscribe((avatarPosition: AvatarPosition) => {

            this.avatarPosition = avatarPosition;

        });

    }

    private unSubscribeUser() {

        if (this.userSubscription && !this.userSubscription.closed) {
            this.userSubscription.unsubscribe();
        }

    }

    private unSubscribeAvatarPosition() {

        if (this.avatarPositionSubscription && !this.avatarPositionSubscription.closed) {
            this.avatarPositionSubscription.unsubscribe();
        }

    }

    public ngOnDestroy() {

        this.unSubscribeUser();
        this.unSubscribeAvatarPosition();

    }

    public ngOnInit() {

        this.subscribeUser();
        this.subscribeAvatarPosition();

        this.avatarService.getAvatarPosition();


    }

    public dragEnd(event) {

        this.avatarService.moveAvatar(event);
    }

}
