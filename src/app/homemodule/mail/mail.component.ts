import { Component, OnInit } from '@angular/core';
import { MailServices } from './service/mail.service'

@Component({
  selector: 'app-register',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [MailServices]
})

export class MailComponent implements OnInit {
  public mail = {
    userName: "",
    userEmail: "",
    Message: ""
    
  }
  constructor(public mailServices: MailServices) { }

  ngOnInit() {
  }

  mailsave() {
    this.mailServices.saveuser(this.mail)
      .subscribe(res => {
        alert("Login" + JSON.stringify(res) + res)


      })

  }

}
