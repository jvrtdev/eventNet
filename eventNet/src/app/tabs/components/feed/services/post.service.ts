import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { PostInterface } from '@core/shared/@types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService extends ApiServiceFactory<PostInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
}
