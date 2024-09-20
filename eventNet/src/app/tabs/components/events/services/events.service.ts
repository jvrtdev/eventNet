import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventInterface } from '@core/shared/@types/event';
import { ApiServiceFactory } from 'src/core/common/factories/api.factory';

@Injectable({
  providedIn: 'root',
})
export class EventsService extends ApiServiceFactory<EventInterface> {
  constructor(http: HttpClient) {
    super(http);
  }

  getTudo(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }
}
