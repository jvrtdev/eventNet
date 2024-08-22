import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'

@WebSocketGateway({ cors: true})
export class ChatGateway {

  @WebSocketServer()
  server: Server;
  
  @SubscribeMessage('message')
  handleMessage(client: Socket, message: {sender: string, text: string}): void {
    this.server.emit('message', message)
  }
}
