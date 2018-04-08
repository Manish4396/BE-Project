import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PaymentServices  {
headers:Headers;
constructor(private http: Http) {

}


saveuser(data) {
let headers = this.headers;
let options = new RequestOptions({ headers: headers }); // Create a request option
// let body = JSON.parse(data);
return this.http.post("http://localhost:4200/savepayment",data,options)
.map(this.extractData)
.catch(this.handleError);
}

private extractData(res: Response) {
let body = res;
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
