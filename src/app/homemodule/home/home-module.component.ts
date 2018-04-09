import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../SharedService/shared-service.service';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-homemodule',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css'],
  providers:[SharedServiceService]
})
export class HomemoduleComponent implements OnInit {
  loginhome:any
  constructor(private router: Router,public _sharedService: SharedServiceService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit()
  {
    console.log(this._sharedService.login);
    this.loginhome=JSON.parse(localStorage.getItem('login'));
    // this.loginhome=this._sharedService.login;
  }

}
