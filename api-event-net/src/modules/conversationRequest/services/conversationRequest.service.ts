import { ServiceBase } from '@bases';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConversationRequestEntity } from '@entities';
import { CreateConversationRequestDto } from '@dtos';
import { ConversationRequestRepository } from '../repositories/conversationRequest.repository';
import { ConversationService } from 'src/modules/conversation/services/conversation.service';

@Injectable()
export class ConversationRequestService
  implements
    ServiceBase<ConversationRequestEntity, CreateConversationRequestDto>
{
  constructor(
    private readonly conversationRequestRepository: ConversationRequestRepository,
    @Inject(forwardRef(() => ConversationService))
    private readonly conversationService: ConversationService,
  ) {}

  async create(
    dto: CreateConversationRequestDto,
  ): Promise<ConversationRequestEntity> {
    const conversationRequest =
      await this.conversationRequestRepository.create(dto);

    return conversationRequest;
  }

  async findAll(): Promise<ConversationRequestEntity[]> {
    const data = await this.conversationRequestRepository.findAll();

    return data;
  }

  async findAllByConversationId(
    conversationId: string,
  ): Promise<ConversationRequestEntity[]> {
    const data =
      await this.conversationRequestRepository.findAllByConversationId(
        conversationId,
      );

    return data;
  }

  async findById(id: string): Promise<ConversationRequestEntity> {
    const conversationRequest =
      await this.conversationRequestRepository.findById(id);

    return conversationRequest;
  }

  async remove(id: string): Promise<ConversationRequestEntity> {
    const conversationRequest = await this.findById(id);

    const remove = await this.conversationRequestRepository.delete(
      conversationRequest.id,
    );

    if (!remove)
      throw new HttpException('Failed to remove', HttpStatus.NOT_ACCEPTABLE);

    return remove;
  }

  async accepted(id: string): Promise<ConversationRequestEntity> {
    const conversationRequest = await this.findById(id);

    const conversationRequestRemoved = await this.remove(
      conversationRequest.id,
    );

    await this.conversationService.update({
      id: conversationRequest.conversationId,
      status: 'accepted',
    });

    return conversationRequestRemoved;
  }

  async refused(id: string): Promise<ConversationRequestEntity> {
    const conversationRequest = await this.findById(id);

    const conversationRequestRemoved = await this.remove(
      conversationRequest.id,
    );

    await this.conversationService.remove(conversationRequest.conversationId);

    return conversationRequestRemoved;
  }
}
