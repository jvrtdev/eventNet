import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventInterface } from '@core/shared/@types/event';
import { ApiServiceFactory } from 'src/core/common/factories/api.factory';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { UserEventInterface } from '@core/shared/@types/user-event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends ApiServiceFactory<EventInterface> {
  constructor(http: HttpClient) {
    super(http);
  }

  getTudo(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  signInEvent(dto: { userId: string; eventId: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/userEvent`, dto);
  }

  getParticipantByConversationId(
    conversationId: string,
  ): Observable<ConversationInterface> {
    return this.http.get<ConversationInterface>(
      `${this.baseUrl}/conversation/${conversationId}`,
    );
  }

  findEventsAttendance(userId: string): Observable<UserEventInterface[]> {
    return this.http.get<UserEventInterface[]>(
      `${this.baseUrl}/userEvent/${userId}`,
    );
  }
  checkUserEventIsSub(userId: string, eventId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/userEvent/${userId}/${eventId}`);
  }
}
