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
  }
  logout(){
    localStorage.removeItem('loginuser');
    localStorage.removeItem('login');
    localStorage.setItem('login','false');
    // this._sharedService.login=false;
    this.router.navigate(['/login']);
  }

}
