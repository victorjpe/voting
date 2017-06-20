import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../service/question/question.service';
import { question } from '../model/question';
import { VotingOption } from '../model/voting-option';

@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.scss']
})
export class VotingPageComponent implements OnInit {

  question: question;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.questionService.getQuestion(params['id']).subscribe((response) => {
        this.question = response.json();
      });
    });
  }

}
