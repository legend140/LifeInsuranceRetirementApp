import { TestBed } from '@angular/core/testing';

import { ConsumerDetailGuard } from './consumer-detail.guard';

describe('ConsumerDetailGuard', () => {
  let guard: ConsumerDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConsumerDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
