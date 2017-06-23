import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Question } from "../model/index";
import { QuestionService } from "../service/question/question.service";

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.css']
})
export class VotingListComponent implements OnInit {

  private votingList: Question[];

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getVotingListPending();

  }

  getVotingListPending() {
    return this.questionService.getQuestions()
      .subscribe(questions => {
        this.votingList = questions.json();
        console.assert(!!this.votingList, 'No object returned from questionService.getQuestions()');
      });
  }

}