import { Component, OnInit } from '@angular/core';
import { DloginServices } from './service/dlogin.service';
import { SharedServiceService } from '../../SharedService/shared-service.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css'],
  providers: [DloginServices, SharedServiceService]
})
export class DloginComponent implements OnInit {
  islogin: any;
  msg: any;
  passeye: any;
  inputpassword = "password";
  public doctor = {
    dusername: "",
    dpassword: "",
  }
  constructor(public dloginservice: DloginServices, private router: Router, public _sharedService: SharedServiceService) { }

  ngOnInit() {
  }

  login() {
    this.dloginservice.confirmdlogin(this.doctor)
      .subscribe(res => {
        if (res.status == true) {
          this.islogin = true;
        } else {
          this.islogin = false;
        }
      })
    if (this.islogin == true) {
      localStorage.setItem('dloginuser', this.doctor.dusername);
      this._sharedService.currentuser = this.doctor.dusername;
      localStorage.removeItem('dlogin');
      localStorage.setItem('dlogin', this.islogin);
      this._sharedService.login = true;
      this.router.navigate(['/home']);

    }
  }
  passwordshowhide(value) {
    if (value == "hidepass") {
      this.passeye = !this.passeye;
      if (this.inputpassword == "text") {
        this.inputpassword = "password";
      }
      else {
        this.inputpassword = "text";
      }
    }
  }


}
