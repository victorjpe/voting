import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPageComponent } from './voting-page.component';

describe('VotingPageComponent', () => {
  let component: VotingPageComponent;
  let fixture: ComponentFixture<VotingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});