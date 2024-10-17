import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { CommentInterface } from '@core/shared/@types/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends ApiServiceFactory<CommentInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
}
