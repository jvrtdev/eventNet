import { IsNotEmpty, IsString } from "class-validator";

export class UpdateMessageInput{

  @IsString()
  @IsNotEmpty()
  content: string;

}