import { ServiceBase } from '@bases';
import { CreateParticipantDto, QueryParamsDto } from '@dtos';
import { ParticipantEntity } from '@entities';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { QueryBuilder } from '@utils';
import { ConversationService } from 'src/modules/conversation/services/conversation.service';
import { ParticipantRepository } from '../repositories/participant.repository';

@Injectable()
export class ParticipantService
  implements ServiceBase<ParticipantEntity, CreateParticipantDto>
{
  constructor(
    private readonly participantRepository: ParticipantRepository,
    @Inject(forwardRef(() => ConversationService))
    private readonly conversationService: ConversationService,
  ) {}

  async createMany(dto: CreateParticipantDto[]): Promise<ParticipantEntity[]> {
    const participants = await this.participantRepository.createMany(dto);

    return participants;
  }

  async create(dto: CreateParticipantDto): Promise<ParticipantEntity> {
    const participant = await this.participantRepository.create(dto);

    return participant;
  }

  async findAll(queryParams: QueryParamsDto): Promise<ParticipantEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.participantRepository.findAll(query);

    return data;
  }

  async findAllParticipantsByUserId(
    userId: string,
  ): Promise<ParticipantEntity[]> {
    const participants =
      await this.participantRepository.findAllParticipantsByUserId(userId);

    return participants;
  }

  async findAllFriendsByUserId(userId: string): Promise<ParticipantEntity[]> {
    const participants = await this.findAllParticipantsByUserId(userId);

    const conversationsIds = participants.map(
      (participant) => participant.conversationId,
    );

    const conversationAccepteds =
      await this.conversationService.findAllConversationsWithStatusAcceptedByConversationsIds(
        conversationsIds,
      );

    const ParticipantsFromThisConversations =
      await this.participantRepository.findAllParticipantsByConversationsIds(
        conversationAccepteds,
        userId,
      );

    return ParticipantsFromThisConversations;
  }

  async findById(id: string): Promise<ParticipantEntity> {
    const participant = await this.participantRepository.findById(id);

    if (!participant)
      throw new HttpException('Participant not found', HttpStatus.NOT_FOUND);

    return participant;
  }

  async remove(id: string): Promise<ParticipantEntity> {
    const particpant = await this.findById(id);

    const remove = await this.participantRepository.delete(particpant.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
