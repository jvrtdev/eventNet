import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceBase } from '@bases';
import { QueryBuilder } from '@utils';
import {
  CreateConversationDto,
  CreateParticipantDto,
  QueryParamsDto,
  UpdateConversationDto,
} from '@dtos';
import { ConversationEntity } from '@entities';
import { ConversationRepository } from '../repositories/conversation.repository';
import { ParticipantService } from 'src/modules/participant/services/participant.service';

@Injectable()
export class ConversationService
  implements
    ServiceBase<
      ConversationEntity,
      CreateConversationDto,
      UpdateConversationDto
    >
{
  constructor(
    private readonly conversationRepository: ConversationRepository,
    private readonly participantService: ParticipantService,
  ) {}

  async create(dto: CreateConversationDto): Promise<ConversationEntity> {
    const { senderId, recipientId, ...data } = dto;

    const conversation = await this.conversationRepository.create({ ...data });

    const participantData: CreateParticipantDto[] = [
      {
        conversationId: conversation.id,
        userId: senderId,
      },
      {
        conversationId: conversation.id,
        userId: recipientId,
      },
    ];

    await this.participantService.createMany(participantData);

    return conversation;
  }

  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to);

    const conversations = await this.conversationRepository.findAll(query);

    return conversations;
  }

  async findById(id: string): Promise<ConversationEntity> {
    const conversation = await this.conversationRepository.findById(id);

    if (!conversation)
      throw new HttpException('Coversation not found', HttpStatus.NOT_FOUND);

    return conversation;
  }

  async update(dto: UpdateConversationDto): Promise<ConversationEntity> {
    const conversation = await this.findById(dto.id);

    const update = await this.conversationRepository.update({
      ...dto,
      id: conversation.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<ConversationEntity> {
    const conversation = await this.findById(id);

    const remove = await this.conversationRepository.delete(conversation.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
