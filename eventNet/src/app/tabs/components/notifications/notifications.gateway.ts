import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class NotificationsGateway {
  private baseUrl = 'http://localhost:3000';
  private socket: Socket;
  constructor() {
    this.socket = io(this.baseUrl);
  }
  acceptInvite() {}

  refuseInvite() {}

  receiveInvite() {}
}
