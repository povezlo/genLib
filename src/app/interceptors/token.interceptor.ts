import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthService, TokenService } from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.auth.isAuthenticated()) {
      const token = this.tokenService.getToken();

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
