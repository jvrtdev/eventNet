import { IsNotEmpty, IsUUID } from 'class-validator';

export class ConversationRequestDto {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @IsUUID()
  @IsNotEmpty()
  senderId: string;
}
