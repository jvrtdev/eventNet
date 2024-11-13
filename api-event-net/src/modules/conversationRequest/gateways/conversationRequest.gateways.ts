import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ConversationRequestService } from '../services/conversationRequest.service';

@WebSocketGateway({ cors: true })
export class ConversationRequestGateway {
  @WebSocketServer() server: Server;

  constructor(
    private readonly conversationRequestService: ConversationRequestService,
  ) {}

  @SubscribeMessage('accepted')
  async handlerInviteAccepted(
    @ConnectedSocket() client: Socket,
    id: string,
  ): Promise<void> {
    const invite = this.conversationRequestService.accepted(id);

    this.server.emit('InviteResponse', invite, client.id);
  }

  @SubscribeMessage('refused')
  async handlerInviteRefused(
    @ConnectedSocket() client: Socket,
    id: string,
  ): Promise<void> {
    const invite = this.conversationRequestService.refused(id);

    this.server.emit('InviteResponse', invite, client.id);
  }
}
