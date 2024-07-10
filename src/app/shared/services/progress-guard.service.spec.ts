/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProgressGuardService } from './progress-guard.service';

describe('Service: ProgressGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressGuardService]
    });
  });

  it('should ...', inject([ProgressGuardService], (service: ProgressGuardService) => {
    expect(service).toBeTruthy();
  }));
});
