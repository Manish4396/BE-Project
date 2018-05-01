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
    age: "",
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

  doctorsname= [
    { id:'Dr. Suresh Poojary', name: 'Dr. Suresh Poojary' },
    { id:'Dr. Rajiv Anand', name: 'Dr. Rajiv Anand ' },
    { id:'Dr. Rahul Ghadge', name: 'Dr. Rahul Ghadge ' },
    { id:'Dr. Shrikant Badwe', name: 'Dr. Shrikant Badwe ' },
    { id:'Dr. Anirudhha Gokhale', name: 'Dr. Anirudhha Gokhale ' },
    { id:'Dr. Rekha Sheth', name: 'Dr. Rekha Sheth ' },
    { id:'Dr. Raashi Mehta', name: '"Dr. Raashi Mehta ' },
    { id:'Dr. Vrushali Rane Khan', name: 'Dr. Vrushali Rane Khan ' },
    { id:'Dr. Tanuja Uchil', name: 'Dr. Tanuja Uchil ' },
    { id:'Dr. Surekha P. Mathkar', name: 'Dr. Surekha P. Mathkar ' },
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
