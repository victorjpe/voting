import { TestBed, async } from '@angular/core/testing';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

import { VotingListComponent } from './voting-list/voting-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VotingListComponent
      ],
      imports: [
        AppRoutes,
        RouterTestingModule

      ],

      imports: [
        AppRoutes,
        RouterTestingModule
      ],

      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
