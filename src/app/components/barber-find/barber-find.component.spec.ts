import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberFindComponent } from './barber-find.component';

describe('BarberFindComponent', () => {
  let component: BarberFindComponent;
  let fixture: ComponentFixture<BarberFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
