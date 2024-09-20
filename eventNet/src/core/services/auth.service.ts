import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthInterface } from 'src/common/shared/@types/auth';
import { UserInterface } from 'src/common/shared/@types/user';
import { ApiServiceFactory } from 'src/core/common/factories/api.factory';
import { parseToken } from 'src/core/common/utils/parseToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiServiceFactory<AuthInterface> {
  constructor(http: HttpClient) {
    super(http);
  }

  async login(data: UserInterface): Promise<AuthInterface> {
    const response = this.http
      .post<UserInterface>(`${this.baseUrl}/auth/login`, data)
      .pipe(catchError(this.handleError))
      .subscribe((token) => {
        token.token;
      });
    console.log('resposta da requisição:', response);

    localStorage.setItem('token', JSON.stringify(response));
    localStorage.setItem('user', parseToken(String(response)));

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    console.log('Itens do ionicStorage/n token:', token, 'user:', user);
    return { isAuthenticated: true, token: token ?? '', user: user ?? '' };
  }

  async logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro inesperado';
    if (error.status === 0) {
      errorMessage = 'Não foi possível conectar ao servidor.';
    } else if (error.status === 401) {
      errorMessage = 'Login ou senha inválidos.';
    } else if (error.status === 500) {
      errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
    }
    return throwError(() => new Error(errorMessage));
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
