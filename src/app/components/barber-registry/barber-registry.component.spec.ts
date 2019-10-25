import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberRegistryComponent } from './barber-registry.component';

describe('BarberRegistryComponent', () => {
  let component: BarberRegistryComponent;
  let fixture: ComponentFixture<BarberRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
