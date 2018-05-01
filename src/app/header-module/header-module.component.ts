import { Component, OnInit } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { SharedServiceService} from '../SharedService/shared-service.service';

@Component({
  selector: 'app-header-module',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.css'],
  providers:[SharedServiceService]
})
export class HeaderModuleComponent implements OnInit {
  currentUser:any;
  login:any;
  dlogin:any;
  constructor(private router: Router,public _sharedService: SharedServiceService) { }
  
  ngOnInit() {
   
    // alert(this.login);
  }


  ngAfterViewInit()
  {
    // this.currentUser = this._sharedService.currentuser;
    // this.login = this._sharedService.login;
    this._sharedService.currentuser=localStorage.getItem('loginuser');
    this._sharedService.login=localStorage.getItem('login');
    this.dlogin=JSON.parse(localStorage.getItem('dlogin'))
  }
  logout(){
    alert("Hi");
    // if(JSON.parse(localStorage.getItem('dlogin'))==true){
      localStorage.removeItem('dloginuser');
      localStorage.removeItem('dlogin');
      localStorage.setItem('dlogin','false');
      // this.router.navigate(['/login']);
    // }
    // if(JSON.parse(localStorage.getItem('login'))==true){
      localStorage.removeItem('loginuser'); 
      localStorage.removeItem('login');
      localStorage.setItem('login','false');
      this.router.navigate(['/login']);
      // this._sharedService.login=false;
    // }
     
      // this._sharedService.login=false;
      
    }
}
