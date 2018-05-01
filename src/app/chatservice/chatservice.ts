
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
// import io from 'socket.io-client';

// import io from '../../node_modules/socket.io-client';



@Injectable()
export class ChatService {
  private url = 'http://localhost:5300';  
  private socket;
  
  sendMessage(message,handler){
    this.socket.emit('add-message',{messagedata:message,handler:handler} );    
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}
