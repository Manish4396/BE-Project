import { Component, OnInit } from '@angular/core';
import { LoginServices } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServices]
})
export class LoginComponent implements OnInit {
  
public user={
  User_Name:"",
  Password:"",
}
  constructor(public loginservice:LoginServices) { }

  ngOnInit() {
  }

login(){
    this.loginservice.confirmlogin(this.user)
    .subscribe(res=>{
      alert("Login" + JSON.stringify(res) + res)
    })
}


}
