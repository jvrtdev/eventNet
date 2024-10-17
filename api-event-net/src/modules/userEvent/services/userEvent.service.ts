import { ServiceBase } from '@bases';
import { CreateUserEventDto, QueryParamsDto, UpdateUserEventDto } from '@dtos';
import { UserEventEntity } from '@entities';
import { UserEventRepository } from '../repositories/userEvent.reposiory';
import { ParticipantService } from 'src/modules/participant/services/participant.service';
import { EventService } from 'src/modules/event/services/event.service';
import { QueryBuilder } from '@utils';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class UserEventService
  implements
    ServiceBase<UserEventEntity, CreateUserEventDto, UpdateUserEventDto>
{
  constructor(
    private readonly userEventRepository: UserEventRepository,
    private readonly participantService: ParticipantService,
    @Inject(forwardRef(() => EventService))
    private readonly eventService: EventService,
  ) {}

  async create(dto: CreateUserEventDto): Promise<UserEventEntity> {
    const userEvent = await this.userEventRepository.create(dto);

    const { conversationId } = await this.eventService.findById(
      userEvent.eventId,
    );

    if (userEvent.role == 'owner') {
      var role = 'admin';
    }

    this.participantService.create({
      userId: userEvent.userId,
      conversationId,
      role,
    });

    return userEvent;
  }

  async findAll(queryParams: QueryParamsDto): Promise<UserEventEntity[]> {
    const { query } = new QueryBuilder()
      .sort(queryParams.orderBy)
      .date('createdAt', queryParams.from, queryParams.to)
      .pagination(queryParams.page, queryParams.pageSize);

    const data = await this.userEventRepository.findAll(query);

    return data;
  }

  async findAllUserEventsByEventId(
    eventId: string,
  ): Promise<UserEventEntity[]> {
    const userEvents =
      this.userEventRepository.findAllUserEventsByEventId(eventId);

    return userEvents;
  }

  async findById(id: string): Promise<UserEventEntity> {
    const userEvent = await this.userEventRepository.findById(id);

    if (!userEvent)
      throw new HttpException('UserEvent not found', HttpStatus.NOT_FOUND);

    return userEvent;
  }

  async update(dto: UpdateUserEventDto): Promise<UserEventEntity> {
    const userEvent = await this.findById(dto.id);

    const update = await this.userEventRepository.update({
      ...dto,
      id: userEvent.id,
    });

    if (!update)
      throw new HttpException('Failed to update', HttpStatus.NOT_ACCEPTABLE);

    return update;
  }

  async remove(id: string): Promise<UserEventEntity> {
    const userEvent = await this.findById(id);

    const remove = await this.userEventRepository.delete(userEvent.id);

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }
}
