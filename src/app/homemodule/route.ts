import {Routes,RouterModule} from '@angular/router';

import { AboutusComponent} from  './aboutus/aboutus.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { MailComponent } from './mail/mail.component';
import { HomemoduleComponent} from './home/home-module.component';
import { LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { PaymentComponent } from './payment/payment.component';
import { ArticleComponent } from './article/article.component';
import { ResponseComponent } from './response/response.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { DregistrationComponent } from './dregistration/dregistration.component';
import { DloginComponent } from './dlogin/dlogin.component';
import { DoctorchatComponent} from './doctorchat/doctorchat.component';
import { UserchatComponent} from './userchat/userchat.component'



const routes:Routes=[
{path:'home',component:HomemoduleComponent},
{path:'aboutus',component:AboutusComponent},
{path:'appoinment',component:AppointmentComponent},
{path:'departments',component:DepartmentsComponent},
{path:'mail',component:MailComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'chat',component:ChatComponent},
{path:'payment',component:PaymentComponent},
{path:'article',component:ArticleComponent},
{path:'response',component:ResponseComponent},
{path:'afterlogin',component:AfterloginComponent},
{path:'dregistration',component:DregistrationComponent},
{path:'dlogin',component:DloginComponent},
{path:'doctorchat',component:DoctorchatComponent},
{path:'userchat',component:UserchatComponent}


]

export const routing=RouterModule.forChild(routes);