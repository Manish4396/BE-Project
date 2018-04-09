import { Component, OnInit } from '@angular/core';
import { LoginServices } from './service/login.service';
import { RouterLink ,Router} from '@angular/router';
import { SharedServiceService} from '../../SharedService/shared-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServices,SharedServiceService]
})
export class LoginComponent implements OnInit {
  islogin:any
public user={
  User_Name:"",
  Password:""
}
  constructor(public loginservice:LoginServices,private router: Router,public _sharedService: SharedServiceService) { }

  ngOnInit() {
    
  }

login(){
    this.loginservice.confirmlogin(this.user)
    .subscribe(res=>{
      alert("Login" + JSON.stringify(res) + res)
      localStorage.setItem('loginuser',this.user.User_Name);
    })
    localStorage.setItem('loginuser',this.user.User_Name);
    this._sharedService.currentuser=this.user.User_Name;
    this.islogin=true;
    localStorage.removeItem('login');
    localStorage.setItem('login',this.islogin);
    this._sharedService.login=true;
    this.router.navigate(['/home']);
}


}
