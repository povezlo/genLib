import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiClientBaseService } from '../api';
import { TokenService } from '../token';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiClientBaseService, useValue: {}},
        { provide: TokenService, useValue: {}},
        { provide: Notification, useValue: {}},
        { provide: MatSnackBar, useValue: {}}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
