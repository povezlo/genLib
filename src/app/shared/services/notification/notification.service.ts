import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationComponent } from '../../components/notification';


export const DELAY_TIME_3000 = 3000;

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  error(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: DELAY_TIME_3000,
      data: { message },
      panelClass: ['mat-snackbar_error'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  success(message: string): void {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: DELAY_TIME_3000,
      data: { message },
      panelClass: ['mat-snackbar_success'],
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
