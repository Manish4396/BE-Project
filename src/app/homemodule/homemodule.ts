import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { routing } from './route';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MailComponent } from './mail/mail.component';
import { HomemoduleComponent } from './home/home-module.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import { ArticleComponent } from './article/article.component';
import { ResponseComponent } from './response/response.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RegisterComponent,
        AboutusComponent,
        AppointmentComponent,
        DepartmentsComponent,
        MailComponent,
        HomemoduleComponent,
        LoginComponent,
        ChatComponent,
        PaymentComponent,
        ArticleComponent,
        ResponseComponent,
    ],
    imports: [
        CommonModule,
        routing,
        HttpModule,
        FormsModule
    ]
})
export class HomeModule { }