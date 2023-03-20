import { TestBed } from '@angular/core/testing';

import { CacheCoursesResolver } from './cacheCourses.resolver';

describe('CacheCoursesResolver', () => {
  let resolver: CacheCoursesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CacheCoursesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
