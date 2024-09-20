import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '@core/shared/@types/comment';
import { LikeInterface } from '@core/shared/@types/like';
import { PostInterface } from '@core/shared/@types/post';
import { ApiServiceFactory } from '@core/common/factories/api.factory';

@Injectable({
  providedIn: 'root',
})
export class FeedService extends ApiServiceFactory<PostInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
  getFeedByUserId(endpoint: string): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.baseUrl}/${endpoint}`);
  }

  likePost(endpoint: string, data: LikeInterface): Observable<LikeInterface> {
    return this.http.post<LikeInterface>(`${this.baseUrl}/${endpoint}`, data);
  }

  unlikePost() {}

  commentPost(
    endpoint: string,
    data: CommentInterface
  ): Observable<CommentInterface> {
    return this.http.post<CommentInterface>(
      `${this.baseUrl}/${endpoint}`,
      data
    );
  }
}
