import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from '@factories';
import { CreateParticipantDto } from '@dtos';
import { ParticipantEntity, QueryBuilderEntity } from '@entities';

@Injectable()
export class ParticipantRepository extends RepositoryFactory<
  ParticipantEntity,
  CreateParticipantDto
> {
  constructor() {
    super('participant');
  }

  findAll(query: QueryBuilderEntity): Promise<ParticipantEntity[]> {
    return this.prismaService.participant.findMany(query);
  }

  findAllParticipantsByUserId(userId: string): Promise<ParticipantEntity[]> {
    return this.prismaService.participant.findMany({
      where: {
        userId,
      },
    });
  }

  findAllParticipantsByConversationsIds(
    conversationsAccepteds: string[],
    userId: string,
  ): Promise<ParticipantEntity[]> {
    return this.prismaService.participant.findMany({
      where: {
        conversationId: {
          in: conversationsAccepteds,
        },
        userId: {
          not: userId,
        },
      },
    });
  }

  findById(id: string): Promise<ParticipantEntity | null> {
    return this.prismaService.participant.findFirst({
      where: { id },
    });
  }
}
