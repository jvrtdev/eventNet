import { IsNotEmpty, IsString } from "class-validator";


export class CreateLikeDto{
  @IsString()
  @IsNotEmpty()
  postId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}