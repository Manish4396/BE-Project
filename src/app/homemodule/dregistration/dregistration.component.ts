import { Component, OnInit } from '@angular/core';
import { DregistrationServices } from './service/dregistration.service'

@Component({
  selector: 'app-register',
  templateUrl: './dregistration.component.html',
  styleUrls: ['./dregistration.component.css'],
  providers: [DregistrationServices]
})

export class DregistrationComponent implements OnInit {
  public doctor = {
    dname: "",
    dgender: "",
    dmobile_number: "",
    dage: "",
    demail: "",
    dusername: "",
    dpassword: "",
    drepassword: "", 
    dcity: "",
    degree: "",
    college: "",
    yoc: "",
    experience: "",
    favcolor: "",
    favcolor1: "",
    favcolor2: "",
    favcolor3: "",
    favcolor4: "",
    favcolor5: "",
    favcolor6: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
   
  }
  constructor(public dregistrationServices: DregistrationServices) { }

  ngOnInit() {
  }

  register() {
    this.dregistrationServices.savedoctor(this.doctor)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
