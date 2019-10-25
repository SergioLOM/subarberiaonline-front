import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFindComponent } from './appointment-find.component';

describe('AppointmentFindComponent', () => {
  let component: AppointmentFindComponent;
  let fixture: ComponentFixture<AppointmentFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
