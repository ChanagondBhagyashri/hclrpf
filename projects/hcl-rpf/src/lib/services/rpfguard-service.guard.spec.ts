import { TestBed, async, inject } from '@angular/core/testing';

import { RPFGuardServiceGuard } from './rpfguard-service.guard';

describe('RPFGuardServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RPFGuardServiceGuard]
    });
  });

  it('should ...', inject([RPFGuardServiceGuard], (guard: RPFGuardServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
