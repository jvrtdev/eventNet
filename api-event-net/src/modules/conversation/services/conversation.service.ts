import { Injectable } from '@nestjs/common';
import { ServiceBase } from 'src/common/base';
import { QueryBuilder } from 'src/common/utils';
import { QueryParamsDto } from 'src/domain/dtos';
import { CreateConversationDto } from 'src/domain/dtos/conversation';
import { ConversationEntity } from 'src/domain/entities/conversation';
import { ConversationRepository } from '../repositories/conversation.repository';

@Injectable()
export class ConversationService
  implements ServiceBase<ConversationEntity, CreateConversationDto>
{
  constructor(
    private readonly conversationRepository: ConversationRepository,
  ) {}

  async create(dto?: CreateConversationDto): Promise<ConversationEntity> {
    return await this.conversationRepository.create(dto);
  }

  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to);

    const conversations = await this.conversationRepository.findAll(query);

    return conversations;
  }
}
