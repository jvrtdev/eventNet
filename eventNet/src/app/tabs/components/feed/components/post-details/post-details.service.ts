import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostInterface } from '@core/shared/@types/post';
import { ApiServiceFactory } from 'src/core/common/factories/api.factory';

@Injectable({
  providedIn: 'root',
})
export class PostDetailsService extends ApiServiceFactory<PostInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
}
