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

  findById(id: string): Promise<UserEventEntity> {
    return this.prismaService.userEvent.findFirst({
      where: {
        id,
      },
    });
  }
}
