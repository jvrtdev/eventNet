import { ServiceBase } from '@bases';
import { CreateEventDto, QueryParamsDto, UpdateEventDto } from '@dtos';
import { EventEntity } from '@entities';
import { EventRepository } from '../repositories/event.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QueryBuilder } from '@utils';
import { ConversationService } from 'src/modules/conversation/services/conversation.service';

@Injectable()
export class EventService
  implements ServiceBase<EventEntity, CreateEventDto, UpdateEventDto>
{
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly conversationService: ConversationService,
  ) {}

  async create(dto: CreateEventDto): Promise<EventEntity> {
    const titleAlreadyExists = await this.eventRepository.findByTitle(
      dto.title,
    );

    if (titleAlreadyExists)
      throw new HttpException('Title already exists', HttpStatus.BAD_REQUEST);

    const { id } = await this.conversationService.create({
      isGroup: true,
      status: null,
    });

    dto.conversationId = id;
    const event = await this.eventRepository.create(dto);

    return event;
  }

  async findAll(queryParams: QueryParamsDto): Promise<EventEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.eventRepository.findAll(query);

    return data;
  }

  async findById(id: string): Promise<EventEntity> {
    const event = await this.eventRepository.findById(id);

    if (!event) throw new HttpException('Event not find', HttpStatus.NOT_FOUND);

    return event;
  }

  async findByTitle(title: string): Promise<EventEntity> {
    const event = await this.eventRepository.findByTitle(title);

    if (!event) throw new HttpException('Event not find', HttpStatus.NOT_FOUND);

    return event;
  }

  async update(dto: UpdateEventDto): Promise<EventEntity> {
    const event = await this.findById(dto.id);

    const update = await this.eventRepository.update({ ...dto, id: event.id });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<EventEntity> {
    const event = await this.findById(id);

    await this.conversationService.remove(event.conversationId);

    const remove = await this.eventRepository.delete(event.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
