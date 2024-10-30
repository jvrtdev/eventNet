import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { ConversationInterface } from '@core/shared/@types/conversation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends ApiServiceFactory<unknown> {
  constructor(http: HttpClient) {
    super(http);
  }
  findAllPendingInvitesByUserId(
    userId: string
  ): Observable<ConversationInterface[]> {
    return this.http.get<ConversationInterface[]>(
      `${this.baseUrl}/conversation/pending/${userId}`
    );
  }
}
