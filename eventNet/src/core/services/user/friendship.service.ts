import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { FriendshipInterface } from '@core/shared/@types/friendship';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService extends ApiServiceFactory<FriendshipInterface> {
  findAllFriendsByUserId(endpoint: string): Observable<FriendshipInterface[]> {
    return this.http.get<FriendshipInterface[]>(`${this.baseUrl}/${endpoint}`);
  }
}
