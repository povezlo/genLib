import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BASE_URL, ENV_API } from 'src/assets/injectTokens/injectTokens';

import { ApiClientBaseService } from '../api/api-client-base.service';

describe('ApiClientBaseService', () => {
  let service: ApiClientBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [
          { provide: ENV_API, useValue: 'ENV_API' },
          { provide: BASE_URL, useValue: 'BASE_URL'}
        ]
    });
    service = TestBed.inject(ApiClientBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
