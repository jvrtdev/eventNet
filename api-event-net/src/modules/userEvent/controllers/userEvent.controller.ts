import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserEventService } from '../services/userEvent.service';
import { CreateUserEventDto, QueryParamsDto, UpdateUserEventDto } from '@dtos';
import { UserEventEntity } from '@entities';

@Controller('userEvent')
export class UserEventController {
  constructor(private readonly userEventService: UserEventService) {}

  @Post()
  createUserEvent(
    @Body() createUserEventDto: CreateUserEventDto,
  ): Promise<UserEventEntity> {
    return this.userEventService.create(createUserEventDto);
  }

  @Get()
  findAllUserEvents(
    @Query() queryParams: QueryParamsDto,
  ): Promise<UserEventEntity[]> {
    return this.userEventService.findAll(queryParams);
  }

  @Get('participants/:eventId')
  findAllUserEventsByEventId(
    @Param('eventId') eventId: string,
  ): Promise<UserEventEntity[]> {
    return this.userEventService.findAllUserEventsByEventId(eventId);
  }

  @Get(':id')
  findUserEventById(@Param('id') id: string): Promise<UserEventEntity> {
    return this.userEventService.findById(id);
  }

  @Put(':id')
  updateUserEvent(
    @Param('id') id: string,
    @Body() updateUserEventDto: UpdateUserEventDto,
  ): Promise<UserEventEntity> {
    updateUserEventDto.id = id;
    return this.userEventService.update(updateUserEventDto);
  }

  @Delete(':id')
  removeUserEvent(@Param('id') id: string): Promise<UserEventEntity> {
    return this.userEventService.remove(id);
  }
}
