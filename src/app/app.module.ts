import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing'
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomemoduleComponent } from './home/home-module.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { FooterModuleComponent } from './footer-module/footer-module.component';
import { LoggedinHeaderModuleComponent } from './loggedin-header-module/loggedin-header-module.component';
// import { UserchatComponent } from './homemodule/userchat/userchat.component';
// import { DoctorchatComponent } from './homemodule/doctorchat/doctorchat.component';

// import { LoginComponent } from './homemodule/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomemoduleComponent,
    HeaderModuleComponent,
    FooterModuleComponent,
    LoggedinHeaderModuleComponent,
    // UserchatComponent,
    // DoctorchatComponent
    // LoginComponent,
    ],
  imports: [
    BrowserModule,
    routing,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
