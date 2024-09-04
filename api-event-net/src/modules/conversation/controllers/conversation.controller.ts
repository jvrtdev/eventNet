import { Body, Controller, Get, Post } from "@nestjs/common";
import { ControllerBase } from "src/common/base";
import { CreateConversationDto } from "src/domain/dtos/conversation";
import { ConversationEntity } from "src/domain/entities";
import { ConversationService } from "../services/conversation.service";
import { QueryParamsDto } from "src/domain/dtos";



@Controller('conversation')
export class ConversationController{
  constructor(private readonly conversationService: ConversationService) {}
  
  @Get()
  findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return this.conversationService.findAll(queryParams)
  }

  @Post()
  create(@Body() dto: CreateConversationDto) {
    this.conversationService.create(dto)
  }

  
}