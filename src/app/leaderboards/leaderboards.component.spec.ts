import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardsComponent } from './leaderboards.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardsComponent;
  let fixture: ComponentFixture<LeaderboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
