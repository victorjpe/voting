/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoteOptionService } from './vote-option.service';

describe('Service: VoteOption', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteOptionService]
    });
  });

  it('should ...', inject([VoteOptionService], (service: VoteOptionService) => {
    expect(service).toBeTruthy();
  }));
});