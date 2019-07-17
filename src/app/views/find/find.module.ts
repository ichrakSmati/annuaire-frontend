
import { NgModule } from '@angular/core';



import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {CommonModule} from "@angular/common";
import {FindService} from "./find.service";
import {FindComponent} from "./find.component";
import {FindRoutingModule} from "./find-routing.module";
import {UserModule} from "../user/user.module";


@NgModule({
    imports: [
        FindRoutingModule,
        HttpClientModule,
        UserModule,
        FormsModule,
        CommonModule
    ],
    declarations: [

        FindComponent
    ],
    providers: [
        FindService
    ]
})
export class FindModule { }
