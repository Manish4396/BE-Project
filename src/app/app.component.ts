import { Component } from '@angular/core';
import { SharedServiceService } from './SharedService/shared-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedServiceService]
})
export class AppComponent {
  currentuser: any
  login: any;
  dlogin:any;
  title = 'app';

  constructor(public _sharedService: SharedServiceService) { }

  ngOnInit() {
    // localStorage.setItem('login','false');
    if (JSON.parse(localStorage.getItem('login')) == true) {
      this.login = JSON.parse(localStorage.getItem('login'));
    }

    if (JSON.parse(localStorage.getItem('dlogin')) == true) {
      this.login = JSON.parse(localStorage.getItem('dlogin'));
      //  alert("onActivate" +this.login);
    }
  }
  onActivate($event) {
    
      this.login = JSON.parse(localStorage.getItem('login'));
     
      this.dlogin = JSON.parse(localStorage.getItem('dlogin'));
     
  }
}
