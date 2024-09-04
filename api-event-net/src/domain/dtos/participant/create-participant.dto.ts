import { $Enums } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";


export class CreateParticipantDto{
  
  @IsString()
  @IsNotEmpty()
  conversationId: string; 

  @IsString()
  @IsNotEmpty()
  role: $Enums.ParticipantRole;

  @IsString()
  @IsNotEmpty()
  userId: string;
}