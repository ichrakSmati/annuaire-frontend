
import { NgModule } from '@angular/core';




import {FormsModule} from "@angular/forms";


import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RechercheComponent} from "./recherche.component";
import {RechercheRoutingModule} from "./recherche-routing.module";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {UserModule} from "../user/user.module";
import {RecherchepoleComponent} from "./recherchepole.component";
import {PoleModule} from "../pole/pole.module";
import {RechercheavanceComponent} from "./rechercheavance.component";
import {FilterPipe} from "./filtre.pipe";

@NgModule({
    imports: [
        RechercheRoutingModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule,
        CommonModule,
        UserModule,
        PoleModule
    ],
    declarations: [
        RechercheComponent,
        RecherchepoleComponent,
        RechercheavanceComponent,
        FilterPipe
    ],
    providers: [
    ],
})
export class RechercheModule { }
