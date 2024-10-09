import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { ParticipantInterface } from '@core/shared/@types/participant';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService extends ApiServiceFactory<ParticipantInterface> {
  findAllFriendsByUserId(endpoint: string): Observable<ParticipantInterface[]> {
    return this.http.get<ParticipantInterface[]>(`${this.baseUrl}/${endpoint}`);
  }
}
