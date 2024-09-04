import { Injectable } from "@nestjs/common";
import { ServiceBase } from "src/common/base";
import { ConversationEntity } from "src/domain/entities/conversation";
import { ConversationRepository } from "../repositories/conversation.repository";
import { CreateConversationDto } from "src/domain/dtos/conversation";
import { QueryParamsDto } from "src/domain/dtos";



@Injectable()
export class ConversationService implements ServiceBase<ConversationEntity,CreateConversationDto >{
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async create(dto: CreateConversationDto): Promise<ConversationEntity> {
    return await this.conversationRepository.create(dto)
  }

  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return await this.conversationRepository.findAll(queryParams)
  }
}