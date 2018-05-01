import { Component, OnInit } from '@angular/core';
import { PaymentServices } from './service/payment.service'
import {Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [PaymentServices]
})

export class PaymentComponent implements OnInit {
  public payment = {
    paymethod: "",
    email: "",
    patient_name: "",
    name_oncard: "",
    card_number:"",
    expiration:"",
    cvv:"",

  }
  constructor(public paymentServices: PaymentServices,private router:Router) { }

  ngOnInit() {
  }

  paymentsave() {
   // alert("HI")
    this.paymentServices.saveuser(this.payment)
      .subscribe(res => {
        // alert("Login" + JSON.stringify(res) + res)
      })
    this.router.navigate(["userchat"]);  
  }

}
