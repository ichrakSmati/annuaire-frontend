
import { NgModule } from '@angular/core';



// Components Routing
import {PoleComponent} from "./pole.component";
import {AddPoleComponent} from "./add-pole.component";
import {UpdatePoleComponent} from "./update-pole.component";
import {PoleRoutingModule} from "./pole-routing.module";
import {PoleService} from "./pole.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        PoleRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        PoleComponent,
        AddPoleComponent,
        UpdatePoleComponent
    ],
    providers: [
        PoleService,
    ]
})
export class PoleModule { }
