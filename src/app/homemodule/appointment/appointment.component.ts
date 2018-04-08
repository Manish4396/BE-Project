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
    gender: "",
    mobile_number: "",
    age:"",
    street_address:"",
    street_address2:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    email: "",
    textarea:"",
    speciality:""
 }
  constructor(public appointmentServices: AppointmentServices) { }

  ngOnInit() {
  }

  appointmentsave() {
    this.appointmentServices.saveuser(this.appointment)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
