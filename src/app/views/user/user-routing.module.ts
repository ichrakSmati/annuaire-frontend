import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from "./add-user.component";
import {UserComponent} from "./user.component";
import {ShowComponent} from "./show.component";
import {UpdateUserComponent} from "./update-user.component";



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'User'
        },
        children: [
            {
                path: 'add',
                component: AddUserComponent,
                data: {
                    title: 'Ajouter user'
                }
            },
            {
                path: 'user/:id',
                component: ShowComponent,
                data: {
                    title: 'show'
                }
            },
            {
                path: 'users',
                component: UserComponent,
                data: {
                    title: 'Liste'
                }
            },
            {
                path: 'user-update/:id',
                component: UpdateUserComponent,
                data: {
                    title: 'update'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
