import {NgModule} from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import { AUTH_PROVIDERS } from 'angular2-jwt';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,

    routing,

    SmartadminModule.forRoot(),
    UserModule.forRoot(),
  ],
  providers: [UserService, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {

}
