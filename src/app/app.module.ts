import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './login/auth.guard';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';


const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {UserModule} from "./views/user/user.module";
import { LayoutComponent } from './layout/layout.component';
import { CommonModule }        from '@angular/common';
import {SortByPipe, UserfilterPipe} from "./layout/userfilter.pipe";
import { ShowuserComponent } from './showuser/showuser.component';
import { UploadComponent } from './upload/upload.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        FormsModule,
        UserModule,
        CommonModule

    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        LoginComponent,
        LayoutComponent,
        UserfilterPipe,
        SortByPipe,
        ShowuserComponent,
        UploadComponent
    ],
    providers: [
        AuthGuard
    ],
    // providers: [{
    //     provide: LocationStrategy,
    //     useClass: HashLocationStrategy
    // }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }