import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceFactory } from '@core/common/factories/api.factory';
import { UserInterface } from '@core/shared/@types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiServiceFactory<UserInterface> {
  constructor(http: HttpClient) {
    super(http);
  }
}
