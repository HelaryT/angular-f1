import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipsFormComponent } from './championships-form.component';

describe('ChampionshipsFormComponent', () => {
  let component: ChampionshipsFormComponent;
  let fixture: ComponentFixture<ChampionshipsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionshipsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionshipsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
