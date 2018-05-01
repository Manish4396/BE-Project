import { Component, OnInit } from '@angular/core';
import { DloginServices } from './service/dlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './dlogin.component.html',
  styleUrls: ['./dlogin.component.css'],
  providers:[DloginServices]
})
export class DloginComponent implements OnInit {
  islogin: any;
  msg: any;
  passeye:any;
  inputpassword="password";
public doctor={
  dusername:"",
  dpassword:"",
}
  constructor(public dloginservice:DloginServices) { }

  ngOnInit() {
  }

login(){
    this.dloginservice.confirmdlogin(this.doctor)
    .subscribe(res=>{
      alert("Login" + JSON.stringify(res) + res)
    })
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
