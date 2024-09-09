import { Injectable } from '@nestjs/common';
import { RepositoryFactory } from 'src/common/factories';
import { CreateEventDto, UpdateEventDto } from 'src/domain/dtos';
import { EventEntity, QueryBuilderEntity } from 'src/domain/entities';

@Injectable()
export class EventRepository extends RepositoryFactory<
  EventEntity,
  CreateEventDto,
  UpdateEventDto
> {
  constructor() {
    super('event');
  }

  findAll(query: QueryBuilderEntity): Promise<EventEntity[]> {
    return this.prismaService.event.findMany(query);
  }

  findByTitle(title: string): Promise<EventEntity | null> {
    return this.prismaService.event.findFirst({ where: { title } });
  }

  findById(id: string): Promise<EventEntity | null> {
    return this.prismaService.event.findFirst({ where: { id } });
  }
}
