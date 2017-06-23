import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class QuestionService {
  private url: string = `${environment.api_url}/questions`;

  constructor(
    private http: Http
  ) { }

  getQuestions() {
    return this.http.get(this.url);
  }

}