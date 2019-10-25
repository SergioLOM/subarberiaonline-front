import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRegistryComponent } from './appointment-registry.component';

describe('AppointmentRegistryComponent', () => {
  let component: AppointmentRegistryComponent;
  let fixture: ComponentFixture<AppointmentRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
