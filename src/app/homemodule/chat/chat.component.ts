import { Component, OnInit } from '@angular/core';
import { ChatServices } from './service/chat.service'
import {Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatServices]
})

export class ChatComponent implements OnInit {
  public chat = {
    textarea:"",
    patient_Name: "",
    age: "",
    email: "",
    mobile_number: "",
    speciality:""
   
  }
  constructor(public chatServices: ChatServices,private router:Router) { }

  ngOnInit() {
  }

  chatsave() {
    this.chatServices.saveuser(this.chat)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)
      })
    this.router.navigate(["/payment"]);  
  }

}
