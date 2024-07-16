/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DialogueService } from './dialogue.service';

describe('Service: Dialogue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogueService],
    });
  });

  it('should ...', inject([DialogueService], (service: DialogueService) => {
    expect(service).toBeTruthy();
  }));
});
