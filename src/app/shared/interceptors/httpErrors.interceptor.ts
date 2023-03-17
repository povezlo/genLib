import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { NotificationService } from '../services/notification/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NotificationService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = error.error.message;
        
        console.error(`Error: ${error.status}\nMessage: ${errorMessage}`);
        this.notification.error(`Error: ${errorMessage}`)
        return EMPTY;
      })
    );
  }
}