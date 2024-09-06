import { Injectable } from "@angular/core";
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { MessageTypes } from "src/@types/message";


@Injectable({
  providedIn: "root"
})

export class ChatService { 
  private socket: Socket

  constructor(){
    this.socket = io('http://localhost:3000')
  } 

  sendMessage(message: MessageTypes) {
    this.socket.emit('msgToServer', message)
  }

  receiveMessage(): Observable<MessageTypes> {
    return new Observable((observer) => {
      this.socket.on('msgToClient', (msgToClient) => {
        observer.next(msgToClient)
      })
    })
  }
}