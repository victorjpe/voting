import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../service/question/question.service';
import { question } from '../model/question';

@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.scss']
})
export class VotingPageComponent implements OnInit {

  questionId: number;
  question: question;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.questionId = p['id'];
      this.questionService.getQuestion(this.questionId).subscribe((response) => {
        this.question = response.json();
      });
    });
  }

}
