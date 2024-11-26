import { CreateUserEventDto, UpdateUserEventDto } from '@dtos';
import { QueryBuilderEntity, UserEventEntity } from '@entities';
import { RepositoryFactory } from '@factories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEventRepository extends RepositoryFactory<
  UserEventEntity,
  CreateUserEventDto,
  UpdateUserEventDto
> {
  constructor() {
    super('userEvent');
  }

  findAll(query: QueryBuilderEntity): Promise<UserEventEntity[]> {
    return this.prismaService.userEvent.findMany({
      ...query,
    });
  }

  findAllUserEventsByEventId(eventId: string): Promise<UserEventEntity[]> {
    return this.prismaService.userEvent.findMany({
      where: {
        eventId,
      },
    });
  }

  findParticipantEventByUserId(
    userId: string,
    eventId: string,
  ): Promise<UserEventEntity> {
    return this.prismaService.userEvent.findFirst({
      where: {
        eventId: eventId,
        userId: userId,
      },
    });
  }

  findById(id: string): Promise<UserEventEntity> {
    return this.prismaService.userEvent.findFirst({
      where: {
        id,
      },
    });
  }

  findUserEventByUserId(userId: string): Promise<UserEventEntity[]> {
    return this.prismaService.userEvent.findMany({
      where: {
        userId: userId,
      },
      include: {
        event: {
          select: {
            qr_code: true,
            title: true,
            start_datetime: true,
            end_datetime: true,
            location: true,
            conversationId: true,
          },
        },
      },
    });
  }
}
