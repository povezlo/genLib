import { Injectable, Inject } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { ITokenResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject('ENV_API') private readonly apiUrl: string,
    @Inject('BASE_URL') private readonly baseUrl: string,
    private http: HttpClient,
    private tokenService: TokenService,
  ) {}

  login(): Observable<ITokenResponse> {    
    const httpParams = new HttpParams();
        console.log('init app ');
    return this.http.get<ITokenResponse>(`${this.baseUrl}/${this.apiUrl}/auth/anonymous`, { 
      params: httpParams.set('platform', 'subscriptions')
     }).pipe(
      tap(({ token }: ITokenResponse) => {
        this.tokenService.setToken(token);
      }),
      catchError((error: HttpErrorResponse) => {

        return throwError(() => error);
      }),
    );
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();

    return !!token;
  }
}
