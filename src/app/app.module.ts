import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing'
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomemoduleComponent } from './home/home-module.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { FooterModuleComponent } from './footer-module/footer-module.component';


// import { LoginComponent } from './homemodule/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomemoduleComponent,
    HeaderModuleComponent,
    FooterModuleComponent,
    
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
