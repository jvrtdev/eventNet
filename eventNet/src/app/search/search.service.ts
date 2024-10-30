import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { PostInterface } from '@core/shared/@types/post';
import { UserInterface } from '@core/shared/@types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService extends ApiServiceFactory<any> {
  constructor(http: HttpClient) {
    super(http);
  }
  findAllPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.baseUrl}/post`);
  }
  findAllUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.baseUrl}/user`);
  }
}
