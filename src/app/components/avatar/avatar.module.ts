import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './avatar.component';
import {AvatarService} from '../../services/avatar.service';
import {DragAndDropModule} from 'angular-draggable-droppable';

@NgModule({
    imports: [
        CommonModule,
        DragAndDropModule.forRoot()
    ],
    declarations: [AvatarComponent],
    providers: [AvatarService],
    exports: [AvatarComponent]
})
export class AvatarModule {
}
