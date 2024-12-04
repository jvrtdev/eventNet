import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class NotificationsGateway {
  private baseUrl = 'https://api-event-net.onrender.com';
  private socket: Socket;
  constructor() {
    this.socket = io(this.baseUrl);
  }
  acceptInvite(conversationId: string) {
    this.socket.emit('accepted', conversationId);
  }

  refuseInvite(conversationId: string) {
    this.socket.emit('refused', conversationId);
  }

  receiveInvite() {
    return new Observable((observer) => {
      this.socket.on('InviteResponse', (InviteResponse) => {
        observer.next(InviteResponse);
      });
    });
  }
}
