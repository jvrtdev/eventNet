import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { MessageInterfaceWs } from '@core/shared/@types/message.interface-ws';

@Injectable({
  providedIn: 'root',
})
export class ChatGateway {
  private baseUrl = 'http://localhost:3000';
  private socket: Socket;

  constructor() {
    this.socket = io(this.baseUrl);
  }

  sendMessage(message: MessageInterfaceWs) {
    this.socket.emit('msgToServer', message);
  }

  receiveMessage(): Observable<MessageInterfaceWs> {
    return new Observable((observer) => {
      this.socket.on('msgToClient', (msgToClient) => {
        observer.next(msgToClient);
      });
    });
  }
}
