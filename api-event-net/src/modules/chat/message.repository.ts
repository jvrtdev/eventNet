import { Injectable } from "@nestjs/common";
import { RepositoryFactory } from "src/common/factories";
import { CreateMessageInput, UpdateMessageInput } from "src/domain/dtos";
import { MessageEntity } from "src/domain/entities";


@Injectable()
export class MessageRepository extends RepositoryFactory<MessageEntity, CreateMessageInput, UpdateMessageInput>{
  
  constructor() {
    super('message')
  }
}