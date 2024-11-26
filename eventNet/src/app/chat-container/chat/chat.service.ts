import { Injectable } from '@angular/core';
import { MessageInterface } from '@core/shared/@types/message';
import { UserInterface } from '@core/shared/@types/user';
import { HttpClient } from '@angular/common/http';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { Observable } from 'rxjs';
import { EventInterface } from '@core/shared/@types/event';

@Injectable({
  providedIn: 'root',
})
export class ChatService extends ApiServiceFactory<MessageInterface | any> {
  constructor(http: HttpClient) {
    super(http);
  }

  getMessagesByConversationId(
    endpoint: string,
  ): Observable<MessageInterface[]> {
    return this.http.get<MessageInterface[]>(`${this.baseUrl}/${endpoint}`);
  }

  getReceiverByConversationId(endpoint: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.baseUrl}/${endpoint}`);
  }

  getEventByConversationId(conversationId: string): Observable<EventInterface> {
    return this.http.get<EventInterface>(
      `${this.baseUrl}/conversation/${conversationId}`,
    );
  }
}
