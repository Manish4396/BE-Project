import { Component } from '@angular/core';
import { SharedServiceService} from './SharedService/shared-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SharedServiceService]
})
export class AppComponent {
  currentuser:any
  login:any;
  title = 'app';

  constructor(public _sharedService: SharedServiceService){}

  ngOnInit()
  {
    // localStorage.setItem('login','false');
    this.currentuser=localStorage.getItem('loginUser');
    this.login=JSON.parse(localStorage.getItem('login'));
    // alert(this.login);
    
  }
  onActivate($event){
    this.currentuser=localStorage.getItem('loginUser');
     this.login=JSON.parse(localStorage.getItem('login'));
    //  alert("onActivate" +this.login);
  }
}
