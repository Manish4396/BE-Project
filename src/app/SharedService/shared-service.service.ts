import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedServiceService {
  login:any;
  currentuser="";
  
  ngOnInit(){
    this.currentuser=localStorage.getItem('loginUser');
     this.login=localStorage.getItem('login');
  }

}
