import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { MessageInterface } from '@core/shared/@types/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  sendMessage(message: MessageInterface) {
    this.socket.emit('msgToServer', message);
  }

  receiveMessage(): Observable<MessageInterface> {
    return new Observable((observer) => {
      this.socket.on('msgToClient', (msgToClient) => {
        observer.next(msgToClient);
      });
    });
  }
}
