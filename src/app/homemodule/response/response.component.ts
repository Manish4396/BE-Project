import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  public type:string;
  headers:Headers;
  public request={
    speciality1:""
  }
  constructor(private activatedRoute: ActivatedRoute,private http: Http) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // this.request.speciality1=
      this.call(params.obj1).subscribe(res=>{
        this.type=res;
        // if(this.type.length>1){
        //   this.type.forEach(element => {
            
        //   });
        // }else{

        // }
        console.log(this.type);
      })

    })
  }

  
call(data){
  let headers = this.headers;
  this.request.speciality1=data;
  let options = new RequestOptions({ headers: headers }); // Create a request option
  // let body = JSON.parse(data);
  return this.http.post("http://localhost:4200/getAppointment",this.request,options)
  .map(this.extractData)
  .catch(this.handleError);
  }
  
  private extractData(res: Response) {
  let body = res.json();
  return body;
  }
  
  private handleError(error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
  const body = error.json() || '';
  const err = body.error || JSON.stringify(body);
  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
  errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
  }
}
