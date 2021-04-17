import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipsDetailComponent } from './championships-detail.component';

describe('ChampionshipsDetailComponent', () => {
  let component: ChampionshipsDetailComponent;
  let fixture: ComponentFixture<ChampionshipsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
