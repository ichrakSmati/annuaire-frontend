import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { DefaultLayoutComponent } from './containers';
import {LoginComponent} from "./login/login.component";
import {RechercheComponent} from "./views/recherche/recherche.component";
import {LayoutComponent} from "./layout/layout.component";
import {ShowuserComponent} from "./showuser/showuser.component";

export const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },

        children: [
            {
                path: '',
                loadChildren: './views/user/user.module#UserModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './views/home/home.module#HomeModule'
            },
            {
                path: '',
                loadChildren: './views/pole/pole.module#PoleModule',
                canActivate: [AuthGuard]
            },
            {
                path: '',
                loadChildren: './views/recherche/recherche.module#RechercheModule',
                canActivate: [AuthGuard]
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'pageUser', component: LayoutComponent },
    { path: 'userInfo/:id', component: ShowuserComponent}


];

@NgModule({
    imports: [ RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

