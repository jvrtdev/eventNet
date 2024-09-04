import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { QueryBuilder } from 'src/common/utils';
import { CreateConversationDto } from 'src/domain/dtos/conversation';
import { ConversationEntity } from 'src/domain/entities/conversation';

@Injectable()
export class ConversationRepository extends RepositoryFactory<
  ConversationEntity,
  CreateConversationDto
> {
  constructor() {
    super('conversation');
  }

  findAll(query?: any): Promise<ConversationEntity[]> {
    return this.prismaService.conversation.findMany(query);
  }
}
