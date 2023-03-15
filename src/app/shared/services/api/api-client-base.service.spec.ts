import { TestBed } from '@angular/core/testing';

import { ApiClientBaseService } from '../api/api-client-base.service';

describe('ApiClientBaseService', () => {
  let service: ApiClientBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClientBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
