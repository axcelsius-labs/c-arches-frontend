/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ChapterProgressService } from './chapter-progress.service';

describe('Service: ChapterProgress', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterProgressService],
    });
  });

  it('should ...', inject(
    [ChapterProgressService],
    (service: ChapterProgressService) => {
      expect(service).toBeTruthy();
    },
  ));
});
