import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceFactory<T> {
  private cache = new Map<string, Observable<T[]>>();

  constructor(protected readonly http: HttpClient) {}

  protected baseUrl = 'https://api-event-net.onrender.com';
  //protected baseUrl = 'http://localhost:3000';

  getAllData(endpoint: string, params?: Record<string, any>): Observable<T[]> {
    const httpParams = new HttpParams({ fromObject: params });
    const url = `${this.baseUrl}/${endpoint}?${httpParams.toString()}`;

    if (this.cache.has(url)) {
      console.log('resposta do cache', this.cache);
      return this.cache.get(url)!;
    }

    const response$ = this.http.get<T[]>(url).pipe(
      shareReplay(1),
      catchError((error) => {
        console.error('error ao buscar dados', error);
        this.cache.delete(url);
        throw error;
      })
    );

    this.cache.set(url, response$);
    console.log('resposta do banco', response$);
    return response$;

    // return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`, {
    //   params: httpParams,
    // });
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
