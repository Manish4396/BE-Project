import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chatservice/chatservice';
@Component({
  selector: 'app-userchat',
  templateUrl: './userchat.component.html',
  styleUrls: ['./userchat.component.css'],
  providers:[ChatService]
})
export class UserchatComponent implements OnInit {
  public messages = [];
  public connection;
  public message1:any;
  user:any;
  constructor(public chatService:ChatService) { }
 
  ngOnInit() {
    this.user=localStorage.getItem('loginuser');
    alert(this.user)
    
    this.connection = this.chatService.getMessages().subscribe(message => {
    //  msg=JSON.parse(message);
      // this.messages.push(message);
      // var msg=message;
      var output = document.getElementById("output");
      var feedback = document.getElementById("feedback");
      output.innerHTML +='<p><strong>' + message['text'].handler + ':</strong>' + message['text'].messagedata + '</p>';
    })

  }

  sendMessage(){
    alert(this.message1)
    this.chatService.sendMessage(this.message1,this.user);
    this.message1 = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  



}
