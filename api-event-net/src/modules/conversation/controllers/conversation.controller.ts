import { Controller, Get } from "@nestjs/common";
import { ControllerBase } from "src/common/base";
import { CreateConversationDto } from "src/domain/dtos/conversation";
import { ConversationEntity } from "src/domain/entities";
import { ConversationService } from "../services/conversation.service";
import { QueryParamsDto } from "src/domain/dtos";



@Controller('conversation')
export class ConversationController implements ControllerBase<ConversationEntity, CreateConversationDto>{
  constructor(private readonly conversationService: ConversationService) {}
  
  @Get()
  async findAll(queryParams: QueryParamsDto): Promise<ConversationEntity[]> {
    return await this.conversationService.findAll(queryParams)
  }

  
}