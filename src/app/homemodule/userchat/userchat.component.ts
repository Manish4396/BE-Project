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

  constructor(public chatService:ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  sendMessage(){
    alert(this.message1)
    this.chatService.sendMessage(this.message1);
    this.message1 = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }



}
