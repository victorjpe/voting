/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionService } from './question.service';
import { HttpModule, Http } from "@angular/http";

describe('Service: Question', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService, Http]
    });
  });

  it('should be valid', inject([QuestionService], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));

  // it('should get list of questions posted', async(inject([QuestionService], (service: QuestionService) => {
  //   service.getQuestions().subscribe(q => {
  //     expect(q).toBeTruthy();
  //   }, error => {
  //     console.log(error);
  //     expect(error).toBeNull();
  //   })
  // })));
});