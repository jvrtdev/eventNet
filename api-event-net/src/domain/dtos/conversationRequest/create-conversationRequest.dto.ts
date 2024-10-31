import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateConversationRequestDto {
  @IsUUID()
  @IsNotEmpty()
  conversationId: string;

  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsUUID()
  @IsNotEmpty()
  senderId: string;
}
