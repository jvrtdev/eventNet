import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceFactory<T> {
  constructor(protected readonly http: HttpClient) {}

  protected baseUrl = 'https://api-event-net.onrender.com';

  getAllData(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`);
  }

  getDataById(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  postData(endpoint: string, data: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  updateData(endpoint: string, data: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, data);
  }

  deleteData(endpoint: string): Observable<T | null> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }
}
