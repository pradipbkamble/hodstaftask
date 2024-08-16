import { TestBed } from '@angular/core/testing';

import { StafroleGuard } from './stafrole.guard';

describe('StafroleGuard', () => {
  let guard: StafroleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StafroleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
