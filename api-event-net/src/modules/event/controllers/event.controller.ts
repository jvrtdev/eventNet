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
import { EventService } from '../services/event.service';
import { CreateEventDto, QueryParamsDto, UpdateEventDto } from '@dtos';
import { EventEntity } from '@entities';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto): Promise<EventEntity> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  findAllEvents(@Query() queryParams: QueryParamsDto): Promise<EventEntity[]> {
    return this.eventService.findAll(queryParams);
  }

  @Get(':id')
  findEventById(@Param('id') id: string): Promise<EventEntity> {
    return this.eventService.findById(id);
  }

  @Put()
  updateEvent(@Body() updateEventDto: UpdateEventDto): Promise<EventEntity> {
    return this.eventService.update(updateEventDto);
  }

  @Delete(':id')
  removeEvent(@Param('id') id: string): Promise<EventEntity> {
    return this.eventService.remove(id);
  }
}
