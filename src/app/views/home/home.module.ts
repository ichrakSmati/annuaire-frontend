
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
    imports: [
        HomeRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        HomeComponent,
    ],
    providers: []
})
export class HomeModule { }
