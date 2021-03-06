import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { Http, HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { EmployeeService } from './service/employee/employee.service';
import { QuestionService } from './service/question/question.service';
import { UserService } from './service/user/user.service';
import { VoteService } from './service/vote/vote.service';
import { VoteOptionService } from './service/vote-option/vote-option.service';
import { VotingListComponent } from './voting-list/voting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    EmployeeService,
    QuestionService,
    UserService,
    VoteService,
    VoteOptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
