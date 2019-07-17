
import { NgModule } from '@angular/core';



import {UserComponent} from "./user.component";
import {AddUserComponent} from "./add-user.component";
import {FormsModule} from "@angular/forms";

import {UserRoutingModule} from "./user-routing.module";
import {UserService} from "./user.service";
import {CommonModule} from '@angular/common';
import {ShowComponent} from './show.component';
import {HttpClientModule} from "@angular/common/http";
import {PoleModule} from "../pole/pole.module";
import {UpdateUserComponent} from "./update-user.component";

@NgModule({
    imports: [
        UserRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        PoleModule
    ],
    declarations: [
        UpdateUserComponent,
        UserComponent,
        AddUserComponent,
        ShowComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
