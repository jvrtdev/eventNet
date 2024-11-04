import { ServiceBase } from '@bases';
import { CreateConversationRequestDto } from '@dtos';
import { ConversationRequestEntity } from '@entities';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConversationService } from 'src/modules/conversation/services/conversation.service';
import { ConversationRequestRepository } from '../repositories/conversationRequest.repository';

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

  async findAllConversationsRequestsByConversationId(
    conversationId: string,
  ): Promise<ConversationRequestEntity[]> {
    const data =
      await this.conversationRequestRepository.findAllConversationsRequestsByConversationId(
        conversationId,
      );

    return data;
  }

  async findAllConversationsRequestsBySenderId(
    senderId: string,
  ): Promise<ConversationRequestEntity[]> {
    const data =
      await this.conversationRequestRepository.findAllConversationsRequestsBySenderId(
        senderId,
      );

    return data;
  }

  async findAllConversationsRequestsByRecipientId(
    recipientId: string,
  ): Promise<ConversationRequestEntity[]> {
    const data =
      await this.conversationRequestRepository.findAllConversationsRequestsByRecipientId(
        recipientId,
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
