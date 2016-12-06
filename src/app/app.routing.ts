/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {AuthComponent} from "./+auth/auth.component"
export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: 'app/+auth/auth.module#AuthModule'
    }

];

export const routing = RouterModule.forRoot(routes);
