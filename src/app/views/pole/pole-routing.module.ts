import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPoleComponent} from "./add-pole.component";
import {UpdatePoleComponent} from "./update-pole.component";
import {PoleComponent} from "./pole.component";



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Pole'
        },
        children: [
            {
                path: 'addpole',
                component: AddPoleComponent,
                data: {
                    title: 'Ajouter user'
                }
            },
            {
                path: 'poles',
                component: PoleComponent,
                data: {
                    title: 'Liste'
                }
            },
            {
                path: 'pole-update/:id',
                component: UpdatePoleComponent,
                data: {
                    title: 'update pole'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoleRoutingModule {}
