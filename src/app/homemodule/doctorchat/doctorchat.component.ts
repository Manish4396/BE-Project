import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chatservice/chatservice';

@Component({
  selector: 'app-doctorchat',
  templateUrl: './doctorchat.component.html',
  styleUrls: ['./doctorchat.component.css'],
  providers:[ChatService]
})
export class DoctorchatComponent implements OnInit {
  
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
