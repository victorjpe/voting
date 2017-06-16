import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class QuestionService {

  path: string = 'questions';

  constructor(
    private http: Http
  ) { }

  getQuestion(id: number) {
    return this.http.get(`${environment.api_url}${this.path}/${id}`);
  }
  /*
  PATCH /questions Patch an existing model instance or insert a new one into the data source.
  GET /questions Find all instances of the model matched by filter from the data source.
  PUT /questions Patch an existing model instance or insert a new one into the data source.
  POST /questions Create a new instance of the model and persist it into the data source.
  PATCH /questions/{id} Patch attributes for a model instance and persist it into the data source.
  GET /questions/{id} Find a model instance by {{id}} from the data source.
  HEAD /questions/{id} Check whether a model instance exists in the data source.
  PUT /questions/{id} Patch attributes for a model instance and persist it into the data source.
  DELETE /questions/{id} Delete a model instance by {{id}} from the data source.
  GET /questions/{id}/author Fetches belongsTo relation author.
  GET /questions/{id}/exists Check whether a model instance exists in the data source.
  POST /questions/{id}/replace Replace attributes for a model instance and persist it into the data source.
  GET /questions/{id}/votes Queries votes of question.
  POST /questions/{id}/votes Creates a new instance in votes of this model.
  DELETE /questions/{id}/votes Deletes all votes of this model.
  GET /questions/{id}/votes/{fk} Find a related item by id for votes.
  PUT /questions/{id}/votes/{fk} Update a related item by id for votes.
  DELETE /questions/{id}/votes/{fk} Delete a related item by id for votes.
  GET /questions/{id}/votes/count Counts votes of question.
  GET /questions/{id}/votingOptions Queries votingOptions of question.
  POST /questions/{id}/votingOptions Creates a new instance in votingOptions of this model.
  DELETE /questions/{id}/votingOptions Deletes all votingOptions of this model.
  GET /questions/{id}/votingOptions/{fk} Find a related item by id for votingOptions.
  PUT /questions/{id}/votingOptions/{fk} Update a related item by id for votingOptions.
  DELETE /questions/{id}/votingOptions/{fk} Delete a related item by id for votingOptions.
  GET /questions/{id}/votingOptions/count Counts votingOptions of question.
  GET /questions/change-stream Create a change stream.
  POST /questions/change-stream Create a change stream.
  GET /questions/count Count instances of the model matched by where from the data source.
  GET /questions/findOne Find first instance of the model matched by filter from the data source.
  POST /questions/replaceOrCreate Replace an existing model instance or insert a new one into the data source.
  POST /questions/update Update instances of the model matched by {{where}} from the data source.*/


}