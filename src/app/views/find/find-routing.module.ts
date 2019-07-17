import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindComponent} from './find.component';



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'User'
        },
        children: [
            {
                path: 'find',
                component: FindComponent,
                data: {
                    title: 'rechercher user'
                }
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FindRoutingModule {}
