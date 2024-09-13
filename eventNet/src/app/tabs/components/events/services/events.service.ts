import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiServiceFactory } from "src/common/factories/api.factory";
import { EventInterface } from "src/common/shared/@types/event";

@Injectable({
  providedIn: 'root'
})
export class EventsService extends ApiServiceFactory<EventInterface>{
  constructor(http: HttpClient) {
    super(http)
  }

  getTudo(endpoint: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`)
  }

  
}
