import { Injectable } from "@nestjs/common";
import { ServiceBase } from "src/common/base";
import { ConversationEntity } from "src/domain/entities/conversation";
import { ConversationRepository } from "../repositories/conversation.repository";
import { CreateConversationDto } from "src/domain/dtos/conversation";
import { QueryParamsDto } from "src/domain/dtos";
import { ParticipantService } from "src/modules/participant/services/participant.service";



@Injectable()
export class ConversationService implements ServiceBase<ConversationEntity,CreateConversationDto >{
  constructor(
    private readonly conversationRepository: ConversationRepository,
    private readonly participantService: ParticipantService
  ) {}

  async create(dto: CreateConversationDto): Promise<ConversationEntity> {
    const addParticipants = await this.participantService.create()

    return await this.conversationRepository.create(dto)
  }

  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return await this.conversationRepository.findAll(queryParams)
  }
}