import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterface } from '@core/shared/@types/auth';
import { UserInterface } from '@core/shared/@types/user';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiServiceFactory } from 'src/core/common/factories/api.factory';
import { parseToken } from 'src/core/common/utils/parseToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiServiceFactory<AuthInterface> {
  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  login(data: Pick<UserInterface, 'email' | 'userName' | 'password'>) {
    return this.http.post<UserInterface>(`${this.baseUrl}/auth`, data).pipe(
      tap((response) => {
        const user = parseToken(String(response.token));
        localStorage.setItem('token', response.token!);
        localStorage.setItem('user', JSON.stringify(user));
      }),
      catchError(this.handleError)
    );
  }
  create(data: UserInterface) {
    return this.http.post<UserInterface>(`${this.baseUrl}/user`, data).pipe(
      tap((response) => {
        const user = parseToken(response.token!);
        localStorage.setItem('token', response.token!);
        localStorage.setItem('user', JSON.stringify(user));
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = `Ocorreu um erro inesperado: ${error.message}`;
    if (error.status === 0) {
      errorMessage = 'Não foi possível conectar ao servidor.';
      console.log(errorMessage);
    } else if (error.status === 401) {
      errorMessage = 'Login ou senha inválidos.';
      console.log(errorMessage);
    } else if (error.status === 500) {
      errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
      console.log(errorMessage);
    }
    return throwError(() => new Error(errorMessage));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
