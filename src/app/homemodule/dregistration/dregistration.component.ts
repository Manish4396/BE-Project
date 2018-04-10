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
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
    time1: "",
    time2: "",
    time3: "",
    time4: "",
   
  }
  gen = [
    { id:'male', name: "Male" },
    { id:'female', name: "Female" },
    { id:'Transgender', name: "Transgender" }

  ];
  constructor(public dregistrationServices: DregistrationServices) { }

  public f : any;

  ngOnInit() {
  }

  register() {
    this.dregistrationServices.savedoctor(this.doctor)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
