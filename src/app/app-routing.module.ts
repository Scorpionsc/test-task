import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '404',
        loadChildren: './components/not-found/not-found.module#NotFoundModule',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './components/auth/auth.module#AuthModule',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: './components/main/main.module#MainModule'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
