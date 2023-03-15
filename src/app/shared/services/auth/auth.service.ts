import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from '../token/token.service';
import { ITokenResponse } from 'src/app/shared/interfaces';
import { ApiClientBaseService } from '../api/api-client-base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiClientBaseService,
    private tokenService: TokenService,
  ) {}

  login(): Observable<ITokenResponse> {    
    return this.apiService.get<ITokenResponse>('auth/anonymous', { platform: 'subscriptions' })
    .pipe(
      tap(({ token }: ITokenResponse) => {
        this.tokenService.setToken(token);
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
