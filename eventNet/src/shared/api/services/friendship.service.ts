import { Injectable } from '@angular/core';
import { ApiServiceFactory } from 'src/common/factories/api.factory';
import { FriendshipInterface } from '../../../common/shared/@types/friendship';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService extends ApiServiceFactory<FriendshipInterface> {
  findAllFriendsByUserId(
    endpoint: string
  ): Observable<FriendshipInterface[]> {
    return this.http.get<FriendshipInterface[]>(`${this.baseUrl}/${endpoint}`);
  }
}
