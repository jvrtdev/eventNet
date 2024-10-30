import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { CreateConversationDto } from '@core/shared/@types/dtos/create-conversation.dto';
import { ParticipantInterface } from '@core/shared/@types/participant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService extends ApiServiceFactory<ParticipantInterface> {
  findAllFriendsByUserId(id: string): Observable<ParticipantInterface[]> {
    return this.http.get<ParticipantInterface[]>(
      `${this.baseUrl}/participant/user/${id}`
    );
  }
  inviteNetwork(
    dto: CreateConversationDto
  ): Observable<unknown /*ConversationInterface*/> {
    return this.http.post<CreateConversationDto>(
      `${this.baseUrl}/conversation`,
      dto
    );
  }
  acceptNetwork(conversationId: string): Observable<ConversationInterface> {
    return this.http.put<ConversationInterface>(
      `${this.baseUrl}/conversation/${conversationId}`,
      { status: 'accepted' }
    );
  }
}
