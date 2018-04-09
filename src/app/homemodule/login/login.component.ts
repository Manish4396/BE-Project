import { Component, OnInit } from '@angular/core';
import { LoginServices } from './service/login.service';
import { RouterLink, Router } from '@angular/router';
import { SharedServiceService } from '../../SharedService/shared-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServices, SharedServiceService]
})
export class LoginComponent implements OnInit {
  islogin: any;
  msg: any
  public user = {
    User_Name: "",
    Password: ""
  }
  constructor(public loginservice: LoginServices, private router: Router, public _sharedService: SharedServiceService) { }

  ngOnInit() {

  }

  login() {
    this.loginservice.confirmlogin(this.user)
      .subscribe(res => {
        if (res.status == true) {
          this.islogin = true;
        } else {
          this.islogin = false;
        }
      })
    if (this.islogin == true) {
      localStorage.setItem('loginuser', this.user.User_Name);
      this._sharedService.currentuser = this.user.User_Name;
      localStorage.removeItem('login');
      localStorage.setItem('login', this.islogin);
      this._sharedService.login = true;
      this.router.navigate(['/home']);

    } else {
      this.msg = "Login Unsuccessful...";
    }
  }


}
