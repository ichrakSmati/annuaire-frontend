import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RechercheComponent} from "./recherche.component";
import {RecherchepoleComponent} from "./recherchepole.component";
import {RechercheavanceComponent} from "./rechercheavance.component";



const routes: Routes = [
    {
        path: '',
        data: {
            title: 'User'
        },
        children: [
            {
                path: 'findnom',
                component: RechercheComponent,
                data: {
                    title: 'rechercher user par nom'
                }
            },
            {
                path: 'findpole',
                component: RecherchepoleComponent,
                data: {
                    title: 'rechercher user par pole'
                }
            },
            {
                path: 'find',
                component: RechercheavanceComponent,
                data: {
                    title: 'rechercher avance'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RechercheRoutingModule {}
