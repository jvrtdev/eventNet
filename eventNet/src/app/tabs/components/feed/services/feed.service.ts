import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceFactory } from 'src/common/factories/api.factory';
import { CommentInterface } from 'src/common/shared/@types/comment';
import { LikeInterface } from 'src/common/shared/@types/like';
import { PostInterface } from 'src/common/shared/@types/post';

@Injectable({
  providedIn: 'root',
})
export class FeedService extends ApiServiceFactory<PostInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
  getFeedByUserId(endpoint: string):Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.baseUrl}/${endpoint}`)
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
