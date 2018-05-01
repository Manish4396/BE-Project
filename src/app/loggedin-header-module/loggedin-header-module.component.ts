import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { SharedServiceService} from '../SharedService/shared-service.service';

@Component({
  selector: 'app-loggedin-header-module',
  templateUrl: './loggedin-header-module.component.html',
  styleUrls: ['./loggedin-header-module.component.css'],
  providers:[SharedServiceService]
})
export class LoggedinHeaderModuleComponent implements OnInit {
  currentUser:any;
  login:any;
  dlogin:any;
  constructor(private router: Router,public sharedService: SharedServiceService) { }
  
  ngOnInit() {
   
    // alert(this.login);
  }


  ngAfterViewInit()
  {
    // this.currentUser = this._sharedService.currentuser;
    // this.login = this._sharedService.login;
    this.sharedService.currentuser=JSON.parse(localStorage.getItem('loginuser'));
    this.sharedService.login=JSON.parse(localStorage.getItem('login'));
    this.dlogin=JSON.parse(localStorage.getItem('dlogin'));
  }
  logout(){
    
  if(JSON.parse(localStorage.getItem('dlogin'))==true){
    localStorage.removeItem('dloginuser');
    localStorage.removeItem('dlogin');
    localStorage.setItem('dlogin','false');
  }
  if(JSON.parse(localStorage.getItem('login'))==true){
    localStorage.removeItem('loginuser'); 
    localStorage.removeItem('login');
    localStorage.setItem('login','false');
    // this._sharedService.login=false;
  }
   
    // this._sharedService.login=false;
    this.router.navigate(['/login']);
  }

}
