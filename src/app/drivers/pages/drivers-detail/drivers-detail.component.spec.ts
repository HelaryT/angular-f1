import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversDetailComponent } from './drivers-detail.component';

describe('DriversDetailComponent', () => {
  let component: DriversDetailComponent;
  let fixture: ComponentFixture<DriversDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
