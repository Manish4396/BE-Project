import { Component, OnInit } from '@angular/core';
import { RegisterServices } from './service/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterServices]
})

export class RegisterComponent implements OnInit {
  public userregister = {
    patient_name: "",
    gender: "",
    mobile_number: "",
    age:"",
    email: "",
    username: "",
    password: "",
    repassword: ""

  }
  constructor(public registerServices: RegisterServices) { }

  ngOnInit() {
  }

  register() {
    this.registerServices.saveuser(this.userregister)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
