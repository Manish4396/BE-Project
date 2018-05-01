import { Component, OnInit } from '@angular/core';
import { AppointmentServices } from './service/appointment.service'

@Component({
  selector: 'app-register',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [AppointmentServices]
})

export class AppointmentComponent implements OnInit {
  public appointment = {
    patient_Name: "",
    doctorsname:"",
    gender: "",
    mobile_number: "",
    age: "",
    street_address: "",
    street_address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    email: "",
    textarea: "",
    speciality: ""
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

  constructor(public appointmentServices: AppointmentServices) { }

  ngOnInit() {
    // this.appointment.gender = null;
    // alert(JSON.stringify(this.speciality));
  }

  appointmentsave() {
    this.appointmentServices.saveuser(this.appointment)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
