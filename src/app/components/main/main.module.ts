import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {AvatarModule} from '../avatar/avatar.module';

@NgModule({
    imports: [
        CommonModule,
        MainRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        AvatarModule
    ],
    declarations: [MainComponent]
})
export class MainModule {
}
