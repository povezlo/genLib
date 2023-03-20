import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TokenService } from '../token/token.service';
import { ApiClientBaseService } from '../api/api-client-base.service';
import { ITokenResponse } from 'src/app/shared/interfaces';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiClientBaseService,
    private tokenService: TokenService,
    private notification: NotificationService
  ) {}

  async autologin(): Promise<void> {    
    await firstValueFrom(this.apiService.get<ITokenResponse>('auth/anonymous', { platform: 'subscriptions' }))
    .then(({ token }: ITokenResponse) => { 
      this.tokenService.setToken(token);
      this.notification.success('You are authorized. Welcome to our course!');
    });
  }

  logout(): void {
    this.tokenService.removeToken();
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();

    return !!token;
  }
}

export function initApp(auth: AuthService) {
  return () => auth.autologin();
}