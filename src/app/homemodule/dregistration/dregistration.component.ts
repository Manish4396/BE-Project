import { Component, OnInit } from '@angular/core';
import { DregistrationServices } from './service/dregistration.service'

@Component({
  selector: 'app-register',
  templateUrl: './dregistration.component.html',
  styleUrls: ['./dregistration.component.css'],
  providers: [DregistrationServices]
})

export class DregistrationComponent implements OnInit {
  public f: any;
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
    speciality1:"",
    fees:"",
    clinicadd:"",
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

  speciality = [
    { id:'General Physician', name: 'General Physician' },
    { id:'Cardiologist', name: 'Cardiologist ' },
    { id:'Dermatologist', name: 'Dermatologist ' },
    { id:'Gynaecologist', name: 'Gynaecologist ' },
    { id:'Neurologist', name: 'Neurologist ' },
    { id:'Oncologist', name: 'Oncologist ' },
    { id:'Opthalmologist', name: 'Opthalmologist ' },
    { id:'ENT', name: 'ENT ' },
    { id:'Psychiatrist', name: 'Psychiatrist ' },
    { id:'Urologist', name: 'Urologist ' },
  ];

  constructor(public dregistrationServices: DregistrationServices) { }

 

  ngOnInit() {
  }

  register() {
    this.dregistrationServices.savedoctor(this.doctor)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)
        this["f.resetForm()"];

      })

  }

}
