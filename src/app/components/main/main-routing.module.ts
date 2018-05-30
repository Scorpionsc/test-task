import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [ AuthGuard ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
